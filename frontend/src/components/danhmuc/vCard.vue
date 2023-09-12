<template>
    <div>
        <div class="mx-5 row mt-2 d-flex  align-items-center border border-primary">
            <div class="col-9 ">
                {{ data.ten_danhmuc }}
            </div>
            <div class="col-3 ">
                <router-link :to="`/danhmuc/edit/${data.id}`" class="btn btn-primary">
                    Sửa
                </router-link>
                <div @click="deleteDanhMuc()" class="btn btn-error">
                    Xóa
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { danhmucStore } from '@/stores/danhmuc.store';
const props = defineProps({
    data: Object,
})

const useDanhmuc = danhmucStore()

async function deleteDanhMuc() {
    try {
        if (confirm('bạn chắc chắn muốn xóa quyển sách này?')) {
            await useDanhmuc.deleteOne(props.data.id)
            alert('xóa thành công')
            await useDanhmuc.findAll()
        }
    } catch (error) {
        console.log(error);
    }
}

</script>

<style></style>