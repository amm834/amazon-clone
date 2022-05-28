<script setup>

import useFetchApi from "../hooks/useFetchApi";
import useBaseFetch from "../hooks/useBaseFetch";

const {data: categories, refresh} = await useFetchApi('/api/categories')

const category = $ref({
  type: null
})
const addNewCategory = async () => {
  try {
    await useBaseFetch('/api/categories', {
      method: 'POST',
      body: category,
    })
    refresh()
  } catch (e) {
    console.log(e)
  }
}

</script>

<template>
  <main class="container">
    <suspense>
      <div class="row my-5">
        <div class="col-md-6 offset-md-3">
          <h3 class="text-center">Add a new product</h3>
          <form @submit.prevent="addNewCategory">
            <!--        Category -->
            <div class="a-spacing-top-medium">
              <label>Category</label>
              <input type="text" class="form-control mt-2" v-model="category.type">
            </div>

            <!--        Add product button -->
            <div class="a-spacing-top-large">
              <button type="submit" class="a-button-register">
            <span class="a-button-inner">
              <span class="a-button-text">Add Category</span>
            </span>
              </button>
            </div>
          </form>

          <ul class="list-group mt-3">
            <li class="list-group-item" v-for="category in categories.categories">{{ category.type }}</li>
          </ul>
        </div>
      </div>
    </suspense>
  </main>
</template>