<template>
        <div class="voting__row-participant-score">
            <div class="voting__row-participant-score-item">
                Управление результатом/ответственность
                 <select class="voting__select"
                    v-model="user_selected_option.sortOption" 
                    @change="retotal">
                        <option  value="" selected>Выберите значение</option>
                        <option 
                            v-for="(srt, key) in sortOp" :key="key"
                            :value="key">
                            {{srt.scr.toFixed(2) }}
                        </option>
                </select>
            </div>
            <div class="voting__row-participant-score-item">
                Управление собой
                <select class="voting__select"
                    v-model="user_selected_option.mngYOption" 
                    @change="retotal">
                        <option  value="" selected>Выберите значение</option>
                        <option 
                            v-for="(srt, key) in mngYOp" :key="key"
                            :value="key">
                            {{srt.scr.toFixed(2) }}
                        </option>
                </select>
            </div>
            <div class="voting__row-participant-score-item">
                Клиентоцентричность
                <select class="voting__select"
                    v-model="user_selected_option.custOption" 
                    @change="retotal">
                        <option  value="" selected>Выберите значение</option>
                        <option 
                            v-for="(srt, key) in custOp" :key="key"
                            :value="key">
                            {{srt.scr.toFixed(2) }}
                        </option>
                </select>
            
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
            // if(this.user_selected_option.sortOption) {
            //     newTotal = newTotal + this.sortOp[this.user_selected_option.sortOption].scr;
            // }
            // if(this.user_selected_option.mngYOption != '') {
            //     newTotal = newTotal + this.mngYOp[this.user_selected_option.mngYOption].scr;
            // }
            // if(this.user_selected_option.custOption != '') {
            // newTotal = newTotal + this.custOp[this.user_selected_option.custOption].scr;
            // }
            this.total = newTotal;
            this.item.score = this.total;
            console.log(this.item.score)
            }
        }
}
</script>

<style scoped>

</style>