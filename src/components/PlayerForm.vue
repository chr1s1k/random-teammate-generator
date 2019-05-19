<template>
	<form v-on:submit.prevent="handleSubmit">
		<div class="input-group mb-3">
			<label for="playerName" class="sr-only">Zadej jméno hráče</label>
			<input
				type="text"
				name="playerName"
				id="playerName"
				tabindex="1"
				class="form-control"
				ref="playerName"
				v-model.trim="player.name"
				v-bind:class="{ 'is-invalid': hasFormError }"
				placeholder="Zadej jméno hráče"
				@keypress="clearFormStatus"
				autocomplete="off"
				autofocus
			/>
			<div class="input-group-append">
				<button class="btn btn-outline-primary" type="submit" tabindex="2">Přidat</button>
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
				},
				hasFormError: false,
			}
		},

		computed: {
			isNameInvalid() {
				return this.player.name === ''
			}
		},

		methods: {
			handleSubmit() {
				this.clearFormStatus()

				if (this.isNameInvalid) {
					this.hasFormError = true
					return
				}

				// událost je zpropagována do rodičovské komponenty včetně dat
				this.$emit('add:player', this.player)

				// vyresetuj formulářové pole
				this.player = {
					name: ''
				}

				// po odeslání formuláře nastav focus do inputu
				this.$refs.playerName.focus()
			},

			clearFormStatus() {
				this.hasFormError = false
			}
		}
	}
</script>