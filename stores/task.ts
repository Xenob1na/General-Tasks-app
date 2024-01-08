import { defineStore } from "pinia";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

interface Task {
  id: number;
  title: string;
  body: string;
}

export const useTaskStore = defineStore("task", {
  state: () => {
    return {
      isCloseOverlay: false,
      tasks: [] as Task[],
    };
  },
  actions: {
    async getNotes() {
      const querySnapshot = await getDocs(collection(db, "notes"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        let task: any = {
          id: doc.id,
          title: doc.data().title,
          body: doc.data().body,
        };
        this.tasks.push(task);
      });
    },
  },
});
