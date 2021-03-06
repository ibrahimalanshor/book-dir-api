const autobind = require('auto-bind')

const { BookService } = require('../services')

class BookController {

	constructor() {
		this.bookService = new BookService

		autobind(this)
	}

	async get(req, res) {
		try {
			const books = await this.bookService.read()

			return res.status(200).json(books)
		} catch (err) {
			return res.status(400).json(err)
		}
	}

	async create(req, res) {
		try {
			const books = await this.bookService.create(req.body)

			return res.status(200).json(books)
		} catch (err) {
			return res.status(400).json(err)
		}
	}

	async find(req, res) {
		try {
			const book = await this.bookService.find(+req.params.id)

			return res.status(200).json(book)
		} catch (err) {
			return res.status(400).json(err)
		}
	}

	async update(req, res) {
		try {
			const book = await this.bookService.update(+req.params.id, req.body)

			return res.status(200).json(book)
		} catch (err) {
			return res.status(400).json(err)
		}
	}

	async delete(req, res) {
		try {
			const book = await this.bookService.delete(+req.params.id)

			return res.status(200).json(book)
		} catch (err) {
			return res.status(400).json(err)
		}
	}

}

module.exports = new BookController