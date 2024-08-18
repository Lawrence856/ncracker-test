<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>