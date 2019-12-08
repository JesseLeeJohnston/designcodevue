<template>
  <div @click="toggleDarkMode" class="toggle" :class="isDarkMode ? 'dark-toggle' : 'light-toggle'">
    <div class="toggle-switch" :class="isDarkMode ? 'toggle-right' : 'toggle-left'">
      <img v-if="!isDarkMode" src="@/assets/sun.svg" alt />
      <img v-if="isDarkMode" src="@/assets/moon.svg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "ThemeSwitch",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    }
  }
};
</script>

<style scoped lang="scss">
.toggle {
  border-radius: 10px;
  width: 175px;
  box-sizing: border-box;
  margin: 50px auto;
  display: flex;
}

.light-toggle {
  background: linear-gradient(346.78deg, #f7fcfc 0%, #fafcfa 100%);
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.1);
}

.dark-toggle {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0px 5px 10px rgba(255, 255, 255, 0.1);
}

.toggle-switch {
  border-radius: 8px;
  margin: 2px;
  padding: 15px 35px;
}

.toggle-left {
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transform: translateX(0);
}

.toggle-right {
  background: #1b233f;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transform: translateX(90%);
}
</style>