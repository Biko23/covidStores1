var validate = () => {
  var fname = document.getElementById('fname');
  var lname = document.getElementById('lname');
  var gender = document.getElementsByName('gender');
  var country = document.getElementById('country');
  var city = document.getElementById('city');
  var designation = document.getElementById('designation');
  var password = document.getElementById(password);
  var confirmPassword = document.getElementById('confirmPassword');

  if(fname.value.length == ""){
    fname.style.border = '1px solid red'
    document.getElementById("message").innerHTML= "Invalid";
    document.getElementsById("message").style = 
    "color: red; font-family: Arial, Helvetica, sans-serif;";
  }else if(lname.value.length == ""){
    
  lname.style.border = '1px solid red'
  document.getElementById("message").innerHTML= "Invalid";
  document.getElementsById("message").style = 
  "color: red; font-family: Arial, Helvetica, sans-serif;";

  }else if(gender.value.length == ""){
    
    gender.style.border = '1px solid red'
    document.getElementById("message").innerHTML= "Invalid";
    document.getElementsById("message").style = 
    "color: red; font-family: Arial, Helvetica, sans-serif;";
  
  }else if(country.value.length == ""){
    
    country.style.border = '1px solid red'
    document.getElementById("message").innerHTML= "Invalid";
    document.getElementsById("message").style = 
    "color: red; font-family: Arial, Helvetica, sans-serif;";
    
  }else if(city.value.length == ""){
    
    city.style.border = '1px solid red'
    document.getElementById("message").innerHTML= "Invalid";
    document.getElementsById("message").style = 
    "color: red; font-family: Arial, Helvetica, sans-serif;";
  
    } else{
      console.log("Successfully validated");
    }

}


