import { defineStore } from "pinia";
import { collection, getDocs, onSnapshot, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

interface Task {
  id: number;
  title: string;
  body: string;
}
const notesCollectionRef = collection(db, 'notes');

export const useTaskStore = defineStore("task", {
  state: () => {
    return {
      isCloseOverlay: false,
      tasks: [] as Task[],
    };
  },
  actions: {
    async getNotes() {
      
      onSnapshot(notesCollectionRef, (querySnapshot) => {
        let Tasks: any = [];
        querySnapshot.forEach((doc) => {
          let task: any = {
            id: doc.id,
            title: doc.data().title,
            body: doc.data().body,
          };
          Tasks.push(task);
        });
        this.tasks = Tasks;
      })
    },

     async addNotes(content: any) {
      try {
        await addDoc(notesCollectionRef, content);
      } catch (error) {
        console.log(error)
      }
    },

    async delNotes(id: number) {
      try {
        await deleteDoc(doc(notesCollectionRef, id));
      } catch (error) {
        console.log(error)
      }
    }
  },
});
