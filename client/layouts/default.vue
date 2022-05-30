<script setup>
import Navbar from '../components/Navbar'
import AppFooter from '../components/AppFooter'
</script>

<template>
  <main>
    <navbar></navbar>
    <slot/>
    <app-footer></app-footer>
  </main>
</template>

