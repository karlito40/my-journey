<script setup>
import Input from '../components/Input.vue';

const emit = defineEmits('submitted')

function handleForm () {
  console.log('handleForm !')
  emit('submitted', {
    id: 44,
    name: 'Todo',
    role: 'moussaillon',
    mediaUrl: 'https://api.dicebear.com/5.x/adventurer/svg?seed=Todo'
  });
}
</script>

<template>
  <form @submit.prevent="handleForm">
    <Input
      label="Nouveau mousse"
      value=""
      placeholder="Jack Sparrow"
      class="mb-4"
      required
    />

    <label for="roles" class="label-form">Role</label>
    <select id="roles" class="input-form">
      <option value="moussaillon" selected>Moussailon</option>
      <option value="handyman">Bricoleur</option>
      <option value="navigator">Navigateur</option>
      <option value="joker">Joker</option>
    </select>

    <button class="submit-btn mt-6">Embarquement</button>
  </form>
</template>

<style scoped>
.submit-btn {
  display: block;
  padding: 0.4rem 0.2rem;
  width: 100%;
  background: orange;
  color: #765009;
  border: 2px solid #9c6e1b;
  box-shadow: 0 3px 0 #b2780d;
  border-radius: 10px;
  font-weight: bold;
}

.submit-btn:focus {
  user-select: none;
  outline: none !important;
}
</style>