<template>
  <div class="page-cart">
    <div class="title price">总价 {{totalPrice}}</div>
    <div class="title choosed">商品总数量 {{TotalAmount}}</div>
    <div class="title total">选中商品总数量 {{chooseTotalAmount}}</div>
    <div class="list">
      <cart-item
        v-for="(product, index) in cartProducts"
        :key="index"
        :product="product"
        @amount-change="handleAmountChange(product, arguments)"

      />
    </div>
    <add-product @add="handleAddProduct" />
  </div>
</template>

<script>

  import { mapState, mapGetters, mapActions } from 'vuex'
  import cartItem from './components/cartItem'
  import addProduct from './components/addProduct'

  const generateProduct = code => ({
    code,
    amount: 1,
    price: 100,
    boolean: true
  })
  export default {
    name: 'cart',
    components: {
      cartItem,
      addProduct,
    },
    computed: {
      ...mapState({
        cartProducts: state => state.cart.cartProducts,
      }),
      ...mapGetters({
        totalPrice: 'cartTotalPrice',
        chooseTotalAmount:'cartChoosedAmount',
        TotalAmount:'cartTotalAmount'
      }),
    },
    methods: {
      ...mapActions([
        'cartAddProduct',
        'cartChangeCount',
      ]),

      handleAmountChange(product, agrs) {
        const amount = agrs[0]
        this.cartChangeCount({
          code: product.code,
          amount,
        })
      },
      handleAddProduct: function(code) {
        this.cartAddProduct(generateProduct(code))
      },
    },
  }
</script>

<style src="./cart.css"></style>
