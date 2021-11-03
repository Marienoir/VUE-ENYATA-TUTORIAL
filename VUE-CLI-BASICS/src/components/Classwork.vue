<template>
  <div>
      <input type="text" @keydown="update">
      <div>
          {{x}},{{y}}
      </div>
      <button @dblclick="doubleclick">click</button>
      <UserList :users="users"/>
  </div>
</template>

<script>
import UserList from './UserList.vue'
export default {
    name:"Classwork",
    components: {
        UserList
    },
    data(){
        return{
            x: 0,
            y: 0,
            users:[
                {
                    id:1,
                    name: "Mary",
                    email: "mary@gmail.com"
                },
                 {
                    id:2,
                    name: "Mary",
                    email: "mary@gmail.com"
                },
                 {
                    id:3,
                    name: "Mary",
                    email: "mary@gmail.com"
                },
                 {
                    id:4,
                    name: "Mary",
                    email: "mary@gmail.com"
                }
            ]
        }
    },
    methods:{
        doubleclick(){
            alert("hello")
        },
        update(){
            this.x = 40,
            this.y = 50 
        }
    }
}
</script>

<style>

</style>