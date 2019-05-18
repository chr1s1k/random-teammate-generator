<template>
	<ul v-if="players.length" class="list-group mb-3">
		<li v-for="(player, index) in players" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
			<span>
				<strong>{{ index + 1 }}.</strong> {{ player.name }}
			</span>
			<button
				type="button"
				class="btn btn-link btn-sm"
				v-on:click.prevent="handleClick(index)">Odebrat
			</button>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'players-list',

		props: {
			players: Array
		},

		methods: {
			handleClick(index) {
				// událost je zpropagována do rodičovské komponenty včetně indexu hráče, který je potřeba odstranit
				this.$emit('remove:player', index)
			}
		}
	}
</script>