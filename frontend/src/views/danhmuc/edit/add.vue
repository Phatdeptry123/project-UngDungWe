<template>
    <div>
        <h1>Thêm Danh Mục</h1>
        <editDanhmuc @save="save" :data="data" />
        {{ thongbao }}
    </div>
</template>

<script setup>
import { ref } from 'vue'
import editDanhmuc from '@/components/danhmuc/vEdit.vue'
import { danhmucStore } from '@/stores/danhmuc.store'
import { useRouter, useRoute } from "vue-router";


const router = useRouter();
const route = useRoute();
const data = ref({})
const useDanhmuc = danhmucStore()
const thongbao = ref('')
async function save() {
    const dataS = {
        ten_danhmuc: data.value.ten_danhmuc,
    }
    try {
        if (!dataS.ten_danhmuc) {
            thongbao.value = 'nhap du truong'
            return
        }
        await useDanhmuc.create(dataS)
        thongbao.value = 'da them thanh cong'
        router.push('/danhmuc')
    } catch (error) {
        console.log(error);
    }
}
</script>

<style></style>