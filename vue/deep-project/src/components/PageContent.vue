<template>
   <table class="table table-hover">
      <tr>
         {{ $dateFormat('2023/12/05', 'yyyy-MM-dd') }}
      </tr>
      <tr>
         <th scope="row">제목</th>
         <td>{{ title }}</td>
         <th scope="row">조회수</th>
         <td>{{ readInfo }}</td>
      </tr>
      <tr>
         <th scope="row">작성자</th>
         <td>{{ writer }}</td>
         <th scope="row">작성일자</th>
         <td>{{ regdate }}</td>
      </tr>
      <tr>
         <th scope="row">내용</th>
         <td>{{ content }}</td>
      </tr>
      <tr>
         <button class="btn btn-outline-info" @click="updateInfo">업데이트</button>
      </tr>
   </table>
</template>
<script>
   // import AppMixin from '../mixin.js'

   export default{
      //각 컴포넌트에서 Mixin사용하는방식, 배열형태라 여러개도 등록가능
      // mixins : [AppMixin],
      // props : ['title', 'count', 'writer' ,'regdate', 'content']
      props : {
         title : String,   //타입만정의
         count : {
            type : Number,
            default : 0
         },
         writer : {
            type : [String, Object],
            default : function(){
               return { first : 'Adward', second : 'Ian' }
            }
         },
         regdate : {
            required : true,    //무조건들어와야됨
            validator : function(value) {
               let format = /[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/
               return !(value.match(format)==null);
            }
         },
         content : String
      },
      computed : {
         readInfo() {
            return this.count + 1;
         }
      },
      methods : {
         updateInfo(){
            //이벤트전달
            this.$emit('update-info', this.readInfo);
         }
      },
      watch : {
         readInfo(){
            //데이터전달
            this.$emit('update-info', this.readInfo);
         }
      }
   }
   
</script>

<style>

</style>