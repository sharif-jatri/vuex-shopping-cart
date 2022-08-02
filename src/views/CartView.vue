<template>
  <div class="cart">
    <h1>Your Cart</h1>
    <CartItemCard
        v-for="product in items"
        :key="product.id"
        :product="product"
    />
    <CartSummaryPaymentCard />
  </div>
</template>

<script>
import CartItemCard from "@/components/cart/CartItemCard";
import CartSummaryPaymentCard from "@/components/cart/CartSummaryPaymentCard";

export default {
  name: 'CartView',
  components: {
    CartItemCard,
    CartSummaryPaymentCard
  },

  computed: {
    items(){
      return this.$store.getters.cartItems
    }
  }
}
</script>

