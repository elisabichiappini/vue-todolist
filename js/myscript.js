/************************************************************************************************
JAVASCRIPT
*************************************************************************************************/
//restrizione linguaggio javascript
'use strict';

const { createApp } = Vue

  createApp({
    data() {
      return {
        completed: 'line-through',
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
      addTodo (){
        this.todos.push(this.newTodo);
        this.newTodo = '';
      },
      deleteTodo (index) {
        console.log('cancella todo',index);
        this.todos.splice(index, 1);
      }
    }
  }).mount('#app')