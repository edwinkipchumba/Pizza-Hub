// business logic 
var price, crustPrice,toppingPrice
let cost=0;
function getPizza(name,size,crust,topping,total){
    this.name=name;
    this.size=size;
    this.crust=crust;
    this.topping=topping;
    this.total=total;
}

// user interface logic
$(document).ready(function(){
  $("button#order").click(function(event){
      event.preventDefault();
      let pizzaName=$(".name option:selected").val();
      let pizzaSize=$("#size option:selected").val();
      let PizzaCrust=$("#crust optio:selected").val();
      let pizzaTopping=[];
      
  })  
})
 