<template>
    <div class="title">
      <select class="round" >
        <option>Раунд 1</option>
        <option>Раунд 2</option>
        <option>Раунд 3</option>
      </select>
    </div>
</template>

<style scoped>
.title{
    margin-bottom: 20px;
    margin-left: 45%;
    margin-right: auto;
}
.round{
    display: block; 
font-size: 16px; 
font-family: sans-serif; 
font-weight: 700; 
color: #444; 
line-height: 1.3; 
padding: .6em 1.4em .5em .4em; width: 20%; 
max-width: 100%; 
box-sizing: border-box; 
margin: 0; 
border: 1px solid rgb(151, 151, 151);
border-radius: .5em;
 background-color: #fff; 


}
 .round::-ms-expand { display: none; } 
 .round:hover { border: solid 2px rgb(100, 100, 100); } 
 

 select{
    border: none;
    text-align: center;
    
}
</style>