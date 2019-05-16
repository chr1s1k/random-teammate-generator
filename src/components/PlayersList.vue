<template>
	<div>
		<ul v-if="players.length" class="list-group mb-2">
			<li v-for="(player, index) in players" :key="index" class="list-group-item">{{ player.name }}</li>
		</ul>
		<p>Celkem hráčů: <strong>{{ players.length }}</strong></p>
	</div>
</template>

<script>
	export default {
		name: 'players-list',
		props: {
			players: Array
		}
	}
</script>