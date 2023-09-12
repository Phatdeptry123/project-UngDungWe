import { createApiClient } from "./api.service";

class ModelService {
  constructor(baseUrl = "/api/danhmuc") {
    this.api = createApiClient(baseUrl, true, "application/json");
  }
  async findAll() {
    return (await this.api.get(`/`)).data;
  }
  async create(data) {
    return (await this.api.post("/", data)).data;
  }
  //   async deleteAll() {
  //     return (await this.api.delete("/")).data;
  //   }
  async findOne(id) {
    return (await this.api.get(`/${id}`)).data;
  }
  async update(id, data) {
    return (await this.api.put(`/${id}`, data)).data;
  }
  async deleteOne(id) {
    return (await this.api.delete(`/${id}`)).data;
  }
}
export default new ModelService();
