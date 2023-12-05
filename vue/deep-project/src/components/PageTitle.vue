<template>
   <h2>{{ title }}</h2>
</template>
<script>
   export default{
      //유효성검사를 하지않고 넘어오는데로 데이터를 받겠다는 의미
      props : ['title']    
   }
</script>