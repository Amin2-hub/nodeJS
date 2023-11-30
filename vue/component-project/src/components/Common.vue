<template>
    <div>

    </div>
</template>
<script>
    //Option API 형식
    export default{
        components :[], //여러개의 컴포넌트를 받기때문에 배열 형태
        data(){
            return {
                //1 testData : ''
                //2 today : new Date()
            }
        },
        computed : {  //읽어들이는것만 가능, 내용 수정 불가
            //2 AfterYear(){
            //     return this.today.setFullYear(this.today.getFullYear() + 1);
            // }
        },
        //1 data와 computed가 내부적으로 들고있는것들을  property(component가 들고있는 값이 있는 변수)라 함
        
        methods : {
            test(){
                //1 console.log(this.$data, this.testData);  // this.$data == this.data.testData
            }
        },
        
        //프로세스 -> 내가 해야할 행동들을 정의
        watch : {},
        
        created() {},
        
        mounted() {} 
    }
</script>
<style>

</style>