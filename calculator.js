const display= document.querySelector(".text")
  function myfuntion(input){
    display.value+=input;
  }
  function reset(){
    display.value=""
  }
  function evaal(){
    try{
       var indexofdot=(eval(display.value)).toString().indexOf(".")
      var substring=(eval(display.value)).toString().substring(indexofdot+1)
       var len= substring.length
          if(Number.isInteger(eval(display.value))==true)
            {
                 display.value=eval(display.value)
                
            }
       else if(len>3){
              
              display.value= (eval(display.value)).toFixed(3)
          }
          else{
            display.value= (eval(display.value)).valueOf()
          }
   
    }
    catch(error){
display.value="Invalid input"
    }
  }
function del(){
  display.value=display.value.toString().slice(0,-1)
}
