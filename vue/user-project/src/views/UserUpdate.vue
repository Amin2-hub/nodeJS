<template>
   <div class="container">
      <div class="row">
         <table class="table">
            <tr>
               <th class="text-right table-primary">No.</th>
               <td class="text-center">
                  <input type="text" readonly v-model="userInfo.user_no" />
               </td>
            </tr>
            <tr>
               <th class="text-right table-primary">ID</th>
               <td class="text-center">
                  <input type="text" readonly v-model="userInfo.user_id" />
               </td>
            </tr>
            <tr>
               <th class="text-right table-primary">Password</th>
               <td class="text-center">
                  <input type="password" v-model="userInfo.user_pwd" />
               </td>
            </tr>
            <tr>
               <th class="text-right table-primary">이름</th>
               <td class="text-center">
                  <input type="text" v-model="userInfo.user_name" />
               </td>
            </tr>
            <tr>
               <th class="text-right table-primary">성별</th>
               <td class="text-center">
                  <input type="radio" value = "M" v-model="userInfo.user_gender" />남자
                  <input type="radio" value = "F" v-model="userInfo.user_gender" />여자
               </td>
            </tr>
            <tr>
               <th class="text-right table-primary">나이</th>
               <td class="text-center">
                  <input type="number" v-model="userInfo.user_age" />
               </td>
            </tr>
            <tr>
               <th class="text-right table-primary">가입일자</th>
               <td class="text-center">
                  <input type="date" v-model="userInfo.join_date" />
               </td>
            </tr>
         </table>
      </div>
      <div class="row">
         <button class="btn btn-success" @click="updateInfo">수정</button>
         <router-link to="/" class="btn btn-secondary">목록</router-link>
      </div>
   </div>
</template>
<script>
   import axios from 'axios';
   export default{
      data(){
         return{
            searchNo : '',
            userInfo : {}
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
            // this.userInfo.join_date = dateFormat(this.userInfo.join_date);
            let newDate = this.dateFormat(this.userInfo.join_date, 'yyyy-MM-dd');
            this.userInfo.join_date = newDate;
         },
         dateFormat(value, format){
            let date = new Date(value);
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth()+1)).slice(-2);
            let day = ('0' + date.getDate(format)).slice(-2);
            let result = format.replace('yyyy', year).replace('MM', month).replace('dd', day);
            return result;
         },
         async updateInfo(){
            // if(!this.validation()) return;
            //경로, 데이터, 넘길때 필요한 정보
            let data = {
               param : this.userInfo
            };
            // let result = await axios.post(`/api/tusers`, data)
            let result = await axios
               .put(`/api/tusers/${this.userInfo.user_id}`, data)
               .catch(err => console.log(err));
            
               console.log(result.data);
            
               if(result.data.changedRows == 0){
               alert(`수정되지 않았습니다. \n메세지를 확인해주세요. \n${result.data.message}`);
            }else{
               alert(`정상적으로 수정되었습니다.`);
            }
         },
         // validation(){
         //    if(this.userInfo.user_id == ''){
         //       alert('아이디가 입력되지 않았습니다.');
         //       return false;
         //    }
         //    if(this.userInfo.user_pwd == ''){
         //       alert('비밀번호가 입력되지 않았습니다.');
         //       return false;
         //    }
         //    return true;
         // }
      },
   }
      // import axios from 'axios';
   // export default{
   //    data(){
   //       return{
   //          searchNo : '',
   //          userInfo : {
   //             user_id : '',
   //             user_pwd : '',
   //             user_name: null,
   //             user_gender : null,
   //             user_age : 0,
   //             join_date : null
   //          }
   //       }
   //    },
   //    computed : {
   //       userGender(){
   //          return this.userInfo.user_gender == 'M' ? '남' : '여';
   //       },
   //       joinDate(){
   //          let date = new Date(this.userInfo.join_date);
   //          let year = date.getFullYear();
   //          let month = ('0' + (date.getMonth()+1)).slice(-2);
   //          let day = ('0' + date.getDate()).slice(-2);
   //          return `${year}년 ${month}월 ${day}일 `;
   //       }

   //    },
   //    created(){
   //       this.searchNo = this.$route.query.userId; 
   //       this.getUserInfo();
   //       this.userInfo.join_date = this.getToday()
   //    },
   //    methods : {
   //       async getUserInfo(){
   //          let result = await axios.get(`/api/tusers/${this.searchNo}`)
   //                                  .catch(err => console.log(err));
   //          this.userInfo = (result.data)[0];
   //       },
   //       async updateInfo(){
   //          if(!this.validation()) return;

   //          //경로, 데이터, 넘길때 필요한 정보
   //          let data = {
   //             "param" : this.userInfo
   //          };
   //          // let result = await axios.post(`/api/tusers`, data)
   //          let result = await axios.put(`/api/tusers/${this.searchNo}`, {
   //             method : 'post',
   //             headers : {
   //                'Content-Type' : 'application/json'
   //             },
   //             data :  JSON.stringify(data)
   //          })
   //          .catch(err => console.log(err));
   //          console.log(result.data);
   //          if(result.data.updateId == 0){
   //             alert(`수정되지 않았습니다. \n메세지를 확인해주세요. \n${result.data.message}`);
   //          }else{
   //             alert(`정상적으로 수정되었습니다. \nNo.${result.data.updateId}`);
   //             this.$router.push({ name : 'userList'});
   //          }
   //       },
   //       getToday(){
   //          let today = new Date(this.userInfo.join_date);
   //          let year = today.getFullYear();
   //          let month = ('0' + (today.getMonth()+1)).slice(-2);
   //          let day = ('0' + today.getDate()).slice(-2);
   //          return `${year}-${month}-${day}`;
   //       },
   //       validation(){
   //          if(this.userInfo.user_id == ''){
   //             alert('아이디가 입력되지 않았습니다.');
   //             return false;
   //          }
   //          if(this.userInfo.user_pwd == ''){
   //             alert('비밀번호가 입력되지 않았습니다.');
   //             return false;
   //          }

   //          return true;
   //       }
   //    }
   // }
</script>


