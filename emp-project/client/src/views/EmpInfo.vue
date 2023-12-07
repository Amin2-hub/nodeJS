<template>
   <div class="container">
      <div class="row">
         <table class="table">
            <tr>
               <th>사원번호</th>
               <td>{{ empInfo.emp_no }}</td>
            </tr>
            <tr>
               <th>이름</th>
               <td>{{ empInfo.first_name + ' ' + empInfo.last_name }}</td>
            </tr>
            <tr>
               <th>성별</th>
               <td>{{ empGender }}</td>
            </tr>
            <tr>
               <th>입사일</th>
               <td>{{ $dateFormat(empInfo.hire_date, 'yyyy년 MM월 dd일') }}</td>
            </tr>
            <tr>
               <th>월급</th>
               <td>{{ empInfo.salary }}</td>
            </tr>
            <tr>
               <th>부서번호</th>
               <td>{{ empInfo.dept_no }}</td>
            </tr>
            <tr>
               <th>소속부서</th>
               <td>{{ empInfo.dept_name }}</td>
            </tr>
         </table>
      </div>
      <div class="row">
         <button class="btn btn-info" @click="goToEmpUpdate(empInfo.emp_no)">수정</button>
         <button class="btn btn-danger" @click="deleteInfo(empInfo.emp_no)">퇴사처리</button>
         <router-link to="/emps" class="btn btn-secondary">목록</router-link>
      </div>
   </div>
</template>
<script>
import axios from 'axios';
export default{
   data(){
      return {
         searchNo : '',
         empInfo : {}
      }
   },
   computed : {
      empGender(){
         return this.empInfo.gender == 'M' ? '남' : '여';
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
      async deleteInfo(id){
         let data = {
            param : {
               to_date : '2023-12-07'
            }
         }
         let result = await axios.delete(`/api/emps/${id}`, {data : data}).catch(err => console.log(err));
         let count = result.data.affectedRows;
         if(count == 0){
            alert('정상적으로 삭제되지 않았습니다');
         }else{
            alert('정상적으로 삭제되지 않았습니다');
            this.$router.push({ name : 'emps' });
         }
      },
      goToEmpUpdate(id){
         this.$router.push({ path : '/empForm', query : { eno : id }});
      }
   },
}
</script>