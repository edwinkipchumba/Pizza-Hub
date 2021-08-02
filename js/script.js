// // business logic


function GetPizza(type, size, crust, topping) {
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  
};
GetPizza.prototype.pizzaSize=function(){
  if(this.type==0){
    if(this.size==0){
      return 1250;
    }
    else if(this.size==1){
      return 850;
    }
    else if(this.size==2){
      return 650
    }
  }
  else if(this.type==1){
    if(this.size==0){
      return 1250
    }
    else if(this.size==1){
      return 850
    }
     else if(this.size==2){
      return 650
  }
}
else if(this.type==2){
  if(this.size==0){
    return 1250
  }
  else if(this.size==1){
    return 850
  }
   else if(this.size==2){
    return 650
}
}
else if(this.type==3){
  if(this.size==0){
    return 1250
  }
  else if(this.size==1){
    return 850
  }
   else if(this.size==2){
    return 650
}
}
else if(this.type==4){
  if(this.size==0){
    return 1250
  }
  else if(this.size==1){
    return 850
  }
   else if(this.size==2){
    return 650
}
}
else if(this.type==5){
  if(this.size==0){
    return 1250
  }
  else if(this.size==1){
    return 850
  }
   else if(this.size==2){
    return 650
}
}
};
 
GetPizza.prototype.pizzaCrust=function(){
  if(this.crust==0){
    return 220
  }
  else if(this.crust==1){
    return 170
  }
  else if(this.crust==2){
    return 150
  }
}
GetPizza.prototype.pizzaTopping=function(){
  if(this.topping==0){
    return 60
  }
  else if(this.topping==1){
    return 90
  }
  else if(this.topping==2){
    return 80
  }
}

// user interface logic
$(document).ready(function(event){
  $("form").submit(function(){
    var item=parseInt($("#flavor option:selected").val());
    var item2=parseInt($("#size option:selected").val());
    var item3=parseInt($("#crust option:selected").val());
    var item4=parseInt($("#topping option:selected").val());
    var number=parseInt($("#num").val());
    var pizzaOrder=new GetPizza(item,item2,item3,item4);
    var newPizzaPrice=(pizzaOrder.pizzaSize()+pizzaOrder.pizzaCrust()+pizzaOrder.pizzaTopping())*number;
   
    $("#pizzaname").text($("#flavor option:selected").text())
    $("#pizzasize").text($("#size option:selected").text())
    $("#pizzacrust").text($("#crust option:selected").text())
    $("#pizzatopping").text($("#topping option:selected").text())
    $("#pizzanumber").text($("#num").text())

    $("#totals").text(newPizzaPrice).val();

  })
  
})

function validateOrder(){
  var itemNumber=document.getElementById("num").value;
    if(myForm.flavor.value==""){
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
    else if(itemNumber==0){
      alert("item should not be zero")
       return false;
    }
}

function validateForm(){
var pName=document.getElementById("name").value;
var phone=document.getElementById("phone").value;
var location=document.getElementById("location").value;

if(phone==="" || phone.length>10){
  alert("please enter a valid phone number")
  return false;
}
else if(pName===""){
  alert("provide a valid name")
  return false;
}
else if(location===""){
  alert("please provide your lacation");
  return false;
}
else {
  alert("your order will be delivered at a cost of ksh.200")
}
}
