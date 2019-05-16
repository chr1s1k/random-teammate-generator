<template>
	<div>
		<header-custom />
		<main class="main">
			<div class="container-fluid">
				<div class="row">
					<div class="col-12 col-md-8 col-lg-6 col-xl-4">
						<player-form @add:player="addPlayer" />
						<players-list v-bind:players="players" />
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
	// @ odkazuje ./src adresář
	import HeaderCustom from './components/Header'
	import PlayersList from './components/PlayersList'
	import PlayerForm from './components/PlayerForm'

	export default {
		name: 'app',

		components: {
			HeaderCustom,
			PlayersList,
			PlayerForm
		},

		data() {
			return {
				players: [
					{
						name: 'Hráč 1'
					},
					{
						name: 'Hráč 2'
					},
					{
						name: 'Hráč 3'
					},
				]
			}
		},

		methods: {
			addPlayer(player) {
				this.players = [...this.players, player]
			}
		}
	}
</script>