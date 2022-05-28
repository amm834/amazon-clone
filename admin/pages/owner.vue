<script setup>

import useFetchApi from "../hooks/useFetchApi";
import useBaseFetch from "../hooks/useBaseFetch";

const {data: owners, refresh} = await useFetchApi('/api/owners')

const owner = $ref({
  name: null,
  about: null,
  photo: null,
  photo_name: null,
})
const onSelectImage = (e) => {
  owner.photo = e.target.files[0]
  owner.photo_name = e.target.files[0].name
}

const addNewOwner = async () => {

  const data = new FormData();
  data.append('name', owner.name)
  data.append('about', owner.about)
  data.append('photo', owner.photo, owner.photo_name)

  try {
    await useBaseFetch('/api/owners', {
      method: 'POST',
      body: data,
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
        <div class="col-md-8 col-12 offset-md-2">
          <h3 class="text-center">Add a new owner</h3>
          <form @submit.prevent="addNewOwner">
            <!--        Name -->
            <div class="a-spacing-top-medium">
              <label> Name</label>
              <input type="text" class="form-control mt-2" v-model="owner.name">
            </div>

            <!--        About -->
            <div class="a-spacing-top-medium">
              <label>About</label>
              <input type="text" class="form-control mt-2" v-model="owner.about">
            </div>

            <!--        Photo -->
            <div class="a-spacing-medium">
              <label for="choose-file">Add Photo</label>
              <div class="a-row a-spacing-top-medium">
                <label for="choose-file" class="choosefile-button">
                  <i class="fal fa-plus"></i>
                  <input type="file" id="choose-file" @change="onSelectImage">
                  <p style="margin-top: -70px">{{ owner.photo_name }}</p>
                </label>
              </div>
            </div>


            <!--        Add product button -->
            <div class="a-spacing-top-large">
              <button type="submit" class="a-button-register">
            <span class="a-button-inner">
              <span class="a-button-text">Add Owner</span>
            </span>
              </button>
            </div>
          </form>

          <ul class="list-group mt-3">
            <li class="list-group-item" v-for="owner in owners.owners">{{ owner.name }}</li>
          </ul>
        </div>
      </div>
    </suspense>
  </main>
</template>