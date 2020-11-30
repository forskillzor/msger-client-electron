<template>
	<div class="contacts">
		<v-card class="overflow-hidden">
			<v-card-title>
        <v-autocomplete class="mb-0" outlined label="search friends"></v-autocomplete>
			</v-card-title>
			<v-card-text>
				<v-container class="pa-0 contacts-container" style="height: 365px; overflow: scroll">
					<v-list>
						<v-list-item :to="'/contact/' + user.id" link v-for="(user, index) in users" :key="index">
							<v-list-item-avatar
								><v-img :src="user.photo ? user.photo : avatar"></v-img
							></v-list-item-avatar>
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
		users: [
			{
				name: "Natalia Raikova",
				email: "natalia.raikova@gmail.com",
				position: "Accountant",
				photo: "https://uifaces.co/our-content/donated/3799Ffxy.jpeg",
        status: "online",
        id: 1,
			},
			{
				name: "Dylan Ambrose",
				email: "dylan.ambrose@gmail.com",
				position: "Sales Manager",
				photo: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200",
				status: "online",
        id: 2,
			},
			{
				name: "Reina Brooks",
				email: "reina.brooks@gmail.com",
				position: "Marketing",
				photo: "https://images.unsplash.com/photo-1544507888-56d73eb6046e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
				status: "online",
        id: 3,
			},
			{
				name: "Robin Wright",
				email: "robin.wright@gmail.com",
				position: "Receptionist",
				photo: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0NTc4MzEyOV5BMl5BanBnXkFtZTcwODY0ODkzMQ@@._V1_UY256_CR3,0,172,256_AL_.jpg",
				status: "online",
        id: 4,
			},
			{
				name: "Sergey Bezrykov",
				email: "bezrykov@gmail.com",
				position: "Actor",
				status: "online",
        id: 5,
			},
			{
				name: "Sergey Bezrykov",
				email: "bezrykov@gmail.com",
				position: "Actor",
				status: "online",
        id: 6,
			},
			{
				name: "Sergey Bezrykov",
				email: "bezrykov@gmail.com",
				position: "Actor",
				status: "online",
        id: 7,
			},
			{
				name: "Sergey Bezrykov",
				email: "bezrykov@gmail.com",
				position: "Actor",
				status: "online",
        id: 8,
			},
			{
				name: "Sergey Bezrykov",
				email: "bezrykov@gmail.com",
				position: "Actor",
				status: "online",
        id: 9,
			},
			{
				name: "Sergey Bezrykov",
				email: "bezrykov@gmail.com",
				position: "Actor",
				status: "online",
        id: 10,
			},
		],
	}),
};
</script>

<style lang="scss" scoped>
  .contacts-container {
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    margin-top: -30px;
  }
  .contacts-container::-webkit-scrollbar{
    display: block;
    width: 3px;
    overflow: auto;
  }
</style>
