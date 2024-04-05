// assets.test.js

import express from 'express'
import request from 'supertest'
import { expect } from 'chai'
import { describe, it, before } from 'mocha'
import { getAsset } from './assets'
import { validateAssetId, validateCategory } from './assets'

const app = express()
app.use(express.json())
app.use('/assets', getAsset)

describe('validateAssetId', () => {
    it('should return true for a valid asset ID', () => {
        expect(validateAssetId(1)).to.be.true
    })
    
    it('should return false for an invalid asset ID', () => {
        expect(validateAssetId('a')).to.be.false
    })
})

describe('validateCategory', () => {
    it('should return true for a valid category', () => {
        expect(validateCategory('publications')).to.be.true
    })
    
    it('should return false for an invalid category', () => {
        expect(validateCategory('invalid-category')).to.be.false
    })
})