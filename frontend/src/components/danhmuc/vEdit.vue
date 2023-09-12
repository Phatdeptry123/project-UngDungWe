<template>
    <div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">ten6 danh muc</label>
            <input v-model="data.ten_danhmuc" type="text" class="form-control" placeholder="nhap ten danh muc">
        </div>
        <button @click="emit('save')" class="btn btn-danger mx-5">Submit</button>
        <button @click="router.back" class="btn btn-primary mx-5">cancel</button>

    </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { defineEmits, defineProps } from "vue";
const props = defineProps({
    data: Object,
})

const emit = defineEmits(['save'])

const router = useRouter();
const route = useRoute();

</script>

<style></style>