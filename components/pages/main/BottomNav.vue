<template>
  <div
    :class="[
      'navContainer d-flex justify-center align-center',
      { show: tobot },
    ]"
  >
    <v-icon
      v-for="(item, index) in bottomNav"
      :id="item.id ? item.id : ''"
      :key="index"
      @click="active = index"
      :class="{ active: index == active && !item.id}"
     class="mx-2"
    >
      mdi-{{ item.icon }}</v-icon
    >
  </div>
</template>
<script>
export default {
  name: 'BottomNav',
  data() {
    return {
      firstY: 0,
      secondY: 0,
      tobot: false,
      active: null,
      bottomNav: [
        { icon: 'history' },
        { icon: 'heart' },
        { icon: 'cart', id: 'mainBot' },
        { icon: 'cog' },
        { icon: 'alarm' },
      ],
    }
  },
  watch: {
    value: function () {
      this.active = this.value
    },
    active: function () {
      this.$emit('input', this.active)
    },
  },
  props: {
    value: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    this.active = this.value
  },
  methods: {
    onScroll() {
      this.secondY = window.scrollY
      if (this.secondY - this.firstY > 50) {
        this.tobot = true
        this.firstY = window.scrollY
        return
      }
      if (this.firstY - this.secondY > 6) {
        this.tobot = false
        this.firstY = window.scrollY
        return
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.navContainer {
  z-index: 100;
  height: 60px;
  width: calc(100% - 10px);
  border: 1px solid $brdr;
  border-radius: 10px;
  position: fixed;
  bottom: 3px;
  right: 5px;
  background-color: #fff;
  transform: translateY(130%);
  transition: all 0.5s ease;
  &.show {
    transform: translateY(0);
  }
  .active {
    color: $c1 !important;
  }
  #mainBot {
    width: 50px;
    height: 50px;
    position: relative;
    top: -10px;
    background: $c1;
    border-radius: 50px;
    min-width: 50px;
    color: white;
    .v-icon {
      color: $bgBotNav !important;
    }
  }
}
</style>
