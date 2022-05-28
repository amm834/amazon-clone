<template>
  <main class="container">
    <div class="row my-5">
      <div class="col-md-6 col-6 offset-md-3">
        <h3 class="text-center">Add a new product</h3>
        <!--        Category -->
        <div class="a-spacing-top-medium">
          <label>Category</label>
          <select class="a-select-option text-start">
            <option value="">1</option>
            <option value="">1</option>
            <option value="">1</option>
          </select>
        </div>

        <!--        Owner -->
        <div class="a-spacing-top-medium">
          <label>Owner</label>
          <select class="a-select-option text-start">
            <option value="">1</option>
            <option value="">1</option>
            <option value="">1</option>
          </select>
        </div>

        <!--        Title -->
        <div class="a-spacing-top-medium">
          <label for="">Title</label>
          <input type="text" class="form-control a-input-text">
        </div>

        <!--        Price -->
        <div class="a-spacing-top-medium">
          <label for="">Price</label>
          <input type="number" class="form-control a-input-text">
        </div>

        <!--        Description -->
        <div class="a-spacing-top-medium">
          <label for="">Description</label>
          <textarea class="form-control a-input-text" rows="10"
          placeholder="Provide detail such as a product detail"
          ></textarea>
        </div>

        <!--        Photo -->
        <div class="a-spacing-medium">
          <label for="choose-file">Add Photo</label>
          <div class="a-row a-spacing-top-medium">
            <label for="choose-file" class="choosefile-button">
              <i class="fal fa-plus"></i>
              <input type="file" id="choose-file">
              <p style="margin-top: -70px">Photo Name</p>
            </label>
          </div>
        </div>

        <!--        Add product button -->
        <div class="a-spacing-top-large">
          <span class="a-button-register">
            <span class="a-button-inner">
              <span class="a-button-text">Add Product</span>
            </span>
          </span>
        </div>


      </div>
    </div>
  </main>
</template>