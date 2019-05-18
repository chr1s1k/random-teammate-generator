<template>
	<div v-if="teams.length">
		<h2 class="mb-3">Výsledek</h2>
		<div class="row">
			<div v-for="(team, index) in teams" :key="index" class="col-12 col-sm-6 col-md-4 col-xl-3">
				<ul class="list-group mb-3">
					<li class="list-group-item bg-warning py-2">
						<strong>Tým č. {{ (index + 1) }}</strong>
					</li>
					<li v-for="(player, index) in team" :key="index" class="list-group-item">{{ player.name }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'results',

		props: {
			teams: Array
		}
	}
</script>