<template>
  <v-app-bar class="tab-bar" app dark height="50px">
    <v-spacer/>
      <v-btn class="tab-bar-btn" text link to="/contacts" height="150%">
        <div class="icon-top">
          <svg class="svg-icon" viewBox="0 0 25 25" width="20" height="20">
            <path fill="white" :d="icons.contacts" />
          </svg>
          <span class="btn-text">Contacts</span>
        </div>
      </v-btn>
      <v-btn class="tab-bar-btn" text link to="/messages" height="150%">
        <div class="icon-top">
          <svg class="svg-icon" viewBox="0 0 25 25" width="20" height="20">
            <path fill="white" :d="icons.messages" />
          </svg>
          <span class="btn-text">Messages</span>
        </div>
      </v-btn>
      <v-btn class="tab-bar-btn" text link to="/calls" height="150%">
        <div class="icon-top">
          <svg class="svg-icon" viewBox="0 0 25 25" width="20" height="20">
            <path fill="white" :d="icons.calls" />
          </svg>
          <span class="btn-text">Calls</span>
        </div>
      </v-btn>
    <v-spacer/>
  </v-app-bar>
</template>

<script>
import { mdiContactsOutline, mdiMessageText, mdiPhone } from "../mdi";
// @ is an alias to /src

export default {
  name: "App-tab-header",
  components: {},
  data: () => ({
    icons: {
      contacts: mdiContactsOutline,
      messages: mdiMessageText,
      calls: mdiPhone
    }
  })
};
</script>

<style lang="scss" scoped>
.tab-bar {
  overflow: hidden;
}
.icon-top {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn-text {
  font-size: 11px !important;
  margin: 5px;
}
.tab-wrapper {
  height: 100%;
  display: flex;
  padding: 0px;
  flex-direction: row;
}
.v-toolbar__content {
  padding: 0px !important;
}
.v-main__wrap::-webkit-scrollbar {
  width: 0px;
  display: none;
  overflow-y: hidden;
}
</style>
