<template>
  <transition name="modal">
    <div class="ui dimmer modals page transition visible active">
      <div class="ui longer modal transition visible active">
        <i class="close icon" @click="$emit('close')"></i>
        <div class="header">
          <slot name="header">
            Modal Title
          </slot>
        </div>
        <div class="scrolling content">
          <slot name="content">
            A description can appear on the right
          </slot>
        </div>
        <div class="actions">
          <button
            class="ui green button"
            :class="{disabled: isSaving}"
            :disabled="isSaving"
            @click="$emit('close')"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isSaving: { type: Boolean }
  }
}
</script>
<style scoped>
  .ui.dimmer {
    display: flex !important;
  }
</style>
