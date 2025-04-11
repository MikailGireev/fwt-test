<script setup lang="ts"></script>

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
}

@media screen and (max-width: 1239px) {
  .container {
    max-width: 768px;
  }
}
@media screen and (max-width: 767px) {
  .container {
    max-width: 280px;
  }
}
</style>
