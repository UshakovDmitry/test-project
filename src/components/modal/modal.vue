<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Teleport to="body">
      <div class="backdrop" @click="emits('close')">
        <div
          class="modal-wrapper"
          :class="{ 'modal-wrapper_center': !position }"
          :style="[
            position && position?.top ? `top: ${position.top}px` : '',
            position && position?.left ? `left: ${position.left}px` : '',
            position && position?.right ? `right: ${position.right}px` : '',
            position && position?.bottom ? `bottom: ${position.bottom}px` : '',
          ]"
        >
          <div
            class="modal-custom"
            :class="cssClass"
            @click="$event.stopPropagation()"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    </Teleport>
  </template>
  
  <script setup >
    import { defineProps, defineEmits } from "vue";  
  const emits = defineEmits(["close"]);
  
  defineProps({
    cssClass: {
      required: false,
      default: "",
    },

  });
  </script>
  
  <style>
  @import "modal.css";
  </style>