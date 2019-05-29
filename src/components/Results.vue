<template>
	<div v-if="teams.length">
		<h2 class="mb-3">Výsledek</h2>
		<div class="row">
			<div v-for="(team, index) in teams" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
				<ul class="list-group mb-3">
					<li class="list-group-item bg-secondary text-white py-2">
						<form @submit.prevent="handleSubmit" class="d-flex justify-content-between align-items-center">
							<input
								type="text"
								class="form-control form-control-sm w-75"
								ref="teamName"
								v-model.trim="teamData.name"
								v-if="teamData.id === index"
							/>
							<strong v-else>{{ team.name }}</strong>
							<button
								type="submit"
								class="btn btn-link btn-sm pr-0 text-white"
								v-if="teamData.id === index">Uložit
							</button>
							<button
								type="button"
								class="btn btn-link btn-sm pr-0 text-white"
								v-on:click.prevent="handleClick(index)"
								v-else>Upravit název
							</button>
						</form>
					</li>
					<li v-for="(player, index) in team.players" :key="index" class="list-group-item">{{ player.name }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	const getDefaultData = () => ({
		teamData: {
			id: null,
			name: '',
		}
	})

	export default {
		name: 'results',

		props: {
			teams: Array
		},

		data() {
			return getDefaultData()
		},

		computed: {
			isNameInvalid() {
				return this.teamData.name === ''
			}
		},

		methods: {
			handleClick(index) {
				this.teamData.id = index
				this.teamData.name = this.teams[index].name // v inputu zobraz aktuální název týmu

				// je potřeba počkat na překreslení komponenty => pak je teprve dostupná reference na DOM node
				// https://vuejs.org/v2/api/#Vue-nextTick
				this.$nextTick(() => this.$refs.teamName[0].focus()) // pole obsahující požadovaný DOM node
			},

			handleSubmit() {
				if (this.isNameInvalid) {
					return
				}

				// pošli nový název týmu do rodičovské komponenty
				this.$emit('rename:team', this.teamData)

				// vyresetuj "state"
				Object.assign(this.$data, getDefaultData())
			}
		}
	}
</script>