<template>
  <div class="Tooltip" tabindex="-1">
    <div class="tooltip-content">
      <slot name="tooltip"></slot>
    </div>
    <div
      class="tooltip-ref"
      @click="toggleTooltip"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.Tooltip {
  position: relative
}

.tooltip-content {
  position: absolute;
  bottom: calc(100% + 1rem);
  margin-left: -1rem;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  background: #473322;
  color: white;
  white-space: nowrap;

  visibility: hidden;
  opacity: 0;
  transform: translateY(1rem);
  transition: 0.25s all;
}


.Tooltip:focus .tooltip-content {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}
</style>