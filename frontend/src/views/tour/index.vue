<template>
    <div class="row container mx-auto">
        <div class="row">
            <h1>Danh sách Sách</h1>
        </div>
        <form>
            <input type="text">
            <select class="btn btn-primary mr-2 mx-2">
                <option value="0" selected>Tất cả</option>
            </select>
            <input type="submit" value="GO" name="listcheck" class="btn btn-primary mr-2 mx-2">
            <router-link :to="{ name: 'addbook' }" class="btn btn-primary">Thêm Sách Mới</router-link>
        </form>
        <div class="row">

            <table>
                <tr>
                    <th>tên danh mục</th>
                    <th>Tên Sách</th>
                    <th>Tác giả</th>
                    <th>Hình</th>
                    <th>Giá</th>
                    <th>Rating</th>
                    <th></th>
                </tr>
                <tr v-for="i in useBook.list" :key="i.id">
                    <td>{{ i.danhmuc?.ten_danhmuc }}</td>
                    <td>{{ i.book_name }}</td>
                    <td>{{ i.author }}</td>
                    <td><img :src="i.hinh" class="img-fluid rounded-top " style="height: 80px;" alt=""></td>
                    <td>{{ i.price }}</td>
                    <td>{{ i.rating }}</td>
                    <td></td>
                    <td>
                        <router-link class="btn btn-primary" :to="`/book/edit/${i.id}`">sửa</router-link>
                        <div @click="deleteBook(i.id)" class="btn btn-warning">xóa</div>
                    </td>
                </tr>

            </table>
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