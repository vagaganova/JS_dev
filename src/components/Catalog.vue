<template>
    <div class="container features_flex">
        <Product
                v-for="product in products"
                v-bind:product="product"
                v-bind:key="product.id"
        ></Product>
    </div>
</template>

<script>
    import Product from "./Product";
    import Cart from "./Cart";
    export default {
        name: "Catalog",
        components: {
            Cart,
            Product
        },
        computed:{
            products(){
                return this.$store.state.products
            }
        },
        methods: {
        },
        data:function () {

            return {
            }
        },
    }
</script>

<style scoped lang="scss">
    .features_flex{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
        padding-top: 3em;
        padding-bottom: 3em;
    }
    .products-wrapper {
        display: flex;
        flex: 1 1 0;
        gap: 10px;
        flex-wrap: wrap;
    }
</style>
