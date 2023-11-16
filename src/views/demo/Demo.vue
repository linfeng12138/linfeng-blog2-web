<template>
    <!-- <h1>{{ text }}</h1>
    <h2>{{ number.num }}</h2>
    <div><button @click="add">自增加一</button></div> -->
    <h2>{{ text }}</h2>
</template>

import http from '@/http';
<script lang="ts" setup>
import { getCurrentInstance, onMounted, ref } from 'vue';
const currentInstance = getCurrentInstance();
const globalProperties = currentInstance?.appContext.config.globalProperties;
const $http = globalProperties?.$http;
const text = ref("正在尝试连接到服务器。。。")
onMounted(async () => {
    const res = await $http.post("/t")
    text.value = res.data.message    
})
// const text = ref("hello world")
// const number = reactive({
//     num: 0
// })
// const add = () => {
//     number.num ++
// }
</script>

<style lang="scss" scoped>
h2{
    text-align: center;
}
</style>