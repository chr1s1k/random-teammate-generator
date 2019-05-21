<template>
	<div class="page">
		<header-custom />
		<main class="main">
			<div class="container-fluid">
				<div v-if="!teams.length" class="row">
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
							v-bind:playersPerTeam="playersPerTeam"
							@create:team="createTeam"
							@clear:teams="clearTeams"
							@change:playersPerTeam="changePlayersPerTeam"
						/>
					</div>
				</div>
				<results
					v-bind:teams="teams"
				/>
				<div v-if="teams.length" class="form-group">
					<button
						type="button"
						class="btn btn-link"
						v-on:click.prevent="clearTeams">Upravit seznam hráčů
					</button>
					<button
						type="button"
						class="btn btn-link"
						v-on:click.prevent="resetApp">Začít znova
					</button>
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

	const getDefaultData = () => ({
		players: [],
		teams: [],
		playersPerTeam: 2
	})

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
			return getDefaultData()
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
			},

			resetApp() {
				const allowToReset = confirm('Dojde ke smazání všech hráčů, chceš pokračovat?')

				if (allowToReset) {
					Object.assign(this.$data, getDefaultData())
				}
			},

			changePlayersPerTeam(number) {
				this.playersPerTeam = number
			}
		}
	}
</script>