<template>
  <div class="cart">
    <h1>Your Cart</h1>
    <CartItemCard
        v-for="product in items"
        :key="product.id"
        :product="product"
    />
  </div>
</template>

<script>
import CartItemCard from "@/components/cart/CartItemCard";

export default {
  name: 'CartView',
  components: {
    CartItemCard
  },

  computed: {
    items(){
      console.log(this.$store.getters.cartItems)
      return this.$store.getters.cartItems
    }
  }
}
</script>

