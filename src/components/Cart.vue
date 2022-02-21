<template>
    <div class="cart-wrapper">
        <div class="cart_explain">
            <table>
                <thead>
                <tr>
                    <th>Название<br>товара</th>
                    <th>Количество</th>
                    <th>Цена за шт.</th>
                    <th>Итого</th>
                    <th style="width: 2em"></th>
                </tr>
                </thead>
                <tbody>

                    <tr v-for="product in cartAsArray">
                        <td>{{product.title}}</td>
                        <td>{{product.count}}</td>
                        <td>{{product.price}}</td>
                        <td>{{product.sum}}</td>
                        <td style="width: 2em" ><span  v-on:click="removeFromCart(product.id)">x</span></td>
                    </tr>

                </tbody>
                <tfoot>
                <tr>
                    <td colspan="4">
                        Товаров в корзине на сумму: {{summary}}
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Cart",
        props:{
        },
        computed:{
            cartAsArray: function () {
                return Object.keys(this.$store.state.cart).map(key=>({...this.$store.state.cart[key],id:key,sum: this.$store.state.cart[key].price * this.$store.state.cart[key].count}))
            },
            summary: function () {
                return Object.values(this.$store.state.cart).reduce((acc,cur)=>acc+cur.price * cur.count,0)
            }
        },
        methods: {
            removeFromCart(productId){
                this.$store.commit('removeFromCart',{productId: productId})
            }
        },
        data: function () {
            return{
                showCart:false
            }
        }
    }
</script>

<style scoped lang="scss">
    .cart-wrapper{
        .cart_explain{
            background: white;
            color: black;
            & table{
                width: 100%;
            }
            & table tr>td,& table tr>th {
                padding: 0 16px;
            }
            & table tbody tr>td {
                padding-top:5px;
                padding-bottom:5px
            }
            & table tfoot tr>td {
                text-align: right;
                font-weight: bold;
            }
            & table *{
                font-size:12px
            }
        }
    }
</style>
