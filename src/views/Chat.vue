<template>
    <v-card>
      <v-toolbar class="mt-1">
        <v-btn to="/chats" icon>
          <v-icon>{{ back }}</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-avatar>
          <v-img :src="user.photo? user.photo : avatar"></v-img>
        </v-avatar>
        <v-spacer></v-spacer>
        <v-card-title>{{user.name}}</v-card-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text align="center" class="pa-1">
          <div id="chat-area">

            <chat-message v-for="(mess, i) in messages"
                          :key="i"
                          :date="mess.date"
                          :side="mess.side"
                          :message="mess.message"
            >
            </chat-message>

          </div>
      </v-card-text>
      <v-card-actions>
        <v-row>
          <v-col cols="9">
            <v-textarea class="ma-0 pa-0" row-height="8" rows="2"
                        hide-details
                        outlined
                        v-model="message">

            </v-textarea>
          </v-col>
          <v-col cols="3">
            <v-btn @click="send"  color="info">
              send
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
</template>

<script>
import { mdiArrowLeft } from '../mdi'
import avatar from '../assets/avatar.jpeg'
import Message from '../components/chat-message'

export default {
  name: 'Chat',
  components: {
    ChatMessage: Message,
  },
  data: () => ({
    back: mdiArrowLeft,
    avatar: avatar,
    message: ""
  }),
  methods: {
    send() {
      document.getElementById('chat-area').scrollTop= 999999999;
      const msg = {
        user: 'badik',
        payload: {
          message: this.message,
          side: 'outcome',
          date: new Date().toLocaleTimeString()
        }
      }
      this.message = ""
      this.$store.dispatch('messages/send', msg);
    }
  },
  computed: {
    user() {
      return this.$store.getters['contacts/getContactById'](this.$route.params.id)
    },
    messages() {
      const mess = this.$store.getters['messages/getMessages'](this.$route.params.id)
      return mess.messages;
    }
  }
}
</script>

<style lang="scss" scoped>
  #chat-area {
    display: flex;
    flex-direction: column;
    overflow: scroll;
    margin: 5px;
    padding: 5px 10px;
    height: 290px;
    border: 1px solid #8d8d8d;
    border-radius: 5px;
  }
</style>
