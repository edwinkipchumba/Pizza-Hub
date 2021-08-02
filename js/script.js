// business logic 
var price, crustPrice, toppingPrice
let cost = 0;

function getPizza(name, size, crust, topping, total) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
};

// user interface logic
function order(){
  var type=document.getElementById("ordersmade").value;
    if(myForm.type.value==""){
      alert("please select your flovor");
      return false;
    }
    else if(myForm.size.value=="")
}

// $(document).ready(function () {
//   $("button#order").click(function (event) {
//     event.preventDefault();
//     let pizzaName = $(".name option:selected").val();
//     let pizzaSize = $("#size option:selected").val();
//     let PizzaCrust = $("#crust optio:selected").val();
//     let pizzaTopping = [];

//     function.(element => {

//     });

//   });
//   let toppingValue = pizzaTopping.length * 60;
//   console.log("toppings value" + toppingsValue);

  
//     if (pizzaSize == 0 && PizzaCrust == 0) {
//       console.log("nothing selected");
//       $("button#order").show();
//       $("button#information").show();
//       $("button.choice").hide();
//       alert("please select pizza size and crust")
//     } else {
//       $("button#order").hide();
//       $("button#information").hide();
//       $("button.choice").slideDown(800);
//     }
    
//     total=price+crustPrice+toppingValue;
//     console.log(total);
//     let checkoutTotal=checkoutTotal+total;
//   })
  
