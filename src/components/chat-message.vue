<template>
  <v-card max-width="75%" min-width="20%"
          label small class="ma-3 pa-1"
          :color="side == 'income'? '#cae1e5' : '#b7b8db'"
          :class="side == 'income'? 'align-self-start' : 'align-self-end'"
  >
<!--    <div class="overline grey&#45;&#45;text">{{date}}</div>-->
      {{message}}
    <div class="message-date"
      :class="side == 'income' ? 'message-date-right' : 'message-date-left'">{{date}}</div>
  </v-card>
</template>

<script>
export default {
  name: "chat-message",
  props: {
    side : {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.message-date {
  position: absolute;
  top: -20px;
  font-size: 10px;
  color: #7d7d7d;
}
.message-date-right {
  /*left: -70px;*/
  left: 0px;
}
.message-date-left {
  /*right: -70px;*/
  right: 0px;
}

</style>