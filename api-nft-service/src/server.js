require('dotenv').config()
const express = require('express')
const axios = require('axios')

const {
    MORALIS_API_KEY,
    MORALIS_IPFS_GW
} = process.env

const verifyAuth = (req, res, next) => {
     next()
}

const getDataFromMoralis = async (walletAddress) => {
    const options = {
        method: 'GET',
        url: `https://deep-index.moralis.io/api/v2/${walletAddress}/nft`,
        params: {chain: 'polygon', format: 'decimal'},
        headers: {accept: 'application/json', 'X-API-Key': MORALIS_API_KEY}
      };

      try {
        const { data } = await axios.request(options)
        const { result } = data

        const newResult = result.map(nft => {

            const parsedMetadata = JSON.parse(nft.metadata)
            let imageUrl = ''

            if (parsedMetadata) {
                if (parsedMetadata.image.includes('ipfs')) {
                    imageUrlTemp = parsedMetadata.image.split('ipfs://')[1]
                    imageUrl = `${MORALIS_IPFS_GW}/${imageUrlTemp}`
                } else if (parsedMetadata !== null || parsedMetadata !== undefined) {
                    imageUrl = parsedMetadata.image
                }  else {
                    imageUrl = 'placeholder'
                }
            }

            return {
                ...nft,
                metadata: parsedMetadata,
                image: imageUrl
            }
        })

        return newResult
      } catch (error) {
        console.error(error)
        throw error
      }
}


const createServer = () => {
    const app = express()

    app.get('/nft/:walletAddress', verifyAuth, async (req, res) => {
        const { walletAddress } = req.params;
    
        const result = await getDataFromMoralis(walletAddress)
    
        res.json(result)
    })

    return app;
}


module.exports = {
    createServer
}

