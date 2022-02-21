<template>
  <Cart></Cart>
</template>
<script>
  // @ is an alias to /src
  import Cart from "@/components/Cart";
  export default {
    name: 'cartView',
    components: {
      Cart,
    },
    data:function () {
      return {
      }
    },
  }
</script>
