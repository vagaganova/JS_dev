<template>
    <div class="card" v-on:click="$emit('add-to-card',product.id)">
        <h2>{{product && product.title || ''}}</h2>
        <p>{{product && product.price || ''}}</p>
    </div>
</template>

<script>
    export default {
        name: "Product",
        props:{
            /**
             * {
             *     id: string | number
             *     title: string
             *     price: number
             * }
             */
            product: Object
        }
    }
</script>

<style scoped lang="scss">
    .card{
        flex-basis: 20%;
    }
</style>
