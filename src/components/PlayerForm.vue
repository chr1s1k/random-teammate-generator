<template>
	<form v-on:submit.prevent="handleSubmit">
		<div class="input-group mb-3">
			<label for="playerName" class="sr-only">Zadej jméno hráče</label>
			<input v-model="player.name" type="text" name="playerName" id="playerName" class="form-control form-control-lg" placeholder="Zadej jméno hráče" autofocus />
			<div class="input-group-append">
				<button class="btn btn-outline-primary" type="submit">Přidat</button>
			</div>
		</div>
	</form>
</template>

<script>
	export default {
		name: 'player-form',

		data() {
			return {
				player: {
					name: ''
				}
			}
		},

		methods: {
			handleSubmit() {
				this.$emit('add:player', this.player)
			}
		}
	}
</script>