import { defineStore } from "pinia";
import danhmucService from "../services/danhmuc.service";
export const danhmucStore = defineStore("danhmucStore", {
  id: "danhmuc",
  state() {
    return {
      danhmuc: {},
      list: [],
    };
  },
  getters: {},
  actions: {
    async create(data) {
      await danhmucService.create(data);
    },
    async findAll() {
      this.list = await danhmucService.findAll();
    },
    async findOne(id) {
      this.danhmuc = await danhmucService.findOne(id);
    },
    async update(id, data) {
      await danhmucService.update(id, data);
    },
    async deleteOne(id) {
      await danhmucService.deleteOne(id);
    },
  },
});
