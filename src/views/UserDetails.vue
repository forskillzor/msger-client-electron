<template>
  <v-container fluid>
    <v-card>
      <v-toolbar>
        <v-btn to="/contacts" icon>
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-card-title>{{user.name}}</v-card-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text align="center">
        <v-img class="align-self-center" height="200px" width="200px" :src="user.photo ? user.photo : avatar"></v-img>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn @click="sendMessage(user.id)" color="info">
          <v-icon left>{{send}}
          </v-icon>
          chat
        </v-btn>
        <v-btn color="success">
          <v-icon left>{{call}}
          </v-icon> Call
        </v-btn>
        <v-spacer/>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mdiArrowLeft, mdiAndroidMessages, mdiPhone } from '../mdi'
import avatar from '../assets/avatar.jpeg'

export default {
  name: "UserDetails",
  components: {},
  data: () => ({
    avatar: avatar,
    icon: mdiArrowLeft,
    send: mdiAndroidMessages,
    call: mdiPhone
  }),
  methods: {
    sendMessage(userid) {
      this.$router.push('/chats/' + userid)
    }
  },
  computed: {
    user() {
      return this.$store.getters['contacts/getContactById'](this.$route.params.id)
    },
    photo() {
      const photo = this.computed.user().photo || 'avatar.jpeg'
      return photo;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>