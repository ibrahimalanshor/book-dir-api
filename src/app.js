const express = require('express')
const routes = require('./routes')

class App {
	constructor(port) {
		this.app = express()
		this.port = port

		this.setConfig()
		this.setRoute()
	}

	setConfig() {
		this.app.use(express.urlencoded({ extended: false }))
		this.app.use(express.json())
	}

	setRoute() {
		for (let [path, route] of Object.entries(routes)) {
			this.app.use(`/api/${path}`, route)
		}
	}

	serve() {
		this.app.listen(this.port, () => console.log(`App mendengarkan di ${this.port}`))
	}
}

module.exports = App