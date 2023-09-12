<template>
    <div>
        <tourvEdit :data="data" @save="save" />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import tourvEdit from '@/components/tour/vEdit.vue'
import { imageStore } from '@/stores/image.store'
import { tourStore } from '@/stores/tour.store'
import { useRouter, useRoute } from 'vue-router'

const data = ref({
    area: {}
})
const useImage = imageStore()
const useTour = tourStore()

const router = useRouter()
const route = useRoute()

async function save() {
    try {
        if (useImage.image) {
            const hinh = await useImage.uploadImage()
            data.value.hinh = hinh;
        }
        data.value.area = data.value.area?.id ?? data.value.area
        await useTour.update(data.value.id, data.value)

        alert('đã sửa thành công');
        router.push({ name: 'tour' })

    } catch (error) {
        console.log(error);
    }
}

async function getApi() {
    try {
        await useTour.findOne(route.params.id)
        if (useTour.tour.area) {
            useTour.tour.area = {
                id: useTour.tour.area?._id,
                area_name: useTour.tour.area?.area_name
            }
        }
        else {
            useTour.tour.area = {}
        }
        data.value = useTour.tour
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getApi()
})

</script>

<style></style>