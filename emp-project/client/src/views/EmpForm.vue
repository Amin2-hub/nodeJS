<template>
   <div class="container">
      <div class="row">
         <table class="table">
            <tr>
               <th class="text-right table-primary">사원번호</th>
               <td class="text-center">
                  <input type="text" v-model="empInfo.emp_no" />
               </td>
            </tr>
            <tr>
               <th class="text-right table-primary">성</th>
               <td class="text-center">
                  <input type="text" v-model="empInfo.last_name" />
               </td>
            </tr>
            <tr>
               <th class="text-right table-primary">이름</th>
               <td class="text-center">
                  <input type="text" v-model="empInfo.first_name" />
               </td>
            </tr>
            <tr>
               <th class="text-right table-primary">성별</th>
               <td class="text-center">
                  <input type="radio" value = "M" v-model="empInfo.gender" />남자
                  <input type="radio" value = "F" v-model="empInfo.gender" />여자
               </td>
            </tr>
            <tr>
               <th class="text-right table-primary">입사일</th>
               <td class="text-center">
                  <input type="date" v-model="empInfo.hire_date" />
               </td>
            </tr>
            <tr>
               <th class="text-right table-primary">월급</th>
               <td class="text-center">
                  <input type="number" v-model="empInfo.salary" />
               </td>
            </tr>
            <tr>
               <th class="text-right table-primary">from_date</th>
               <td class="text-center">
                  <input type="date" v-model="empInfo.from_date" />
               </td>
            </tr>
            <tr>
               <th class="text-right table-primary">부서번호</th>
               <td class="text-center">
                  <input type="text" v-model="empInfo.dept_no" />
               </td>
            </tr>
            <tr>
               <th class="text-right table-primary">부서명</th>
               <td class="text-center">
                  <input type="text" v-model="empInfo.dept_name" />
               </td>
            </tr>
         </table>
      </div>
      <div class="row">
         <button class="btn btn-info" @click="insertInfo">등록</button>
         <button class="btn btn-success" @click="updateInfo">수정</button>
         <router-link to="/emps" class="btn btn-secondary">목록</router-link>
      </div>
   </div>
</template>

<script>
import axios from 'axios';
export default{
   data(){
      return{
         searchNo : '',
         empInfo : {}
      }
   },
   created() {
      this.searchNo = this.$route.query.no;
      this.getEmpInfo();
   },
   methods : {
      async getEmpInfo(){
         let result = await axios.get(`/api/emps/${this.searchNo}`).catch(err => console.log(err));
         this.empInfo = result.data;
      },
      async insertInfo(){
         
         let data = {
            param : {
               emp_no : '', 
               first_name : '', 
               last_name : '', 
               gender : '', 
               hire_date : '',
               salary : '',
               from_date : '',
               dept_no : '',
               dept_name : ''
            }
         };
         let result = await axios('/api/emps',{
            method : 'post',
            headers : {
               'Content-Type' : 'application/json'
            },
            data : JSON.stringify(data)
         })
         .catch(err => console.log(err));
      }
   }
}
</script>