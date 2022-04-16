//플러그인을 설치합니다. 
import { createRouter, createWebHistory } from 'vue-router'

//[동기] 방식
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    //[동기] 이 방법은 home 페이지를 접속하지 않더라도, 미리 다운로드 하는 방식입니다. 
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // [LazyLoad 비동기] 이 방법은 about 페이지에 접속했을 때, 다운로드하는 방식입니다. 
    //chunk 파일은 따로 생성되어 페이지를 로드할 때에만 다운됩니다. 
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/DataBindingList2',
    name: 'Data Binding',
    component: () => import(/* webpackChunkName: "Data Binding" */ '../views/DataBindingList2')
  },
  {
    path: '/KakaoLogin',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/KakaoLogin.vue')
  },
  {
    path: '/naverlogin',
    name: 'NaverLogin',
    component: () => import(/* webpackChunkName: "parent" */ '../views/NaverLogin.vue')
  },
  {
    path: '/googlelogin',
    name: 'GoogleLogin',
    component: () => import(/* webpackChunkName: "parent" */ '../views/GoogleLogin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
