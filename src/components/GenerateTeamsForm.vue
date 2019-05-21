<template>
	<form @submit.prevent="handleSubmit">
		<div class="form-group">
			<label for="playersPerTeam" class="mb-1">V každém týmu budou</label>
			<div class="input-group">
				<select
					:value="playersPerTeam"
					@change="handleChange"
					class="custom-select"
					id="playersPerTeam"
					name="playersPerTeam">
					<option value="2">2 hráči</option>
					<option value="3">3 hráči</option>
					<option value="4">4 hráči</option>
					<option value="5">5 hráčů</option>
				</select>
				<div class="input-group-append">
					<button
						class="btn btn-primary"
						type="submit"
						:disabled="players.length < playersPerTeam">Vytvořit týmy
					</button>
				</div>
			</div>
		</div>
	</form>
</template>

<script>
	import helpers from '../helpers/index'

	export default {
		name: 'generate-teams-form',

		props: {
			players: Array,
			playersPerTeam: Number,
		},

		data() {
			return {
				team: [],
			}
		},

		methods: {
			handleChange(event) {
				const number = parseFloat(event.target.value, 10) // hodnota ze selectu
				this.$emit('change:playersPerTeam', number)
			},

			handleSubmit() {
				let allowToContinue = true

				if (this.players.length % this.playersPerTeam !== 0) {
					allowToContinue = confirm('Poslední tým bude mít míň hráčů než ostatní, chceš pokračovat?')
				}

				if (allowToContinue) {
					this.$emit('clear:teams') // před vygenerováním týmů vyresetuj původní pole

					const shuffledPlayers = helpers.shuffleArray(this.players) // "zamíchej" hráče

					for (let i = 0; i < shuffledPlayers.length; i++) {
						this.team.push(shuffledPlayers[i]) // přidej hráče do týmu

						if ((i+1) % this.playersPerTeam === 0 || (i+1) === shuffledPlayers.length) {
							this.$emit('create:team', this.team) // vytvoř tým a pošli ho do rodičovské komponenty
							this.team = []
						}
					}
				}
			}
		}
	}
</script>
