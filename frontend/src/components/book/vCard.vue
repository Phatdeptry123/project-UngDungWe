<template >
    <div>
        <div class="card" style="width: 18rem;">
            <img src="../../assets/3.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ data.book_name }}</h5>
                <p class="card-text">{{ data.mota }}</p>
                <p class="card-text">giá:  {{ data.price }}</p>
                <p class="card-text">*{{ data.rating }}</p>
                <a href="#" class="btn btn-primary">xem thêm</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    data: Object,
})


</script>