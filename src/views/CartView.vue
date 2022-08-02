<template>
  <div class="cart">
    <h1>Your Cart</h1>
    <div
        v-for="product in items"
        :key="product.id"
    >
      {{product.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartView',
  computed: {
    items(){
      return this.$store.getters.cartItems
    }
  }
}
</script>

