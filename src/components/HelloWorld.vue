<template>
  <div id="list">
    <!-- {{ todolist }} --> 
    {{ getCurrentDate() }}   
    <ul>
      <li v-for="(list, index) in todolist.list" v-bind:key="list.id">
        <div class="text">{{ list.text }}
          <div class="date">{{ list.date }}</div>
        </div>
        <button v-bind:data-index="index" v-on:click="removeList">delete</button>
      </li>
    </ul>
    <div id="input-area">
      <input type="text" id="input-text" v-model="inputText" v-on:keypress.enter="addList">
      <button v-on:click="addList">add</button>
    </div>
  </div>
</template>

<script>
import { db } from './firebaseset';
export default {
  name: 'HelloWorld',
  data() {
    return {
      inputText: '',
      todolist: {
        list: []
      }
    }
  },
  mounted() {
    db.collection("todolist").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.todolist.list = doc.data().list;
      });
    });
  },
  methods: {
    getCurrentDate: function(){
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth()+1
      const day = date.getDate()
      return `${year}년 ${month}월 ${day}일`;
    },
    updatelist:function(){
      db.collection("todolist").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.update(this.todolist);
        });
      });
    },
    addList: function () {
      this.todolist.list.push({text: this.inputText, date: this.getCurrentDate()});
      this.updatelist();
      this.inputText = '';
    },
    removeList: function (e) {
      let indexElem = e.target.getAttribute('data-index');
      this.updatelist(); 
      this.todolist.list.splice(indexElem,1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#list{
  max-width: 500px;
  width: 98vw;
  margin: 0 auto;
  border-radius: 5px;
  li { 
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 21x;
    color: white;
    padding: 5px;
    border-radius: 5px;
    box-sizing: border-box;
    background: #B0A8B9;
    margin-bottom: 10px;
    .text {
      text-align: left;
      .date {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 12px;      
      }
    }
  }
  #input-area {
    display: flex;
    justify-content: space-between;
    input {
      font-family: 'TTWanjudaedunsancheB';
      flex-grow: 1;
      height: 50px;
      padding: 0 0 0 10px;
      border-radius: 5px 0 0 5px;
      border: none;
      outline: none;
      box-sizing: border-box;
    }
    button {
      height: 50px;
      width: 80px;
      background: #845EC2;
      border-radius: 0 5px 5px 0;
    }
  }
  button {
    font-family: 'Sigmar', cursive;
    height: 30px;
    color: white;
    text-transform: uppercase;
    padding: 0 5px;
    border-radius: 5px;
    background: #FF8066;
    background-image: none;
    outline: none;
    border: 0;
  }
}
</style>
