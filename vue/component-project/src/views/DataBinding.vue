<template>  <!--DOM에는 출력되지않음 -->
    <div>
        <!--{{}}를 쓰게되면 텍스트영역이 자바스크립트 공간이됨 -->
        <h1>{{ title + '!!!' }}</h1>   
        <h2 v-bind:name="'sample'" v-text="title" />
        <p v-html="tagList" />
        <p v-text="tagList" />
        <hr>
        <input type="text" v-model="valueModel">
        <p>{{ typeof valueModel }}</p>
        <input type="number" v-model.lazy="numberModel">
        <!-- <input v-model.number="numberModel"> -->
        <p>{{ 10000 + numberModel }}</p>
        <select v-model="selectModel">
            <option value="summer">여름</option>
            <option value="winter">겨울</option>
        </select>
        <p>{{ selectModel }}</p>
        <textarea v-model="textModel" />
        <hr>
        <input type="checkbox" v-model="chData" true-value="점심" false-value="저녁">
        <p>{{ chData }}</p>
        <div>
            <input type="checkbox" value="서울" v-model="city">서울
            <input type="checkbox" value="대구" v-model="city">대구
            <p>{{ city }}</p>
        </div>
        <div>
            <input type="radio" value="독서" v-model="hobby">독서
            <input type="radio" value="영화" v-model="hobby">영화
            <input type="radio" value="운동" v-model="hobby">운동
            <p>{{ hobby }}</p>
        </div>
        <hr>
        <img v-bind:style="styleData" v-bind:src="imgUrl">
        <!-- <img v-bind:style="[backSetting, addStyle]" <-권장안함 v-bind:src="imgUrl"> -->
        <div class="container" v-bind:class="{
            'active' : isActive, 'text-red' : hasError
        }">Class Binding First</div>
        <div class="container" v-bind:class="myClass">Class Binding Second</div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                title : 'Hello, Vue.js',
                tagList : '<strong>Today is ...</strong>',
                valueModel : 'Korea',
                numberModel : 0,
                selectModel : 'winter',
                textModel : 'ㅇㅁㅇ',
                chData : '멈춰!',
                city : [],
                hobby : '영화',
                imgUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-H_O3EhrA9DhEbio25HHn69eUp9O-O-4NYINBMUis5tXmc03BjG3WCmEJQVt4dQdaU_8&usqp=CAU',
                styleData : {
                    backgroundColor : 'skyblue',
                    width : '300px',
                    border : '2px solid skyblue',
                    borderRadius : '50px'
                },
                // backSetting : 'backgroud-color:skyblue; width:200px',
                // addStyle : 'height: 200px;'
                isActive : false,
                //hasError : !this.isActive
                myClass : 'active'
            }
        },
        computed : {
            hasError() {
                return !this.isActive;
            }
        }
    }
</script>
<style scoped>
    .container {
        width : 100%;
        height : 200px;
    }
    .active {
        background-color: rgb(0, 119, 255);
        font-weight: bold;
    }
    .text-red {
        color : red;
    }
</style>
