<script setup>
import { ref, toRefs, watch } from 'vue'
import RadioButton from '@/components/ui/RadioButton.vue'

const props = defineProps({
  isDetail: {
    type: Boolean,
    default: false
  }
})

const { isDetail } = toRefs(props)
const selectedSort = ref('')

const emit = defineEmits(['onSort'])
watch(selectedSort, (newSort) => {
  emit('onSort', newSort)
})

</script>

<template>
  <div class="movies-head">
    <RouterLink v-if="isDetail" class="movies-head__back" to="/movies/">
      Назад к списку
    </RouterLink>
    <template v-else>
      <h1 class="movies-head__title">Фильмы</h1>
      <div class="movies-head__filter">
        <RadioButton
          v-model="selectedSort"
          label="Отсортировать по названию"
          name="movies-sort"
          id="sort-by-name"
          value="sort-by-name"
        />
        <RadioButton
          v-model="selectedSort"
          label="Отсортировать по году"
          name="movies-sort"
          id="sort-by-year"
          value="sort-by-year"
        />
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
  .movies-head {
    border-bottom: 1px solid var(--color-grey);
    padding-bottom: 20px;
    margin-bottom: 32px;

    &__back {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 20px;

      color: var(--color-red);

      &::before {
        content: '';
        width: 24px;
        height: 24px;
        background-image: url('data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_163_791)"><path d="M11.67 3.86961L9.9 2.09961L0 11.9996L9.9 21.8996L11.67 20.1296L3.54 11.9996L11.67 3.86961Z" fill="%23FF5252" fill-opacity="0.98"/></g><defs><clipPath id="clip0_163_791"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>');
        transition: all .3s ease-in-out;
      }

      &:hover::before {
        transform: translateX(-3px);
      }
    }

    &__title {
      font-size: 32px;
      line-height: 1;
      font-weight: 500;
      color: var(--color-white);
      margin-bottom: 16px;
    }

    &__filter {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 32px;
    }
  }
</style>