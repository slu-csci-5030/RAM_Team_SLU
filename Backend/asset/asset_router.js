import express from 'express'
import * as fs from 'fs'

const router = express.Router()

function validateAssetId(id) {
  if (!isNaN(id)) {
    try {
      id = parseInt(id)
      return true
    } catch (no) {}
  }
  return false
}

function getAssetById(id) {
  let asset = null
  if (id && id === 1234) {
    let assetFileBuffer = fs.readFileSync('./public/sample_asset.json', (err, data) => {
      if (err) {
        console.error(err)
        return null
      }
    })
    asset = assetFileBuffer !== null && JSON.parse(assetFileBuffer.toString())
  }
  return asset
}

router.route('/:id').get(async (req, res) => {
  let id = req.params.id
  if (!validateAssetId(id)) {
    res.status(400).send('Invalid asset ID.')
  }
  id = parseInt(id)

  let asset = getAssetById(id)
  if (asset) {
    res.json(asset)
  } else {
    res.status(404).send('Asset does not exist.')
  }
})

export { router as default }
