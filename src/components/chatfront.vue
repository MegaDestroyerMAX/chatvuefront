<template>
  <div class="chat-message">
    <strong>{{ message.username }}:</strong> {{ message.text }}
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

interface Message {
  username: string
  text: string
}

export default defineComponent({
  name: 'ChatMessage',
  props: {
    message: {
      type: Object as PropType<Message>,
      required: true
    }
  }
})
</script>

<style scoped>
.chat-message {
  margin: 5px 0;
}
</style>
