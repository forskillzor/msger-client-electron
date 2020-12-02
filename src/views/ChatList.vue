<template>
  <div class="messages">
    <v-list>
      <div v-for="(chat, index) in chats" :key="index" >
        <v-list-item link :to="'/chats/' + chat.user">
            <v-avatar class="mr-6">
              <v-img :src="user(chat.user).photo?
               user(chat.user).photo : avatar">
              </v-img>
            </v-avatar>
          <v-list-item-subtitle>
            {{ user(chat.user).name }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-chip>
              {{ chat.messages.length }} messages
            </v-chip>
          </v-list-item-subtitle>
        </v-list-item>
        <v-divider/>
      </div>
    </v-list>
  </div>
</template>

<script>
// @ is an alias to /src
import avatar from '../assets/avatar.jpeg'

export default {
  name: 'Messages',
  components: {
  },
  data: () => ({
    avatar: avatar,
  }),
  computed: {
    chats() {
      return this.$store.getters['messages/getChats'];
    },
    user() {
      return userid => this.$store.getters['contacts/getContactById'](userid);
    }
  }
}
</script>