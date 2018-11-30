<template>
    <div id="contact" class="mt-24 bg-white">
        <div class="flex flex-wrap items-start justify-center md:p-0 xs:p-4">
            <div class="md:w-1/3 xs:w-full text-main-black">
                <h1 class="text-main-black font-semibold text-2xl">
                    Contact with us
                </h1>
                <div class="mt-8 opacity-50 lg:text-base xs:text-sm md:w-3/4 xs:w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div class="mt-12 font-bold">
                    Head Office
                </div>
                <div class="mt-2 md:text-base xs:text-sm opacity-50">
                    <div>
                        1600 Pennsylvania Avenue NW
                    </div>
                    <div>
                        Washington DC 20500
                    </div>
                    <div>
                        United States of America
                    </div>
                </div>
                <div class="flex mt-12 opacity-50 items-center">
                    <img src="./../assets/phone.svg" alt="" class="h-4 mr-2">
                    <span class="text-base">+1 01 2345 6789</span>
                    
                </div>
                <div class="flex items-center mt-2 opacity-50">
                    <img src="./../assets/mail.svg" alt="" class="h-4 mr-2">
                    <a href="mailto:info@dasos.com" class="no-underline text-base text-main-green">info@dasos.com</a>
                </div>
            </div>
            <div class="md:w-1/3 xs:w-full md:mt-0 xs:mt-6">
                <form action="#" method="post" class="" v-on:submit.prevent>
                    <div class="md:hidden xs:block text-extrabold mt-6 mb-4">
                        Send us a message
                    </div>

                    <div class="mb-6">
                        <span v-if="error.nameEmpty">
                            <input v-model="name" type="text" placeholder="Your name" class="w-full border border-red-light bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none mr-2">
                            <span class="text-main-black font-semibold text-xs opacity-75">
                                You should enter your name before sumbiting your message
                            </span>
                        </span>
                        <span v-else>
                            <input v-model="name" type="text" placeholder="Your name" class="w-full bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none mr-2">
                        </span>
                    </div>

                    <div class="mb-6">
                        <span v-if="error.emailEmpty">
                            <input v-model="email" type="text" placeholder="Your email" class="w-full border border-red-light bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none">
                            <span class="text-main-black font-semibold text-xs opacity-75">
                                You should enter your email before sumbiting your message
                            </span>
                        </span>

                        <span v-else>
                            <span v-if="error.emailWrong">
                                <input v-model="email" type="text" placeholder="Your email" class="w-full border border-red-light bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none">
                                <span class="text-main-black font-semibold text-xs opacity-75">
                                    You should enter a valid email address
                                </span>
                            </span>
                            <span v-else>
                                <input v-model="email" type="text" placeholder="Your email" class="w-full bg-grey-lightest py-4 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none">
                            </span>
                        </span>
                    </div>

                    <div class="mb-6">
                        <span v-if="error.messageBodyEmpty">
                            <textarea v-model="messageBody" placeholder="Your Message" class="w-full border border-red-light bg-grey-lightest py-16 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none"></textarea>
                            <span class="text-main-black font-semibold text-xs opacity-75">
                                You should enter a something before sumbiting your message
                            </span>
                        </span>

                        <span v-else>
                            <textarea v-model="messageBody" placeholder="Your Message" class="w-full bg-grey-lightest py-16 text-main-black font-medium text-base text-center focus:bg-grey-light focus:outline-none"></textarea>
                        </span>
                    </div>
                    

                    
                    <div class="w-full md:text-right xs:text-center">
                        <button @click="checkForm" class="bg-main-green px-4 py-4 rounded font-medium text-center xs:w-full lg:w-auto text-grey-lightest">Send Message</button>
                    </div>
                    
                    <!-- <button class="bg-yellow-dark uppercase px-4 py-4 rounded font-black text-yellow-darker border-b-4 border-yellow-darker mb-4">Create -->
                    <!-- my account</button> -->
                </form>
            </div>
        </div>

        <div class="flex items-center justify-center" v-show="alert">
            <div class="bg-green-lightest border border-green-light text-green-dark px-12 py-3 rounded relative" role="alert">
            <strong class="font-bold">Your message has been sent successfully.</strong>
            <span class="absolute pin-t pin-b pin-r px-4 py-3">
                <svg @click="alert=false" class="fill-current h-6 w-6 text-red-light opacity-75" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
            </div>
        </div>

        <div class="flex items-center justify-center" v-show="error.database">
            <div class="bg-red-lightest border border-red-light text-red-dark px-12 py-3 rounded relative" role="alert">
            <strong class="font-bold">An unexpected error occurred in database.</strong>
            <span class="absolute pin-t pin-b pin-r px-4 py-3">
                <svg @click="alert=false" class="fill-current h-6 w-6 text-red-light opacity-75" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
            </div>
        </div>

    </div>
</template>

<script>
import { db } from "./../firebase.js";

export default {
  data() {
    return {
      error: {
        nameEmpty: false,
        emailEmpty: false,
        emailWrong: false,
        messageBodyEmpty: false,
        database: false
      },
      name: null,
      email: null,
      messageBody: null,
      alert: false
    };
  },
  computed: {
    hasNoErrors() {
      return (
        !this.error.nameEmpty &&
        !this.error.emailEmpty &&
        !this.error.emailWrong &&
        !this.error.messageBodyEmpty
      );
    }
  },
  methods: {
    emailValidation(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },

    checkForm() {
      if (!this.name) {
        this.error.nameEmpty = true;
      } else {
        this.error.nameEmpty = false;
      }

      if (!this.email) {
        this.error.emailEmpty = true;
      } else {
        if (this.emailValidation(this.email)) {
          this.error.emailWrong = false;
        } else {
          this.error.emailWrong = true;
        }
        this.error.emailEmpty = false;
      }

      if (!this.messageBody) {
        this.error.messageBodyEmpty = true;
      } else {
        this.error.messageBodyEmpty = false;
      }

      if (this.hasNoErrors) {
        this.submitMessage();
      }
    },

    submitMessage() {
        if(process.env.VUE_APP_CONTACT_TYPE == "firebase"){
            this.firebase();
        }
        if(process.env.VUE_APP_CONTACT_TYPE == "email"){
            this.customEmail();
        }
    },

    customEmail() {
      window.open(
        `mailto:test@example.com?subject=${this.name}&body=${this.messageBody}`
      );
    },

    resetForm() {
      this.name = null;
      this.email = null;
      this.messageBody = null;
    },

    firebase() {
      db.ref("messages").push(
        {
          name: this.name,
          email: this.email,
          body: this.messageBody
        },
        error => {
          if (error) {
            this.error.database = true;
          } else {
            this.alert = true;
            this.error.database = false;
            this.resetForm();
          }
        }
      );
    }
  },
  mounted() {}
};
</script>

<style scoped>
</style>