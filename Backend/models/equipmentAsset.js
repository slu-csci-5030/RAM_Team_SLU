import * as config from "../config.js"
import got from "got"

export default class equipmentModel {
	create(assetJSON) {
		return got.post(`${config.mongoDBURL}create`, {json: assetJSON}).json()
	}

	find(findParams, limit=10, skip=0) {
		let jsonData = findParams
		if (Object.keys(findParams).length === 0) {
			jsonData = {"*": "*"}
		}
		return got.post(`${config.mongoDBURL}query?limit=${limit}&skip=${skip}`, {"json": jsonData}).json()
	}

	findById(id, limit=10, skip=0) {
		let idURL = `https://devstore.rerum.io/v1/${id}`
		return got.post(`${config.mongoDBURL}query?limit=${limit}&skip=${skip}`, {json: {"@id": idURL}}).json()
	}

	async findByIdAndUpdate(id, newData) {
		let assetURI = await this.findById(id, 1)[0]["@id"]
		let reqOptions = {
			"@id": assetURI,
			...newData
		}
		return got.patch(`${config.mongoDBURL}overwrite`, {json: reqOptions}).json()
	}

	async findByIdAndDelete(id) {
		let assetURI = await this.findById(id, 1)[0]["@id"]
		return got.delete(`${config.mongoDBURL}delete`, {json: {"@id": assetURI}}).json()
	}
}