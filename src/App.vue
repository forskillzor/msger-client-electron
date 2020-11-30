<template>
  <v-app>
    <v-app-bar app color="secondary" dark>
      <div class="tab-wrapper">
        <v-btn text link to="/contacts" height="60px">
          <div class="icon-top">
            <svg class="svg-icon" viewBox="0 0 25 25" width="20" height="20">
              <path fill="white" :d=icons.contacts />
            </svg>
            <p class="btn-text">Contacts</p>
          </div>
        </v-btn>
        <v-btn text link to="/messages" height="60px">
          <div class="icon-top">
            <svg class="svg-icon" viewBox="0 0 25 25" width="20" height="20">
              <path fill="white" :d=icons.messages />
            </svg>
            <p class="btn-text">Messages</p>
          </div>
        </v-btn>
        <v-btn text link to="/calls" height="60px">
          <div class="icon-top">
            <svg class="svg-icon" viewBox="0 0 25 25" width="20" height="20">
              <path fill="white" :d=icons.calls />
            </svg>
            <p class="btn-text">Calls</p>
          </div>
        </v-btn>
      </div>  <!-- /tab-wrapper -->
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import {mdiContacts, mdiMessage, mdiPhone} from './mdi';

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    icons : {
      contacts: mdiContacts,
      messages: mdiMessage,
      calls: mdiPhone

    }
  }),
};
</script>

<style lang="scss" scoped>
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
</style>