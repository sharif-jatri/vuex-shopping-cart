<template>
  <div class="hello">
    <h1>This is an home page</h1>
    <div class="product-cards-container">

    </div>
  </div>
</template>

<script>
import items from "@/data/items";

export default {
  name: 'HelloWorld',
  data() {
    return {
      items: items
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .product-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

  }
</style>
