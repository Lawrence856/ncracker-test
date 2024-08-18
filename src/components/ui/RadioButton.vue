<script setup>
  import { toRefs } from 'vue'

  const props = defineProps({
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
  })

  const { id, name, label } = toRefs(props)
  const emit = defineEmits(['update:modelValue'])

</script>

<template>
  <div class="radio-button">
    <input
      type="radio"
      :name="name"
      :id="id"
      :value="value"
      @input="emit('update:modelValue', $event.target.value)">
    <label v-if="label" :for="id">{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped>
  .radio-button {
    position: relative;
    color: var(--color-grey);

    & > input {
      opacity: 0;
      position: absolute;
      right: 0;
      top: 0;

      &:checked {
        & ~ label::after {
          opacity: 1;
        }

        & ~ label::before {
          background-color: var(--color-red-light);
          border: var(--color-red-light);
        }
      }
    }

    & > label {
      display: flex;
      align-items: baseline;
      padding-left: 25px;

      &::after, &::before {
        content: '';
        position: absolute;
        left: 0;
        top: calc(50% - 15px / 2);
        width: 15px;
        height: 15px;
      }

      &::before {
        background-color: transparent;
        border: 1px solid var(--color-grey-light);
      }

      &::after {
        background-image: url('data:image/svg+xml,<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.33268 9.16673L0.166016 5.00006L1.34102 3.82506L4.33268 6.8084L10.6577 0.483398L11.8327 1.66673L4.33268 9.16673Z" fill="white"/></svg>');
        background-size: 12px 10px;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0;
      }
    }
  }
</style>