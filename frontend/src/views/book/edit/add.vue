<template>
    <div>
        <bookvEdit :data="data" @save="save" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import bookvEdit from '@/components/book/vEdit.vue'
import { imageStore } from '@/stores/image.store'
import { bookStore } from '@/stores/book.store'
import { useRouter } from 'vue-router'

const data = ref({
    danhmuc: {}
})
const useImage = imageStore()
const useBook = bookStore()

const router = useRouter()

async function save() {
    try {
        if (useImage.image) {
            const hinh = await useImage.uploadImage()
            data.value.hinh = hinh;
        }
        data.value.danhmuc = data.value.danhmuc.id
        await useBook.create(data.value)
        alert('đã thêm thành công');
        router.push({ name: 'book' })

    } catch (error) {
        console.log(error);
    }
}


</script>

<style></style>