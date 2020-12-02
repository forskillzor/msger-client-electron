<template>
  <div class="contacts">
    <v-card class="overflow-hidden">
      <v-card-title>
        <v-autocomplete class="mb-0" outlined label="search friends"></v-autocomplete>
      </v-card-title>
      <v-card-text>
        <v-container class="pa-0 contacts-container" style="height: 365px; overflow: scroll">
          <v-list>
            <v-list-item :to="'/contacts/' + user.id" link v-for="(user, index) in users" :key="index">
              <v-list-item-avatar
              >
                <v-img :src="user.photo ? user.photo : avatar"></v-img
                >
              </v-list-item-avatar>
              <v-list-item-title>{{ user.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.status }}</v-list-item-subtitle>
              <v-list-item-content></v-list-item-content>
            </v-list-item>
          </v-list>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import avatar from "../assets/avatar.jpeg";

export default {
  name: "Contacts",
  components: {},
  data: () => ({
    avatar: avatar,
  }),
  computed: {
    users() { return this.$store.getters['contacts/getContacts'] }
  }
};
</script>

<style lang="scss" scoped>
.contacts-container {
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  margin-top: -30px;
}

.contacts-container::-webkit-scrollbar {
  display: block;
  width: 3px;
  overflow: auto;
}
</style>
