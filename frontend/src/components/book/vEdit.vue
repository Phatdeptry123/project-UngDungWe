<template>
    <div class="row mr-2 container mx-auto">
        <div class="row frmtile container ">
            <h1>Thêm Sách Mới</h1>
            <div>
                <div class="row col-3">
                    <label>Thuộc danh mục</label> <br>
                    <select v-model="data.danhmuc" id="" class="my-3 col-12">
                        <option :value="{}">Chọn</option>
                        <option :value="i" v-for="i in useDanhmuc.list" :key="i">{{ i.ten_danhmuc }}</option>
                    </select>
                </div>
                <div class="row mb-2">
                    <label>Tên sách</label><br>
                    <input v-model="data.book_name" type="text" class="mr-1 col-3">
                </div>
                <div class="row mb-2">
                    <label>Mô tả sách</label>
                    <input v-model="data.mota" type="text" class="mr-1 col-3">
                </div>
                <div class="row mb-2">
                    <label>Rating</label>
                    <input v-model="data.rating" type="text" class="mr-1 col-3">
                </div>
                <div class="row mb-2">
                    <label>Nhà xuất bản</label>
                    <br>
                    <input v-model="data.nxb" type="text" class="mr-1 col-3">
                </div>
                <div class="row mb-2">
                    <label>Tác Giả</label>
                    <br>
                    <input v-model="data.author" type="text" class="mr-1 col-3">
                </div>
                <div class="row mb-2">
                    <label>Giá</label>
                    <br>
                    <input v-model="data.price" type="text" class="mr-1 col-3">
                </div>

                <div class="row mb-2">
                    <label>Hình ảnh</label>
                    <br>
                    <div class="h-50 w-50">
                        <img class="img-fluid rounded-top " :src="useImage.previewImage || data.hinh" alt="" />
                        <input @change="useImage.previewFiles($event)" type="file" class="mr-1 col-5">

                    </div>
                </div>
                <div class="row mb-2">

                    <div class="row">
                        <div class="d-flex">
                            <button class="btn btn-primary col-3" @click="save()"> lưu</button>
                            <input type="reset" class="btn btn-primary col-3">
                            <a href="" class="col-3"><input type="button" value="Danh Sách"
                                    class="btn btn-primary col-12"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { defineEmits, defineProps, onMounted } from "vue";
import { danhmucStore } from '@/stores/danhmuc.store'
import { imageStore } from '@/stores/image.store'
const props = defineProps({
    data: Object,
})

const emit = defineEmits(['save'])
const useDanhmuc = danhmucStore()
const useImage = imageStore()
const router = useRouter();
const route = useRoute();

function save() {
    emit('save')
}

async function getApi() {
    try {
        await useDanhmuc.findAll()
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getApi()
})
</script>

<style></style>