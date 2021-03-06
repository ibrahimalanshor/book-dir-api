const { promises: fs } = require('fs')

const { file } = require('../utils')

class BookService {

  constructor() {
    this.file = file('db/book.json')

    this.setBook()
  }

  findIndex(id) {
    const book = this.books.findIndex(book => book.id === id)

    if (book < 0) {
      throw 'Not Found'
    }

    return book
  }

  async setBook() {
    try {
      const books = await fs.readFile(this.file)

      this.books = JSON.parse(books)
    } catch (err) {
      this.books = []
    }
  }

  async store() {
    try {
      await fs.writeFile(this.file, JSON.stringify(this.books, null, 2))
    } catch (err) {
      console.log(err)
    }
  }

  async create(book) {
    book.id = this.books.length ? this.books[this.books.length - 1].id + 1 : 1
    book = Object.fromEntries(Object.entries(book).sort())

    this.books.push(book)

    await this.store()

    return book
  }

  async find(id) {
    const book = this.findIndex(id)

    return this.books[book]
  }

  async update(id, data) {
    const index = this.findIndex(id)

    this.books[index] = {id, ...data}

    await this.store()

    return this.books[index]
  }

  async delete(id) {
    const index = this.findIndex(id)
    const book = this.books.splice(index, 1)

    await this.store()

    return book
  }

  read() {
    return this.books
  }

}

module.exports = BookService