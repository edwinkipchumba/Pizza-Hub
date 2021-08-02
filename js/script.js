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
  var item=document.getElementById("ordersmade").value;
    if(myForm.type.value==""){
      alert("please select your flavor");
      return false;
    }
    else if(myForm.size.value==""){
      alert("please select your pizza size");
       return false;
    }
    else if(myForm.crust.value==""){
      alert("please select your crust");
      return false;
    }
    else if(myForm.topping.value==""){
      alert("please select your topping")
    }
    else if(item<=0){
      alert("item should be selected")
       return false;
    }
}

var name=document.getElementById("name").value;
var phone=document.getElementById("phone").value;
var location=document.getElementById("location").value;

if(phone==="" || phone.length>10){
  alert("please enter a valid phone number")
  return false;
}
else if(name===""){
  alert("provide a valid name")
  return false;
}
else if(locatio===""){
  alert("please provide your lacation");
  return false;
}
else alert("your order will be delivered")
