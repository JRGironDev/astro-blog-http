<template>
  <span v-if="isLoading">Loading...</span>

  <button v-else-if="likeCount === 0" @click="likePost">Like this post</button>

  <button v-else @click="likePost">
    Likes {{likeCount}}
  </button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import confetti from 'canvas-confetti';
import { actions } from 'astro:actions';

  interface Props {
    postId: string;
  }

  const props = defineProps<Props>();

  const likeCount = ref(0)
  const likeClicks = ref(0)
  const isLoading = ref(true)

  const likePost = async () => {
    console.log('Like +1');

    const data = await actions.obtenerSaludo.orThrow({
      age: 40,
      name: 'José',
      isActive: true,
    })

    console.log(data);

    likeCount.value++;
    likeClicks.value++;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { 
        x: Math.random(),
        y: Math.random() - 0.2}
    });
  }

  const getCurrentLikes = async () => {
    console.log(`Fecthing likes ${props.postId}`);

    isLoading.value = false;
  }

  getCurrentLikes();
</script>

<style scoped>

button {
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #007acc;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #0062cc;
}
</style>