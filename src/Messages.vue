<template>
    <div class="font-sans antialiased leading-tight p-0 xs:-mr-5 w-full overflow">
        <div class="container bg-main-black mx-auto text-grey-lightest p-12 text-center font-semibold text-3xl">
            Messages
        </div>
        <div class="flex flex-wrap p-24">

            <div class="text-center w-1/4 p-12 border border-grey-light m-12" v-for="message in messages" :key="message.id">
                <div class="font-bold text-2xl">{{ message.name }}</div>
                <div>
                    <a :href="`mailto:${message.email}`" class="font-bold text-sm no-underline text-main-black opacity-50">{{ message.email }}</a>
                </div>
                <div class="mt-12">{{ message.body }}</div>
            </div>
            
        </div>

    </div>
</template>

<script>
import { messagesRef } from "./firebase.js";
export default {
  data() {
    return {
      messages: null
    };
  },
  firebase: {
    messages: messagesRef
  }
};
</script>

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;
</style>