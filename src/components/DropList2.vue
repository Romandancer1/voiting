<template>
<div class="title">
    <select class="sel" >
    <option>A</option>
    <option>Б</option>
    <option>В</option>
    </select>
</div>

</template>

<script>

export default{
    props:{
        options:{
            type: Array,
            default(){
                return[]
            }
        },
        selected:{
            type: String,
            default:''
        }
    },
   
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
    background-image:
        linear-gradient(45deg, transparent 50%, gray 50%),
        linear-gradient(135deg, gray 50%, transparent 50%),
        linear-gradient(to right, #ccc, #ccc);
    background-position:
        calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px),
        calc(100% - 2.5em) 0.5em;
    background-size:
        5px 5px,
        5px 5px,
        1px 1.5em;
    background-repeat: no-repeat;

}
 .sel::-ms-expand { display: none; } 
 .sel:hover { border: solid 2px rgb(100, 100, 100);} 
 .sel:focus { 
    background-image:
        linear-gradient(45deg, rgb(100, 100, 100) 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, rgb(100, 100, 100) 50%),
        linear-gradient(to right, #ccc, #ccc);
    background-position:
        calc(100% - 15px) 1em,
        calc(100% - 20px) 1em,
        calc(100% - 2.5em) 0.5em;
    background-size:
        5px 5px,
        5px 5px,
        1px 1.5em;
    background-repeat: no-repeat;
    border-color: rgb(100, 100, 100);
    outline: 0;
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
    appearance: none;
    text-align: center;
    
}
option{
    text-align: center;
}

</style>