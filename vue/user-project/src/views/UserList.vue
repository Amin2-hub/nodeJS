<template>
   <div class="container">
      <table class="table">
         <caption>Total : {{ count }} </caption>
         <thead>
            <tr>
               <th>No.</th>
               <th>ID</th>
               <th>이름</th>
               <th>성별</th>
               <th>가입날짜</th>
            </tr>
         </thead>
         <tbody>
            <tr :key="idx" v-for="(user, idx) in userList" @click="goToUserInfo(user.user_id)">
               <td>{{ user.user_no }}</td>
               <td>{{ user.user_id }}</td>
               <td>{{ user.user_name }}</td>
               <td>{{ user.user_gender }}</td>
               <!-- <td>{{ dateFormat(user.join_date) }}</td> -->
               <td>{{ dateFormat(user.join_date, 'yyyy년 MM월 dd일') }}</td>
            </tr>
         </tbody>
      </table>
      <div class="row">
         <router-link to="/userInsert" class="btn btn-secondary">등록</router-link> 
      </div>
   </div>
</template>
<script>
   import axios from 'axios';

   export default{
      data() {
         return {
            userList : [] //가능하면 초기화하면서 타입 알려주기
         }
      },
      computed : {
         count(){
            return this.userList.length;
         }
      },
      created(){
         // 컴포넌트가 초기화할 데이터관련 진행(페이지 구성전 처음부터 데이터를 불러와야할때)
         this.getUserList();
      },
      methods : {
         async getUserList(){
            let result = await axios.get('/api/tusers') 
            //http://localhost:3000/api/tusers 이런식으로 가버림 vue.config.js에서 pathRewrite설정
                                 .catch(err => {
                                    console.log(err);
                                 });
            let list = result.data;
            this.userList = list;
         },
         goToUserInfo(id){
            console.log(id);
            this.$router.push({ path : '/userInfo', query : { userId : id } }); 
            //push : 객체를 기본해서 값이 넘어감 path로 불러와도되고 name으로 불러와도됨
            //name : route로 등록할 때 사용한 name 속성
            //params : path 속성이 '/target/:id' 일때 { 'id' : 100 } 이런식으로 값을 넘겨야됨
         },
         dateFormat(value, format){
            //yyyy년MM월dd일
            // let date = new Date(value);
            // let year = date.getFullYear();
            // let month = date.getMonth()+1;
            // let day = date.getDate();
            // if(month < 10){
            //    month = '0' + month;
            // }
            // if(day < 10){
            //    day = '0' + day;
            // }
            // return year + '-' + month + '-' + day;
            let date = new Date(value);
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth()+1)).slice(-2);
            let day = ('0' + date.getDate()).slice(-2);
            let result = format.replace('yyyy', year).replace('MM', month).replace('dd', day);
            return result;
            // return `${year}년 ${month}월 ${day}일 `
         }
      }
   }
   
</script>

<style>

</style>