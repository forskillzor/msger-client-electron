<template>
  <v-app>
    <app-tab-header></app-tab-header>
    <v-main>
      <router-view></router-view>
    </v-main>
    <app-status-bar></app-status-bar>
  </v-app>
</template>

<script>

import AppTabHeader from './components/app-tab-header'
import AppStatusBar from './components/app-status-bar'

export default {
  name: 'App',
  components: {
    AppTabHeader,
    AppStatusBar
  },
  data: () => ({
  }),
};
</script>

<style lang="scss">
.tab-bar-btn {
  padding:5px;
}
.icon-top {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn-text {
  margin: 5px;
}
.tab-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
}
.v-main__wrap::-webkit-scrollbar{
  width: 0px;
  display: none;
  overflow-y: hidden;
}
::-webkit-scrollbar{
  width: 0px;
  display: none;
  overflow-y: hidden;
}

</style>