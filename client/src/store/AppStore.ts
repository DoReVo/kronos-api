import { defineStore } from "pinia";

interface AppState {
  user: User;
}

interface User {
  email: string;
}

const AppStore = defineStore("App", {
  state: (): AppState => ({
    user: { email: "myemail@email.com" },
  }),
});

export default AppStore;
