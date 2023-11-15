<template>
    <h1>{{ text }}</h1>
    <h2>{{ number.num }}</h2>
    <div><button @click="add">自增加一</button></div>
</template>

<script lang="ts" setup>
import Vue, { reactive, ref } from 'vue'
const text = ref("hello world")
const number = reactive({
    num: 0
})
const add = () => {
    number.num ++
}
</script>