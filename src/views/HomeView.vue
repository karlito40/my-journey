<script setup>
import { ref } from 'vue';

import Modal from '../components/Modal.vue';
import NewMemberForm from '../components/NewMemberForm.vue';
import BoatScene from '../scenes/BoatScene.vue'
import { crew } from '../fixtures'

const state = ref('idle');
</script>

<template>
  <div class="HomeView">
		<BoatScene :crew="crew" />
		<div class="actions">
			<button 
				class="add-member"
				@click="state = 'new-member-form'"
			>
				+ Embarquer un Mousse
			</button>
		</div>
		<Modal	
			v-if="state === 'new-member-form'"
			@close="state = 'idle'"
		>
			<!-- TODO: we lost the modal animation by doing that, obviously-->
			<NewMemberForm @submitted="state = 'idle'" />
		</Modal>
  </div>
</template>

<style scoped>
.actions {
	position: absolute;
	top: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	padding-top: 1rem;
}

button.add-member {
	border: 0;
	border-bottom: 3px  solid #b2780d;
	padding: 0.3rem 0.7rem;
	color: #765009;
	font-weight: bold;
}
</style>