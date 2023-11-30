<template>
    <div>
        <label><input type="text" v-model="msg"></label>
        <p>{{ msg }}</p>
    </div>
</template>
<script>
export default {
    name : 'VueConponent', //컴포넌트이름 - 없어도 동작에 문제없긴함 관리용으로 이름적어두는편
    data(){
        return{
            msg : '2023-11-30'   
            //기본값
        }
    }
}

</script>
<style>
    p { 
        background-color: rgb(229, 184, 247);
    }
</style>