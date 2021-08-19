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
 .round::-ms-expand { display: none; } 
 .round:hover { border: solid 2px rgb(100, 100, 100); } 
 .round:focus { 
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

 select{
    border: none;
    appearance: none;
    text-align: center;
    
}
</style>