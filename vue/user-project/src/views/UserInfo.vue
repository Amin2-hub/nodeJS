<template>
   <div class="container">
   <div class="row">
      <table class="table">
         <tr>
            <th class="text-right table-primary">No.</th>
            <td class="text-center">{{ userInfo.user_no }}</td>
         </tr>
         <tr>
            <th class="text-right table-primary">ID</th>
            <td class="text-center">{{ userInfo.user_id }}</td>
         </tr>
         <tr>
            <th class="text-right table-primary">Password</th>
            <td class="text-center">{{ userInfo.user_pwd }}</td>
         </tr>
         <tr>
            <th class="text-right table-primary">이름</th>
            <td class="text-center">{{ userInfo.user_name }}</td>
         </tr>
         <tr>
            <th class="text-right table-primary">성별</th>
            <td class="text-center">{{ userGender }}</td>
         </tr>
         <tr>
            <th class="text-right table-primary">나이</th>
            <td class="text-center">{{ userInfo.user_age }}</td>
         </tr>
         <tr>
            <th class="text-right table-primary">가입일자</th>
            <td class="text-center">{{ joinDate }}</td>
         </tr>
      </table>
   </div>
   <div class="row">
      <button class="btn btn-info" @click="goToUserUpdate(userInfo.user_id)">수정</button>
      <router-link to="/" class="btn btn-secondary">목록</router-link> 
      <!-- router-link는 기본이 a태그 다른거 쓰고싶으면 tag쓰면됨 -->
      <!-- to : path -->
      <button class="btn btn-danger" @click="deleteInfo(empInfo.emp_no)">퇴사처리</button>
   </div>
   </div>
</template>
<script>
   import axios from 'axios';
   export default{
      data(){
         return {
            searchNo : '',
            userInfo : {}
         }
      },
      computed : {
         userGender(){
            return this.userInfo.user_gender == 'M' ? '남' : '여';
         },
         joinDate(){
            let date = new Date(this.userInfo.join_date);
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth()+1)).slice(-2);
            let day = ('0' + date.getDate()).slice(-2);
            return `${year}년 ${month}월 ${day}일 `;
         }
      },
      created(){
         this.searchNo = this.$route.query.userId; 
         //router아님 route!
         this.getUserInfo();
      },
      methods : {
         async getUserInfo(){
            let result = await axios.get(`/api/tusers/${this.searchNo}`)
                                    .catch(err => console.log(err));
            this.userInfo = (result.data)[0];
            // console.log(result.data);
         },
         async deleteInfo(userId){
            let result = await axios.delete(`/api/tusers/${userId}`)
                                    .catch(err => console.log(err));
            console.log(result.data);
            let count = result.data.affectedRows;
            if(count == 0){
               alert('정상적으로 삭제되지 않았습니다.');
            }else{
               alert('정상적으로 삭제되었습니다.');
               this.$router.push({ name : 'userList'});
            }
         },
         goToUserUpdate(id){
            console.log(id);
            this.$router.push({ path : '/userUpdate', query : { userId : id } }); 
         }

      }
   }
</script>

