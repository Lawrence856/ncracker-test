<script setup lang="ts">
import Container from '@/components/Container.vue'
</script>

<template>
  <Container>
    <div class="movies-layout">
      <slot />
    </div>
  </Container>

</template>

<style lang="scss" scoped>
  .movies-layout {
    display: flex;
    flex-direction: column;

    flex-grow: 1;
    margin: 40px 0;
  }
</style>