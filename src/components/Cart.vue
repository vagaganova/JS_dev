<template>
    <div class="cart-wrapper">
        <button v-on:click="onShowCart">Корзина</button>
        <div class="cart_explain" v-if="showCart">
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
                        <td style="width: 2em" ><span  v-on:click="$emit('remove-from-card',product.id)">x</span></td>
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
            /**
             * {
             *     id: string | number
             *     title: string
             *     price: number
             * }
             */
            Cart: Object
        },
        computed:{
            cartAsArray: function () {
                return Object.keys(this.Cart).map(key=>({...this.Cart[key],id:key,sum: this.Cart[key].price * this.Cart[key].count}))
            },
            summary: function () {
                return Object.values(this.Cart).reduce((acc,cur)=>acc+cur.price * cur.count,0)
            }
        },
        methods: {
            onShowCart:function ($event) {
                this.showCart = !this.showCart
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
        position: absolute;
        top: 40px;
        right: 10%;
        .cart_explain{
            background: white;
            color: black;
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
