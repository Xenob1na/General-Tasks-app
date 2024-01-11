import { defineStore } from "pinia";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase";

interface Task {
  id: number;
  title: string;
  body: string;
  time: number;
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
      
      onSnapshot(collection(db, "notes"), (querySnapshot) => {
        let Tasks: any = [];
        querySnapshot.forEach((doc) => {
          let task: any = {
            id: doc.id,
            title: doc.data().title,
            body: doc.data().body,
            time: doc.data().time.toDate().toDateString(),
          };
          Tasks.push(task);
        });
        this.tasks = Tasks;
      })
    },
  },
});
