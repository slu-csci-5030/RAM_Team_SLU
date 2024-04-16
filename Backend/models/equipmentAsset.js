import * as config from "../config.js"
import got from "got"

export default class equipmentModel {
	create(assetJSON) {
		return got.post(`${config.mongoDBURL}create`, {json: assetJSON}).json()
	}

	find(findParams) {
		return got.get(`${config.mongoDBURL}query`, {json: findParams}).json()
	}

	findById(id=null) {
		return got.get(`${config.mongoDBURL}query`, {json: {"@id": id}}).json()
	}

	async findByIdAndUpdate(id, newData) {
		reqOptions = {
			"@id": id,
			...newData
		}
		return got.put(`${config.mongoDBURL}overwrite`, {json: reqOptions}).json()
	}

	findByIdAndDelete(id) {
		return got.delete(`${config.mongoDBURL}delete`, {json: {"@id": id}}).json()
	}
}