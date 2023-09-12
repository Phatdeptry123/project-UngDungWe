<template>
    <div>
        <div class="row">
            <div class="col-4">

            </div>
            <div class="col-4 border border-secondary ">
                <div>
                    <!-- Email input -->
                    <h1 class="text-center my-3">Đăng Nhập</h1>
                    <div class="form-outline mb-4 ">
                        <label class="form-label">Tên đăng nhập</label>

                        <input v-model="data.username" type="text" class="form-control" />
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-4">
                        <label class="form-label">Mật Khẩu</label>

                        <input v-model="data.password" type="password" class="form-control" />
                    </div>

                    <!-- Submit button -->
                    <button @click="login()" class="btn btn-primary btn-block mb-4 w-100">Đăng
                        Nhập</button>

                    <!-- Register buttons -->
                    <div class="text-center">
                        <p>Not a member? <router-link to="/signup">Register</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { authStore } from '@/stores/auth.store';
import { useRouter } from "vue-router";

const useAuth = authStore()
const data = ref({})
const router = useRouter()
async function login() {
    try {
        await useAuth.login(data.value)
        alert('Đăng nhập thành công')
        router.push({ name: 'home' })
    } catch (error) {
        console.log(error);
    }
}

</script>

<style></style>