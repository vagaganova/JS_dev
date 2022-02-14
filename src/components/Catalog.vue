<template>
    <div class="products-wrapper">
        <Cart v-bind:Cart="cart"
              v-on:remove-from-card="onRemoveFromCart"></Cart>
        <Product
                v-for="product in products"
                v-bind:product="product"
                v-bind:key="product.id"
                v-on:add-to-card="onAddToCard"
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
        methods: {
            onAddToCard: function (productId) {
                if(this.cart.hasOwnProperty(productId)) this.cart[productId].count ++
                else {
                    this.cart[productId] = {count: 1, ...this.infoMap[productId]}
                    delete this.cart[productId].id
                }
                this.cart = {...this.cart}
            },
            onRemoveFromCart: function (productId) {
                delete this.cart[productId]
                this.cart = {...this.cart}
            }
        },
        data:function () {
            let _data = [
                {
                    "id": 1,
                    "title": "Jacket white",
                    "price": 336
                },
                {
                    "id": 2,
                    "title": "Hat red",
                    "price": 116
                },
                {
                    "id": 3,
                    "title": "Socks orange",
                    "price": 970
                },
                {
                    "id": 4,
                    "title": "Jacket white",
                    "price": 386
                },
                {
                    "id": 5,
                    "title": "Shirt black",
                    "price": 262
                },
                {
                    "id": 6,
                    "title": "Jacket white",
                    "price": 482
                },
                {
                    "id": 7,
                    "title": "Shoes black",
                    "price": 237
                },
                {
                    "id": 8,
                    "title": "Hat orange",
                    "price": 570
                },
                {
                    "id": 9,
                    "title": "Hat green",
                    "price": 279
                },
                {
                    "id": 10,
                    "title": "Shirt orange",
                    "price": 441
                },
                {
                    "id": 11,
                    "title": "Hat white",
                    "price": 778
                },
                {
                    "id": 12,
                    "title": "Hat white",
                    "price": 938
                },
                {
                    "id": 13,
                    "title": "Shirt red",
                    "price": 145
                },
                {
                    "id": 14,
                    "title": "Jacket green",
                    "price": 730
                },
                {
                    "id": 15,
                    "title": "Jacket black",
                    "price": 234
                },
                {
                    "id": 16,
                    "title": "Hat black",
                    "price": 667
                },
                {
                    "id": 17,
                    "title": "Hat white",
                    "price": 675
                },
                {
                    "id": 18,
                    "title": "Hat orange",
                    "price": 574
                },
                {
                    "id": 19,
                    "title": "Hat red",
                    "price": 558
                },
                {
                    "id": 20,
                    "title": "Hat orange",
                    "price": 382
                }
            ];
            let _map = {}
            for(let product of _data){
                _map[product.id] = product
            }
            return {
                products: _data,
                infoMap:_map,
                cart: {}
            }
        },
    }
</script>

<style scoped lang="scss">
    .products-wrapper {
        display: flex;
        flex: 1 1 0;
        gap: 10px;
        flex-wrap: wrap;
    }
</style>
