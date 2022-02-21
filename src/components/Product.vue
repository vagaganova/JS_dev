<template>
    <article class="features_item" data-id="1">
        <div v-on:click="onAddToCard">
            <img :src="productImage" alt="">
        </div>
        <div class="bord">
            <p><span style="color:black">{{product.title}}</span></p>
            <p>{{product.description}}</p>
            <p><span style="color: #F16D7F">${{product.price}}</span></p>
        </div>
    </article>
    <!--<div class="card" v-on:click="$emit('add-to-card',product.id)">
        <h2>{{product && product.title || ''}}</h2>
        <p>{{product && product.price || ''}}</p>
    </div>-->
</template>

<script>
    export default {
        name: "Product",
        computed: {
            productImage () {
                if (!this.product) {
                    return
                }
                const fileName = this.product.id.toString().toLowerCase()
                return require(`@/assets/${fileName}.png`) ;
            }
        },
        methods:{
            onAddToCard(){
                this.$store.commit('addToCart',{productId: this.product.id})
            }
        },
        props:{
            /**
             * {
             *     id: string | number
             *     title: string
             *     description: string
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
    .features_item{
        width: 360px;
        height: 581px;
        background-color: #F8F8F8;
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        text-align: start;
        color: #5D5D5D;

        & > div:first-child{
            position: relative;
        }
        & > div:first-child:hover:after,{
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            content: 'Add to cart';
            font-size: 14px;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(58, 56, 56, 0.86);
            color: white;

        }
        .bord{
            padding: 25px 16px 20px 28px;
            p:not(:last-child){
                padding-bottom: 14px;
            }
        }
     }
</style>
