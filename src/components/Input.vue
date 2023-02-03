<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  required: {
    type: Boolean
  }
})
</script>

<template>
  <label class="block">
    <span class="label-form">{{ label  }}</span>
    <input
      :value="value"
      :placeholder="placeholder"
      :type="type"
      :required="required"
      class="input-form"
    />
  </label>
</template>