<template>
  <div class="loader">
    <div class="loader__spinner">

    </div>
  </div>
</template>


<style lang="scss" scoped>
.loader {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  &__spinner {
    width: 136px;
    height: 136px;
    border-radius: 50%;
    position: relative;
    animation: rotate 1s linear infinite;

    &::before, &::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      inset: 0px;
      border-radius: 50%;
      border: 4px solid var(--color-black);
      animation: prixClipFix 2s linear infinite ;
    }

    &::after{
      border-color: var(--color-red);
      animation: prixClipFix 2s linear infinite , rotate 0.5s linear infinite reverse;
      inset: 16px;
    }
  }
}
</style>