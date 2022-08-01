<template>
  <div class="home">
    <HelloWorld />
    <div class="product-cards-container">
      <ProductSummaryCard
        v-for="product in items"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ProductSummaryCard from '@/components/products/ProductSummaryCard.vue'
import items from "@/data/items";

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ProductSummaryCard
  },
  data() {
    return {
      items: items
    }
  }
}
</script>

<style scoped lang="scss">
  .product-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
