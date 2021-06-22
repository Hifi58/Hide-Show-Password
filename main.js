//version 1 

const input = document.getElementById("input") ;
const span = document.getElementById("display");
document.getElementById('checkbox').addEventListener('mouseup',
function(){
    if(input.type == 'password'){
        input.type= 'text';
        span.innerHTML= "Hide";
    }else{
        input.type='password';
        span.innerHTML= "Show";
    }
})


//version 2
const input = document.getElementById("input") ;
const span = document.getElementById("display");
document.getElementById('display').addEventListener('mouseup',
function(){
        input.type= 'password';
  }
)
document.getElementById('display').addEventListener('mousedown',
function(){
        input.type='text';
}
)