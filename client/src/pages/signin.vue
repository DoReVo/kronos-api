<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignInPage",
  data() {
    return {
      appName: "Vite Template",
    };
  },
  methods: {
    async signIn() {
      // Get challenge and state
      /* const res = await fetch(
        `${import.meta.env.VITE_API_URL}/oauth/credential`
      );

      const { state, challenge } = await res.json();

      const options = {
        response_type: "code",
        client_id: import.meta.env.VITE_TWITTER_CLIENT_ID,
        redirect_uri: `${import.meta.env.VITE_APP_HOST}/oauth/twitter/callback`,
        state,
        code_challenge: challenge,
        code_challenge_method: "plain",
        scope: "users.read tweet.read",
      };

      const url = new URL("https://twitter.com/i/oauth2/authorize");
      url.search = new URLSearchParams(options).toString();
      window.location.replace(url.toString()); */
    },
    goHome() {
      this.$router.push("/");
    },
  },
});
</script>

<template>
  <div
    class="container mx-auto flex max-h-full min-h-screen w-full items-center justify-center pt-32"
  >
    <div
      class="flex w-64 flex-col items-center justify-center rounded-md bg-white py-7 px-4 shadow"
    >
      <h1 class="text-center font-serif font-bold tracking-wide">
        Sign in to
        <span
          class="tracking-normal text-fuchsia-500 underline underline-offset-1 transition-colors hover:cursor-pointer hover:text-purple-600"
          @click.prevent.stop="goHome"
        >
          {{ appName }}
        </span>
      </h1>
      <button
        class="text-md group mt-5 flex items-center rounded-lg border-0 bg-blue-400 px-4 py-2 font-sans font-semibold tracking-tighter text-gray-200 shadow transition-all duration-200 hover:translate-y-1 focus-visible:outline-none"
        @click.prevent.stop="signIn"
      >
        <svg
          class="mr-3 inline-block w-6 fill-white"
          viewBox="328 355 335 276"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
        >
          <path
            d="
    M 630, 425
    A 195, 195 0 0 1 331, 600
    A 142, 142 0 0 0 428, 570
    A  70,  70 0 0 1 370, 523
    A  70,  70 0 0 0 401, 521
    A  70,  70 0 0 1 344, 455
    A  70,  70 0 0 0 372, 460
    A  70,  70 0 0 1 354, 370
    A 195, 195 0 0 0 495, 442
    A  67,  67 0 0 1 611, 380
    A 117, 117 0 0 0 654, 363
    A  65,  65 0 0 1 623, 401
    A 117, 117 0 0 0 662, 390
    A  65,  65 0 0 1 630, 425
    Z"
          /></svg
        >Sign In With Twitter
      </button>
      <button
        class="text-md group mt-5 flex items-center rounded-lg border-0 bg-slate-50 px-4 py-2 font-sans font-semibold tracking-tighter text-slate-600 shadow transition-all duration-200 hover:translate-y-1 focus-visible:outline-none"
        @click.prevent.stop="signIn"
      >
        <svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          class="mr-3 inline-block w-6 fill-white group-hover:fill-[#3ba9ee]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
            fill="#4285F4"
          />
          <path
            d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
            fill="#34A853"
          />
          <path
            d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
            fill="#FBBC05"
          />
          <path
            d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
            fill="#EB4335"
          />
        </svg>
        Sign In With Google
      </button>
    </div>
  </div>
</template>
