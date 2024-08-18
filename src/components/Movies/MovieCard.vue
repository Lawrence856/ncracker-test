<script setup>
import { computed, toRefs } from 'vue'
  import Utils from '@/assets/helpers.js'

  const props = defineProps({
    poster: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    year: {
      type: Number,
      default: null
    },
    genres: {
      type: Array,
      default: () => ([])
    },
    directors: {
      type: Array,
      default: () => ([])
    },
    actors: {
      type: Array,
      default: () => ([])
    },
    descr: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: 0
    },
    collapse: {
      type: Object,
      default: null
    },
    isDetail: {
      type: Boolean,
      default: false
    }
  })

  const {
    poster,
    title,
    year,
    genres,
    directors,
    actors,
    descr,
    id,
    collapse,
    isDetail
} = toRefs(props)

  const duration = computed(() => {
    return collapse.value?.duration ? collapse.value.duration[0] : ''
  })

  const addClass = computed(() => {
    return  isDetail.value ? 'movie-card_detail' : 'movie-card_list'
  })
</script>

<template>
  <div class="movie-card" :class="[addClass]">
    <div class="movie-card__poster">
      <img width="112" height="168" :src="poster" :alt="title">
    </div>
    <div class="movie-card__info">
      <h2 class="movie-card__title">
        <span v-if="isDetail">{{ title }}</span>
        <RouterLink v-else :to="'/movies/' + id">{{ title }}</RouterLink>
      </h2>
      <div class="movie-card__properties">
        <div class="movie-card__property">
          <span class="movie-card__property-name">
            {{ Utils.separateStr([year, ...genres], ', ') }}
          </span>
        </div>
        <div class="movie-card__property">
          <span class="movie-card__property-name">
            Режиссёр: {{ Utils.separateStr(directors, ', ') }}
          </span>
        </div>
        <div class="movie-card__property">
          <span class="movie-card__property-name">
            Актёры:
          </span>
          <span class="movie-card__property-value">{{ Utils.separateStr(actors, ', ') }}</span>
        </div>
      </div>
      <p v-if="descr" class="movie-card__descr">
        {{ descr }}
      </p>
      <div v-if="duration" class="movie-card__duration">
        {{ duration }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movie-card {
  position: relative;
  display: flex;
  color: var(--color-white);
  background-color: var(--color-black-light);
  box-shadow: 0 4px 4px 0 rgba(0,0,0,.25);

  @media screen and (max-width: 575px) {
    flex-direction: column;
  }

  &_list {
    transition: all .3s ease-in-out;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 20px 0 rgba(0,0,0,.35);
    }
  }

  &__poster {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 168px;
    background-color: var(--color-grey);

    img {
      max-width: 100%;
      height: auto;
    }
  }

  &__info {
    padding: 32px 32px 32px 24px;

    @media screen and (max-width: 575px) {
      padding: 16px;
    }
  }

  &__title {
    display: inline-block;
    font-size: 36px;
    line-height: 1;
    margin-bottom: 12px;

    @media screen and (max-width: 575px) {
      font-size: 26px;
    }

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__property {
    display: flex;
    align-items: baseline;
    column-gap: 7px;
    margin-top: 8px;
    font-size: 12px;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-top: 10px;
    }

    &-name {
      font-weight: 700;
      line-height: 12px;
      color: var(--color-grey-dark);
      text-transform: uppercase;
    }

    &-value {
      color: var(--color-grey-light);
      line-height: 16px;
    }
  }

  &__descr {
    margin-top: 16px;
  }

  &__duration {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    top: 32px;
    padding: 3px 24px 3px 18px;
    column-gap: 8px;
    font-size: 12px;
    font-weight: 700;
    color: var(--color-black);
    background-color: var(--color-grey);
    clip-path: polygon(3% 0%, 100% 0%, 100% 100%, 0% 100%);

    @media screen and (max-width: 575px) {
      padding: 3px 10px;
      column-gap: 4px;
      top: 16px;
      color: var(--color-grey);
      background-color: var(--color-black-dark);
    }
    
    &::after {
      content: '';
      width: 24px;
      height: 24px;
      background-image: url('data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_163_760)"><path d="M18 3V5H16V3H8V5H6V3H4V21H6V19H8V21H16V19H18V21H20V3H18ZM8 17H6V15H8V17ZM8 13H6V11H8V13ZM8 9H6V7H8V9ZM14 19H10V5H14V19ZM18 17H16V15H18V17ZM18 13H16V11H18V13ZM18 9H16V7H18V9Z" fill="%23FA2828" fill-opacity="0.98"/></g><defs><clipPath id="clip0_163_760"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>');
    }
  }
}
</style>