<template>
	<div class="page">
		<header-custom />
		<main class="main">
			<div class="container-fluid">
				<div class="row">
					<div class="col-12 col-lg-6 col-xl-4">
						<player-form
							@add:player="addPlayer"
						/>
						<players-list
							v-bind:players="players"
							@remove:player="removePlayer"
						/>
						<generate-teams-form
							v-bind:players="players"
							@create:team="createTeam"
							@clear:teams="clearTeams"
						/>
					</div>
					<div class="col-12 col-lg-6 col-xl-8">
						<results
							v-bind:teams="teams"
						/>
					</div>
				</div>
			</div>
		</main>
		<footer-custom />
	</div>
</template>

<script>
	import HeaderCustom from './components/Header'
	import PlayersList from './components/PlayersList'
	import PlayerForm from './components/PlayerForm'
	import GenerateTeamsForm from './components/GenerateTeamsForm'
	import Results from './components/Results'
	import FooterCustom from './components/Footer'

	export default {
		name: 'app',

		components: {
			HeaderCustom,
			PlayersList,
			PlayerForm,
			GenerateTeamsForm,
			Results,
			FooterCustom,
		},

		data() {
			return {
				players: [],
				teams: [],
			}
		},

		methods: {
			addPlayer(player) {
				this.players = [...this.players, player]
			},

			removePlayer(indexToRemove) {
				this.players = this.players.filter((player, index) => {
					return index !== indexToRemove
				})
			},

			createTeam(team) {
				this.teams = [...this.teams, team]
			},

			clearTeams() {
				this.teams = []
			}
		}
	}
</script>