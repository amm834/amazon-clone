<script setup>
import useBaseFetch from "../hooks/useBaseFetch";
import {definePageMeta} from "nuxt/dist/pages/runtime";

const user = $ref({
  name: null,
  email: null,
  password: null
})
const router = useRouter()

definePageMeta({
  layout: 'none'
})


const onSignUp = async () => {
  try {
    const res = await useBaseFetch('/api/auth/sign-up', {
      method: 'POST',
      body: user
    })

    if (res.success) {
      await loginWith('local', {
        email: user.email,
        password: user.password,
      })

      router.push('/')
    }
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <div class="registerPage">
    <div class="container">
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <div class="text-center">
            <nuxt-link to="/">
              <img src="/assets/img/logo-black.png"/>
            </nuxt-link>
          </div>

          <form class="mt-4">
            <div class="a-box a-spacing-extra-large">
              <div class="a-box-inner">
                <h1 class="a-spacing-small">Create Account</h1>
                <!-- Your Name -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer_name" class="a-form-lable">Your Name</label>
                  <input
                      type="text"
                      id="ap_customer_name"
                      class="a-input-text form-control auth-control auth-required-field auth-contact-verification-request-info"
                      v-model="user.name"
                  />
                </div>

                <!-- Your Email -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer_name" class="a-form-lable">Email</label>
                  <input
                      type="email"
                      id="ap_customer_name"
                      class="a-input-text form-control auth-control auth-required-field auth-contact-verification-request-info"
                      v-model="user.email"
                  />
                </div>

                <!-- Your Password -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer_name" class="a-form-lable">Password</label>
                  <input
                      type="password"
                      id="ap_customer_name"
                      class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                      v-model="user.password"
                  />
                  <div class="a-alert-container">
                    <div class="a-alert-content">Password must be at least 6 charaters</div>
                  </div>
                </div>
                <!-- Button -->
                <div class="a-row a-spacing-extra-large mb-4">
                  <span class="a-button-primary" @click="onSignUp">
                    <span class="a-button-inner">
                      <span class="a-button-text">Create your Amazon account</span>
                    </span>
                  </span>
                  <div class="a-row a-spacing-top-medium a-size-small">
                    <b>
                      By creating an account, you agree to Amazon's
                      <a href="#">Conditions of Use</a>and
                      <a href="#">Privacy Notice</a>
                    </b>
                  </div>
                </div>
              </div>
              <hr/>
              <div class="a-row text-center">
                <b>
                  Already have an account?
                  <nuxt-link to="/login" class="a-link-emphasis">Sign In</nuxt-link>
                </b>
              </div>
              <div class="a-row a-spacing-top-medium a-size-small"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
