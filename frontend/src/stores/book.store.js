import { defineStore } from "pinia";
import bookService from "../services/book.service";
export const bookStore = defineStore("bookStore", {
  id: "book",
  state() {
    return {
      book: {},
      list: [],
    };
  },
  getters: {},
  actions: {
    async create(data) {
      await bookService.create(data);
    },
    async findAll() {
      this.list = await bookService.findAll();
    },
    async findOne(id) {
      this.book = await bookService.findOne(id);
    },
    async update(id, data) {
      await bookService.update(id, data);
    },
    async deleteOne(id) {
      await bookService.deleteOne(id);
    },
  },
});
