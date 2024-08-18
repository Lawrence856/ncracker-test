<template>
  <header class="header">
    <span class="header__text">#movienow</span>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 36px 0 16px;
  text-align: center;
  background-color: var(--color-red);
  box-shadow: 0 8px 7px 0 rgba(0,0,0,.28);

  @media screen and (max-width: 575px) {
    padding: 16px 0;
  }

  &__text {
    font-size: 48px;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 9px;
    color: var(--color-black);

    @media screen and (max-width: 575px) {
      font-size: 32px;
    }
  }
}
</style>