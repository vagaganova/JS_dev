<template>
    <catalog></catalog>
</template>

<script>
// @ is an alias to /src
import Catalog from "@/components/Catalog";
export default {
  name: 'Home',
  components: {
      Catalog,
  },
  data:function () {
      return {
      }
  },
}
</script>

