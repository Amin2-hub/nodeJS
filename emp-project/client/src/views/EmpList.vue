<template>
   <div class="container">
      <h3>Test</h3>
      <table class="table">
         <thead>
            <tr>
               <th>사원번호</th>
               <th>이름</th>
               <th>입사일</th>
               <th>소속부서</th>
            </tr>
         </thead>
         <tbody>
            <tr :key="idx" v-for="(emp, idx) in empList" @click="goToEmpInfo(emp.emp_no)">
               <td>{{ emp.emp_no }}</td>
               <td>{{ emp.first_name + ' ' + emp.last_name }}</td>
               <td>{{ $dateFormat(emp.hire_date, 'yyyy년 MM월 dd일') }}</td>
               <td>{{ emp.dept_name }}</td>
            </tr>
         </tbody>
      </table>
   </div>
</template>
<script>
import axios from 'axios';
export default{
   data() {
      return {
         empList : []
      }
   },
   created(){
      this.getEmpList();
   },
   methods : {
      async getEmpList() {
         let result = await axios.get('/api/emps').catch(err=>console.log(err));
         let list = result.data;
         this.empList = list;
      },
      
      goToEmpInfo(id){
         console.log(id);
         this.$router.push({ path : '/empInfo', query : { no : id }})
      }
   }
}
</script>