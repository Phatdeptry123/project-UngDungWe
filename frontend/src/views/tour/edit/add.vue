<template>
    <div>
        <tourvEdit :data="data" @save="save" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import tourvEdit from '@/components/tour/vEdit.vue'
import { imageStore } from '@/stores/image.store'
import { tourStore } from '@/stores/tour.store'
import { useRouter } from 'vue-router'

const data = ref({
    area: {}
})
const useImage = imageStore()
const useTour = tourStore()

const router = useRouter()

async function save() {
    try {
        if (useImage.image) {
            const hinh = await useImage.uploadImage()
            data.value.hinh = hinh;
        }
        data.value.area = data.value.area.id
        await useTour.create(data.value)
        alert('đã thêm thành công');
        router.push({ name: 'book' })

    } catch (error) {
        console.log(error);
    }
}


</script>

<style></style>