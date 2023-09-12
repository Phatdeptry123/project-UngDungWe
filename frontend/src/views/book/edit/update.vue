<template>
    <div>
        <bookvEdit :data="data" @save="save" />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import bookvEdit from '@/components/book/vEdit.vue'
import { imageStore } from '@/stores/image.store'
import { bookStore } from '@/stores/book.store'
import { useRouter, useRoute } from 'vue-router'

const data = ref({
    danhmuc: {}
})
const useImage = imageStore()
const useBook = bookStore()

const router = useRouter()
const route = useRoute()

async function save() {
    try {
        if (useImage.image) {
            const hinh = await useImage.uploadImage()
            data.value.hinh = hinh;
        }
        data.value.danhmuc = data.value.danhmuc?.id ?? data.value.danhmuc
        await useBook.update(data.value.id, data.value)

        alert('đã sửa thành công');
        router.push({ name: 'book' })

    } catch (error) {
        console.log(error);
    }
}

async function getApi() {
    try {
        await useBook.findOne(route.params.id)
        if (useBook.book.danhmuc) {
            useBook.book.danhmuc = {
                id: useBook.book.danhmuc?._id,
                ten_danhmuc: useBook.book.danhmuc?.ten_danhmuc
            }
        }
        else {
            useBook.book.danhmuc = {}
        }
        data.value = useBook.book
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getApi()
})

</script>

<style></style>