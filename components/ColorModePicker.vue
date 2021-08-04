<template>
  <div>
    <ul>
      <li
        v-for="color of colors"
        :key="color"
      >
        <component
          :is="`icon-${color}`"
          @click="$colorMode.preference = color"
          :class="getClasses(color)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import IconSystem from '@/assets/images/system.svg?inline'
import IconLight from '@/assets/images/light.svg?inline'
import IconDark from '@/assets/images/dark.svg?inline'

export default {
  data() {
    return {
      colors: ['system', 'light', 'dark']
    }
  },
  components: {
    IconSystem,
    IconLight,
    IconDark
  },
  methods: {
    getClasses (color) {
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    }
  }
}
</script>

<style scoped lang="scss">
ul {
  display: flex;
}

li {
  background-color: #d3d6db;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  transition: all .4s ease;

  &:nth-child(1){
    visibility: hidden;
  }

  &:nth-child(2){
    margin-right: 10px;
  }

  &:hover {
    box-shadow: 0 0 15px var(--box-shadow);
    transform: scale(1.1);
  }
}

svg {
  width: 30px;
  cursor: pointer;
}
</style>
