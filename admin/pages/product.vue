<script setup>

import useFetchApi from "../hooks/useFetchApi";
import {useRouter, useRuntimeConfig} from "nuxt/app";
import useBaseFetch from "../hooks/useBaseFetch";

const [{data: categories}, {data: owners}] = await Promise.all([
  useFetchApi('/api/categories'),
  useFetchApi('/api/owners')
]);

const router = useRouter()

const product = $ref({
  title: null,
  description: null,
  price: 0,
  photo: null,
  stockQuantity: 1,
  category_id: null,
  owner_id: null,
  photo_name: null
})

function onImageSelect(e) {
  product.photo = e.target.files[0];
  product.photo_name = e.target.files[0].name;
}

async function createProduct() {
  const data = new FormData();

  data.append('title', product.title);
  data.append('description', product.description);
  data.append('price', product.price);
  data.append('photo', product.photo);
  data.append('category_id', product.category_id);
  data.append('owner_id', product.owner_id);

  try {
    await useBaseFetch('/api/products', {
      method: 'POST',
      body: data,
    })
    await router.push({name: 'index'})
  } catch (err) {
    console.log(err)
  }

}


</script>

<template>
  <main class="container">
    <suspense>
      <div class="row my-5">
        <div class="col-md-6 offset-md-3">
          <h3 class="text-center">Add a new product</h3>
          <form @submit.prevent="createProduct">
            <!--        Category -->
            <div class="a-spacing-top-medium">
              <label>Category</label>
              <select class="a-select-option text-start" v-model="product.category_id">
                <option v-for="category in categories.categories" :value="category._id" :key="category._id">
                  {{ category.type }}
                </option>
              </select>
            </div>

            <!--        Owner -->
            <div class="a-spacing-top-medium">
              <label>Owner</label>
              <select class="a-select-option text-start" v-model="product.owner_id">
                <option v-for="owner in owners.owners" :value="owner._id" :key="owner._id">
                  {{ owner.name }}
                </option>
              </select>
            </div>

            <!--        Title -->
            <div class="a-spacing-top-medium">
              <label for="">Title</label>
              <input type="text" class="form-control a-input-text" v-model="product.title">
            </div>

            <!--        Price -->
            <div class="a-spacing-top-medium">
              <label for="">Price</label>
              <input type="number" class="form-control a-input-text" v-model="product.price">
            </div>

            <!--        Stock Quantity -->
            <div class="a-spacing-top-medium">
              <label for="">Stock Quantity</label>
              <input type="number" class="form-control a-input-text" v-model="product.stockQuantity">
            </div>

            <!--        Description -->
            <div class="a-spacing-top-medium">
              <label for="">Description</label>
              <textarea class="form-control a-input-text" rows="10"
                        placeholder="Provide detail such as a product detail"
                        v-model="product.description"
              ></textarea>
            </div>

            <!--        Photo -->
            <div class="a-spacing-medium">
              <label for="choose-file">Add Photo</label>
              <div class="a-row a-spacing-top-medium">
                <label for="choose-file" class="choosefile-button">
                  <i class="fal fa-plus"></i>
                  <input type="file" id="choose-file" @change="onImageSelect">
                  <p style="margin-top: -70px">{{ product.photo_name }}</p>
                </label>
              </div>
            </div>

            <!--        Add product button -->
            <div class="a-spacing-top-large">
              <button type="submit" class="a-button-register">
            <span class="a-button-inner">
              <span class="a-button-text">Add Product</span>
            </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </suspense>
  </main>
</template>