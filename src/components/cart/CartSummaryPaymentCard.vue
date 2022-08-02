<template>
  <div class="cart-item-card">
    <h3>Cart Total: ${{ cart_total.toFixed(2)}}</h3>
  </div>
</template>

<script>
export default {
  name: 'CartSummaryPaymentCard',
  computed: {
    cart_total(){
      return this.$store.getters.cartTotal;
    }
  }

}
</script>

<style lang="scss">
.cart-item-card{
  width: 90%;
  margin: 5%;
  background-color: white;
  box-shadow: 0 0 5px gray;
  padding: 10px;
  text-align: center;
}

</style>