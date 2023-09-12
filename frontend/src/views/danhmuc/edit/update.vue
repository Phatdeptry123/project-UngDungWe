<template>
    <div>
        <h1>Thêm Danh Mục</h1>
        <editDanhmuc @save="save" :data="data" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import editDanhmuc from '@/components/danhmuc/vEdit.vue'
import { danhmucStore } from '@/stores/danhmuc.store'
import { useRouter, useRoute } from "vue-router";


const router = useRouter();
const route = useRoute();
const data = ref({
})
const useDanhmuc = danhmucStore()


async function save() {
    const dataS = {
        ten_danhmuc: data.value.ten_danhmuc,
    }
    try {
        if (!dataS.ten_danhmuc) {
            thongbao.value = 'nhap du truong'
            return
        }
        await useDanhmuc.update(route.params.id, dataS)
        alert('sửa thành công')
        router.push('/danhmuc')
    } catch (error) {
        console.log(error);
    }
}

async function getApi() {
    try {
        await useDanhmuc.findOne(route.params.id)
        data.value = useDanhmuc.danhmuc
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getApi()
})


</script>

<style></style>