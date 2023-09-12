<template>
    <div class="container">
        <div>
            <header>

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">TPLIBARY</a>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item"><router-link to="/book"
                                        class="nav-link text-dark text-decoration-none">Quản Lý
                                        Sách</router-link>
                                </li>
                                <li class="nav-item"><router-link to="/danhmuc"
                                        class="nav-link text-dark text-decoration-none">Quản Lý
                                        Danh Mục</router-link>
                                </li>
                                <li></li>
                                <li class="nav-item" v-for="i in useDanhmuc.list" :key="i.id">
                                    <a class="nav-link" href="#">{{ i.ten_danhmuc }}</a>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    <router-link v-if="!useAuth.user" to="/login">Đăng nhập</router-link>
                    <div v-else class="d-flex">
                        <div class="">{{ useAuth.user.name }}</div>
                        <router-link @click="logout()" :to="{ name: 'login' }">Đăng xuất</router-link>

                    </div>
                </nav>

            </header>
            <div>
                <router-view />
            </div>
            <footer class="text-center text-lg-start text-white" style="background-color: #929fba">
                <!-- Grid container -->
                <div class="container p-4 pb-0">
                    <!-- Section: Links -->
                    <section class="">
                        <!--Grid row-->
                        <div class="row">
                            <!-- Grid column -->
                            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold">
                                    PT Store
                                </h6>
                                <p>
                                    Chào mừng đến với cửa hàng sách trực tuyến của chúng tôi! Tại đây, bạn có thể tìm thấy
                                    hàng nghìn cuốn
                                    sách từ các thể loại khác nhau, đảm bảo sẽ đáp ứng mọi sở thích đọc sách của bạn. </p>
                            </div>
                            <!-- Grid column -->

                            <hr class="w-100 clearfix d-md-none" />

                            <!-- Grid column -->
                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold">Danh Mục</h6>

                                <li class="nav-item">
                                    <a class="nav-link" href="' . $linkdm . '">' . $ten_danhmuc . '</a>
                                </li>
                            </div>
                            <!-- Grid column -->

                            <hr class="w-100 clearfix d-md-none" />

                            <!-- Grid column -->
                            <hr class="w-100 clearfix d-md-none" />

                            <!-- Grid column -->
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i class="fas fa-home mr-3"></i> 3/2, Xuân Khánh, Ninh Kiều, Cần Thiw</p>
                                <p><i class="fas fa-envelope mr-3"></i> PTSTore@gmail.com</p>
                                <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>
                            <!-- Grid column -->

                            <!-- Grid column -->
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                                <!-- Facebook -->
                                <a class="btn btn-primary btn-floating m-1" style="background-color: #3b5998" href="#!"
                                    role="button"><i class="fab fa-facebook-f"></i></a>

                                <!-- Twitter -->
                                <a class="btn btn-primary btn-floating m-1" style="background-color: #55acee" href="#!"
                                    role="button"><i class="fab fa-twitter"></i></a>

                                <!-- Google -->
                                <a class="btn btn-primary btn-floating m-1" style="background-color: #dd4b39" href="#!"
                                    role="button"><i class="fab fa-google"></i></a>

                                <!-- Instagram -->
                                <a class="btn btn-primary btn-floating m-1" style="background-color: #ac2bac" href="#!"
                                    role="button"><i class="fab fa-instagram"></i></a>

                                <!-- Linkedin -->
                                <a class="btn btn-primary btn-floating m-1" style="background-color: #0082ca" href="#!"
                                    role="button"><i class="fab fa-linkedin-in"></i></a>
                                <!-- Github -->
                                <a class="btn btn-primary btn-floating m-1" style="background-color: #333333" href="#!"
                                    role="button"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                        <!--Grid row-->
                    </section>
                    <!-- Section: Links -->
                </div>
                <!-- Grid container -->

                <!-- Copyright -->
                <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
                    © 2020 Copyright:
                    <a class="text-white" href="https://mdbootstrap.com/">PTstore.com</a>
                </div>
                <!-- Copyright -->
            </footer>
        </div>
    </div>
</template>
<script setup>
import { danhmucStore } from '@/stores/danhmuc.store';
import { authStore } from '@/stores/auth.store';
import { onMounted } from 'vue';
import cardDanhmuc from '@/components/danhmuc/vCard.vue'

const useDanhmuc = danhmucStore()
const useAuth = authStore()
async function getApi() {
    try {

        useAuth.loadAuthState()
        await useDanhmuc.findAll()
    } catch (error) {
        console.log(error);
    }
}
async function logout() {
    try {
        await useAuth.logout()
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getApi()
})

</script>