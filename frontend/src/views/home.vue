<template>
    <div class="section-1">
        <h1 class="text-center my-5">Sách mới nhất</h1>
        <div class="row">
            <div class="col-md-4 mb-5" v-for="i in useBook.list" :key="i.id">
                <div class="card h-100">
                    <div class="container-fluid">
                        <div class="d-flex justify-content-center mt-3">
                            <div class="position-relative">
                                <img class="card-img-top" :src="i.hinh" style=" object-fit: cover;" alt="Card image cap">
                                <span
                                    class="position-absolute mt-1 top-0  start-100 translate-middle badge rounded-circle bg-danger">
                                    <div class="fs-5">
                                        30%
                                    </div>
                                </span>
                            </div>
                        </div>

                        <div class="card-body">

                        </div>
                        <h5 class="card-title">{{ i.book_name }}</h5>
                        <div class="fs-3 text-danger">{{ i.price }}</div>
                        <div class="text-warning">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                            (2)
                        </div>
                        <router-link :to="`/book/${i.id}`" class="btn btn-primary my-2">Xem chi tiết</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { bookStore } from '@/stores/book.store';
import { onMounted } from 'vue';



const useBook = bookStore()

async function getApi() {
    try {
        await useBook.findAll()
    } catch (error) {
        console.log(error);
    }
}

async function deleteBook(id) {
    try {
        if (confirm('bạn chắc chắn muốn xóa quyển sách này?')) {
            await useBook.deleteOne(id)
            alert('xóa thành công')
            await getApi()
        }

    } catch (error) {
        console.log(error);
    }
}
onMounted(() => {
    getApi()
})

</script>

<style></style>