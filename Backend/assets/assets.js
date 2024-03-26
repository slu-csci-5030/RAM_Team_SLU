/**
 * Assets endpoint router
 */

import express from 'express'

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

function validateCategory(category) {
  let categories = ['publications', 'grants', 'professional-activities', 'teaching-activities', 'projects', 'equipment', 'annotations']
  return categories.includes(category)
}

// This function will be implemented by the team implementing the Get Asset API. This only provides dummy data.
function getAsset(category, id) {
  return ({
    "id": id,
    "name": "sample name",
    "description": "sample description",
    "coded-in": "sample coded in",
    "contacts": ["sample contact"],
    "data-input": "sample data input",
    "data-output": "sample data output",
    "addresses": ["sample address"],
    "url": "example.com",
    "developed-by": ["sample developer"],
    "inventory-number": "sample inventory number",
    "manufacturers": ["sample manufacturer"],
    "model-number": "sample model number",
    "fee-for-service": true,
    "protocol": "sample protocol",
    "restrictions": ["sample restriction"],
    "service-fee-url": "example.com",
    "algorithm": "sample algorithm",
    "operating-system": "sample operating system",
    "licence": "sample licence",
    "purpose": "sample purpose",
    "version": "sample version",
    "sub-type": "sample sub-type",
    "start-date": "01-01-1970",
    "finish-date": "02-01-1970",
    "training-available": true,
    "contact-organisation": "sample contact organisation",
    "contact-email": "example@example.com",
    "contact-phone": "5555555555",
    "capabilities": ["sample capability"],
    "available-for-use": "sample",
    "contact-url": "example.com"
  })
}

router.route('/:category/:id').post(async (req, res) => {
  // Validate category and ID
  if (!validateCategory(category)) {
    res.status(400).send('Invalid category name.')
  }
  if (!validateAssetId(id)) {
    res.status(400).send('Invalid asset ID.')
  }
  id = parseInt(id)

  // Get asset and update
  let asset = getAsset(category, id, req.body)
  if (asset) {
    try {
      // TODO: Here we will use the database component to update the asset in the database.
      res.sendStatus(200)
    } catch (err) {
      res.status(500).send('Server error when updating asset.')
    }
  } else {
    res.status(404).send('Asset does not exist.')
  }
})

export { router as default }
