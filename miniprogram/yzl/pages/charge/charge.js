var config = require('../../config.js');
var util = require('../../utils/util.js');
var orderUtils = require('../../utils/order.js');
var appInstance = getApp()

Page({
	data: {
		list: [],
		currentIdx: 9999
	},
	onLoad () {

	},
	getChargeList () {
		let list = [
			{
				value: 2000,
				gift: 500
			},
			{
				value: 500,
				gift: 80
			},
			{
				value: 1000,
				gift: 230
			},
			{
				value: 300,
				gift: 40
			},
			{
				value: 5000,
				gift: 1400
			},
			{
				value: 10000,
				gift: 3000
			},
		]
	}
})
