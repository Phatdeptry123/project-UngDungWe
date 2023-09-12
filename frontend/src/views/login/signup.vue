<template>
    <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
                <div class="card text-black" style="border-radius: 25px;">
                    <div class="card-body p-md-5">
                        <div class="row justify-content-center">
                            <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Đăng ký tài khoản</p>

                                <div class="mx-1 mx-md-4">

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <label class="form-label">Họ
                                                Tên</label>
                                            <input v-model="data.name" type="text" class="form-control" />

                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <label class="form-label">Tài Khoản</label>
                                            <input v-model="data.username" type="text" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <label class="form-label">Mật Khẩu</label>
                                            <input v-model="data.password" type="password" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="text-center">
                                        <p>đã có tài khoản? <router-link :to="{ name: 'login' }">Đăng nhập</router-link></p>
                                    </div>

                                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button type="reset" value="Nhập Lại" class="btn btn-warning btn-lg mx-2">Nhập
                                            Lại</button>
                                        <button @click="save()" value="Đăng Ký" class="btn btn-primary btn-lg">Đăng
                                            Ký</button>
                                    </div>

                                </div>
                                <h2>


                                </h2>

                            </div>
                            <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                <img src="https://nguoilambao.vn/upload_images/images/Stack-of-books-great-education%20(FILEminimizer).jpg"
                                    class="img-fluid" alt="Sample image">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { authStore } from '@/stores/auth.store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const data = ref({})
const useAuth = authStore()
const router = useRouter()
async function save() {
    try {
        await useAuth.register(data.value)
        alert('Đăng kí thành công!!')
        router.push({ name: 'login' })
    } catch (error) {
        console.log(error);
    }
}

</script>

<style></style>