<template>
  <div class="chat-input">
    <input
      type="text"
      v-model="newMessage"
      @keyup.enter="sendMessage"
      placeholder="Type a message"
    />
    <button @click="sendMessage">Send</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ChatInput',
  emits: ['send-message'],
  setup(_, { emit }) {
    const newMessage = ref('')

    const sendMessage = () => {
      if (newMessage.value.trim()) {
        emit('send-message', newMessage.value)
        newMessage.value = ''
      }
    }

    return {
      newMessage,
      sendMessage
    }
  }
})
</script>

<style scoped>
.chat-input {
  display: flex;
  margin-top: 10px;
}
.chat-input input {
  flex: 1;
  padding: 5px;
}
.chat-input button {
  margin-left: 5px;
  padding: 5px 10px;
}
</style>
