<template>
<div class="title">
    <select class="sel" v-model="modalValue" @change="onChange($event)">
         <option disabled value="">Choose</option>
        <option 
            v-for="option in options" 
            :key="option.value"  
            :value="option.value">
            {{option.scr}}
        </option>
    </select>
     {{modalValue}}
      <!-- <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option> -->

</div>

</template>

<script>
export default{
    props:{
        modalValue:{
            type: String
        },
        options:{
            type:Array,
            default: () => []
        },
        // selected:{
        //     type:Array,
        //     default: () => []
        // },
    },
    methods:{
        onChange(event){
            this.$emit('update:modalValue', event.target.value)
            console.log(event.target.value)
        }
    }
   
}
</script>


<style scoped>
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
 .sel:focus { 
   
} 
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