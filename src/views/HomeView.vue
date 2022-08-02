<template>
  <div class="home">
    <ProductDescriptionDrawer
      :product="product"
      :active="active.product_drawer"
    />

    <div class="product-cards-container">
      <ProductSummaryCard
        v-for="product in items"
        :key="product.id"
        :product="product"
        v-on:view-product="viewProduct($event)"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductSummaryCard from '@/components/products/ProductSummaryCard.vue'
import items from "@/data/items";
import ProductDescriptionDrawer from "@/components/products/ProductDescriptionDrawer";

export default {
  name: 'HomeView',
  components: {
    ProductSummaryCard,
    ProductDescriptionDrawer
  },
  data() {
    return {
      items: items,
      product: null,
      active: {
        product_drawer: true
      }
    }
  },
  methods: {
    viewProduct($product){
      this.product = $product;
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
