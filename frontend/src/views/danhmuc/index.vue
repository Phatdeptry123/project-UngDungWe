<template>
    <div>
        <h1> Danh Sách Danh Mục</h1>
        <router-link to="/danhmuc/edit" class="btn btn-success mx-5"> Thêm Danh Mục Mới</router-link>
        <div>
            <div v-for="i in useDanhmuc.list" :key="i.id">
                <cardDanhmuc :data="i" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { danhmucStore } from '@/stores/danhmuc.store';
import { onMounted } from 'vue';
import cardDanhmuc from '@/components/danhmuc/vCard.vue'

const useDanhmuc = danhmucStore()

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