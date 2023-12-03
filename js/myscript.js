/************************************************************************************************
JAVASCRIPT
*************************************************************************************************/
//restrizione linguaggio javascript
'use strict';

const { createApp } = Vue

  createApp({
    data() {
      return {
        newTodo : '',
        todos : [
          {
            text: "Portare Blue dal veterinario",
            done: true,
          },
          {
            text: "Aggiornare appunti Javascript",
            done: false,
          },
          {
            text: "Sentire Daria per venerdì sera",
            done: true,
          },
          {
            text: "Chiamare alle 16.30 papà",
            done: false,
          },
          {
            text: "Fare esercizio: Vue to do list",
            done: true,
          },
        ]
      }
    },
    methods : {
      checkStatus(check) {
        if(check === true) return 'text-decoration-line-through';
      },
      addTodo (){
        if (this.newTodo.trim() !== '') {
          this.todos.push({
            text: this.newTodo,
            done: false
          }),
        this.newTodo = ''};
      },
      deleteTodo (index) {
        console.log('cancella todo',index);
        this.todos.splice(index, 1);
      },
      doneModifier (index) {
        (this.todos[index].done) ? (this.todos[index].done = false) : (this.todos[index].done = true);
        //alternativa this.todos[index].done = !this.todos[index].done;
      }
    }
  }).mount('#app')