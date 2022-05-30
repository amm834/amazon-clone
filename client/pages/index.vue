<template>
  <main class="listingPage">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4">
          <!-- Sidebar -->
        </div>

        <!-- Main Content -->
        <div class="col-xl-10 col-lg-9 col-md-8 col-sm-8">
          <!-- Begin FeaturedProduct Component -->
          <FetatureProduct/>
          <!-- End FeaturedProduct Component -->

          <!-- Begin Main Results-->
          <div class="mainResults">
            <!-- Begin List Of Results -->
            <ul class="s-result-list">
              <!-- Begin li Result item -->
              <li>
                <!-- Begin item-container -->
                <div class="s-item-container">
                  <!-- Begin Best Seller -->
                  <div class="a-spacing-micro">
                    <div class="bestSeller">
                      <a href>Best Seller</a>
                    </div>
                  </div>
                  <!-- End Best Seller -->

                  <!-- Begin Out Row -->
                  <div>
                    <!-- Begin Row -->
                    <div class="row">
                      <!-- Image -->
                      <div class="col-sm-3 text-center">
                        <a href>
                          <img src="/assets/img/featuredProduct.jpg" style="width:150px" class="img-fluid"
                               alt="image"/>
                        </a>
                      </div>

                      <div class="col-sm-9">
                        <!-- Title And Date -->
                        <div class="a-row a-spacing-small">
                          <nuxt-link to="/" class="a-link-normal">
                            <h2 class="a-size-medium">
                              Product Title
                              <span class="a-letter-space"></span>
                              <span class="a-letter-space"></span>
                              <span class="a-size-small a-color-secondary">Feb, 3 2020</span>
                            </h2>
                          </nuxt-link>
                        </div>

                        <!-- Author's name -->
                        <div class="a-row a-spacing-small">
                          <span class="a-size-small a-color-secondary">by</span>
                          <span class="a-size-small a-color-secondary">
                            <a href="#" class="a-link-normal a-text-normal">Owner Name</a>
                          </span>
                        </div>

                        <!-- Shipment -->
                        <div class="a-row">
                          <span class="a-size-small">Ship to USA</span>
                        </div>

                        <!-- Hardcover -->
                        <div class="row">
                          <div class="col-sm-7">
                            <div class="a-row a-spacing-none">
                              <a href class="a-link-normal a-text-normal">Hardcover</a>
                            </div>

                            <!-- Price -->
                            <div class="a-row a-spacing-none">
                              <a href class="a-link-normal a-text-normal">
                                <span class="a-offscreen">$100</span>
                                <span class="a-color-base sx-zero-spacing">
                                  <span class="sx-price sx-price-large">
                                    <sup class="sx-price-currency">$</sup>
                                    <span class="sx-price-whole">100</span>
                                    <sup class="sx-price-fractional">00</sup>
                                  </span>&nbsp;&nbsp;
                                </span>
                              </a>
                              <span class="a-letter-apace"></span>
                              <template>50">
                                <span
                                    class="a-size-base-plus a-color-secondary a-text-strike"
                                >100</span>
                              </template>
                              <template>
                                <span
                                    class="a-size-base-plus a-color-secondary a-text-strike"
                                >100</span>
                              </template>
                            </div>

                            <!-- Audible Trial -->
                            <div class="a-row a-spacing-none">
                              <span class="a-size-small a-color-secondary">Free with Audible Trial</span>
                            </div>
                            <hr/>

                            <!-- Other Formats -->
                            <span class="a-size-small a-color-secondary">
                              Other Formats:
                              <span class="a-letter-space"></span>
                              <a class="a-size-small a-link-normal a-text-normal">Audio CD</a>
                            </span>
                          </div>

                          <!-- Ratings -->
                          <div class="col-sm-5">
                            <div class="a-row a-spacing-mini">
                              <!-- Star Ratings -->
                              Star rating
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- End Row -->
                  </div>
                  <!-- End Out Row -->
                </div>
                <!-- End item-container -->
              </li>
              <!-- End li Result item -->
            </ul>
            <!-- End List Of Results -->
          </div>
          <!-- End Main Results-->
        </div>
      </div>
    </div>
  </main>
</template>
