<script setup>

import useFetchApi from "../hooks/useFetchApi";

const {data} = await useFetchApi('/api/products');

</script>

<template>
  <main class="container">
    <h1 class="mt-3">All Products</h1>
    <div class="col-md-8 col-8 mt-3 ">
      <NuxtLink to="/product" class="a-button-buy-again mr-2">Add new product</NuxtLink>
      <a href="" class="a-button-history mx-2">Add a new category</a>
      <a href="" class="a-button-history mx-2">Add a new owner</a>
    </div>


    <div class="row browsing-history mt-3">
      <div class="history-box card col-md-4 p-3 mb-3" v-for="product in data.products" :key="product._id">
        <img :src="product.photo" alt="image" class="img-fluid">
        <div class="card-body">
          <h1 class="card-title">{{ product.title }}</h1>
          <!--          Rating -->
          <div class="a-row">
            <a href="" class="fas fa-star"></a>
            <a href="" class="fas fa-star"></a>
            <a href="" class="fas fa-star"></a>
            <a href="" class="fas fa-star"></a>
            <a href="" class="fas fa-star"></a>
            (12,2010)
          </div>
        </div>
        <div>
          <span class="a-color-price mt-2">{{ product.price }}</span>
        </div>
        <!--        Price footer -->
        <div class="mt-3">
          <a href="" class="a-button-history">Update</a>
          <a href="" class="a-button-history ms-2">Delete</a>
        </div>
      </div>
    </div>
  </main>
</template>

