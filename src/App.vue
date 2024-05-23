<template>
  <div id="app">
    <div class="chat-window">
      <ChatMessage v-for="(message, index) in messages" :key="index" :message="message" />
    </div>
    <ChatInput @send-message="handleSendMessage" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { io, Socket } from 'socket.io-client'
import ChatMessage from './components/chatfront.vue'
import ChatInput from './components/chatInput.vue'

interface Message {
  username: string
  text: string
}

export default defineComponent({
  name: 'App',
  components: {
    ChatMessage,
    ChatInput
  },
  setup() {
    const socket = ref<Socket | null>(null)
    const messages = ref<Message[]>([])

    const handleSendMessage = (message: string) => {
      const msg: Message = { username: 'User', text: message }
      socket.value?.emit('chat message', msg)
      messages.value.push(msg)
    }

    onMounted(() => {
      socket.value = io('http://localhost:3000')
      socket.value.on('chat message', (msg: Message) => {
        messages.value.push(msg)
      })
    })

    return {
      messages,
      handleSendMessage
    }
  }
})
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-end;
  padding: 20px;
}

.chat-window {
  flex: 1;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
