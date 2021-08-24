<template>
        <div  class="container">
            <div class="item">
                Управление результатом/ответственность
                
                 <select class="sel" 
                    v-model="user_selected_option.sortOption" 
                    @change="retotal">
                        <option  value="" selected>Choose</option>
                        <option 
                            v-for="(srt, key) in sortOp" :key="key"
                            :value="key">
                            {{srt.scr.toFixed(2) }}
                        </option>
                </select>
            </div>
            <div class="item"> 
                Управление собой
                <select class="sel" 
                    v-model="user_selected_option.mngYOption" 
                    @change="retotal">
                        <option  value="" selected>Choose</option>
                        <option 
                            v-for="(srt, key) in mngYOp" :key="key"
                            :value="key">
                            {{srt.scr.toFixed(2) }}
                        </option>
                </select>
            </div>
            <div class="item">
                Клиентоцентричность
                <select class="sel" 
                    v-model="user_selected_option.custOption" 
                    @change="retotal">
                        <option  value="" selected>Choose</option>
                        <option 
                            v-for="(srt, key) in custOp" :key="key"
                            :value="key">
                            {{srt.scr.toFixed(2) }}
                        </option>
                </select>
            
            </div>  
            <div class="item" >
                Score<br>
                <strong>{{item.score}}</strong>
            </div>
            
        </div>
</template>

<script>
export default {
    props:['item'],
    data(){
        return{
            total: 0,
            user_selected_option:{
                sortOption: '',
                mngYOption: '',
                custOption: ''
            },
            sortOp:{
                sort_1: {sortOption:'1',scr: 1},
                sort_2: {sortOption:'2',scr: 2},
            },
            mngYOp:{
                mng_1: {mngYOption:'1',scr: 1},
                mng_2: {mngYOption:'2',scr: 1.5},
            },
            custOp:{
                cust_1: {custOption:'1',scr: 1},
                cust_2: {custOption:'2',scr: 1.2},
            }
        }
    },
    methods:{
        retotal: function() {
            let newTotal = 0;
            if(this.user_selected_option.sortOption) {
                newTotal = newTotal + this.sortOp[this.user_selected_option.sortOption].scr;
            }
            if(this.user_selected_option.mngYOption != '') {
                newTotal = newTotal + this.mngYOp[this.user_selected_option.mngYOption].scr;
            }
            if(this.user_selected_option.custOption != '') {
            newTotal = newTotal + this.custOp[this.user_selected_option.custOption].scr;
            }
            this.total = newTotal;
            this.item.score = this.total;
            console.log(this.item.score)
            }
        }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
  
}
.item {
    flex-basis:  auto;
    padding: 5px 0 0 20px;
}

.sel{
    display: block; 
    font-size: 16px; 
    font-family: sans-serif; 
    font-weight: 700; 
    color: #444; 
    line-height: 1.3; 
    padding: .6em 1.4em .5em .8em; width: 100%; 
    max-width: 100%; 
    box-sizing: border-box; 
    margin: 0; 
    border: solid 1px rgb(184, 184, 184);
    border-radius: .5em;
    background-color: #fff; 
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%; 
   

}
 .sel::-ms-expand { display: none; } 
 .sel:hover { border: solid 2px rgb(100, 100, 100);} 

 .sel option { font-weight:normal; } 
 *[dir="rtl"] .sel, :root:lang(ar) .sel, :root:lang(iw) .sel { 
background-position: left .7em top 50%, 0 0; 
padding: .6em .8em .5em 1.4em; 

}
.title{
    padding: 15px;
    border-radius: 20px;
}
select{
    border: none;
    text-align: center;
    
}
option{
    text-align: center;
}
</style>