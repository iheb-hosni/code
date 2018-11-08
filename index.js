function verif()
{

	   var name = document.getElementById('name') ;
	   var password = document.getElementById('Password') ;
	   var email =document.getElementById('email');
	   var lastname=document.getElementById('lastname')
	   var sexe = document.getElementById('sexe')
	   var age = document.getElementById('userAge')
	   var hasLetter = false
	   var hasUpperLetter = false
	   var hasNumber = false
       var reg= /^\w+@\w+\.\w+/gi;
	   if(name.value.trim()==""){
   	alert("u must enter your name");
   return false;
   }
   if(isNaN(name.value)==false){
    	alert("enter alphabetic letter");
    	return false;
    }
    if(lastname.value.trim()==""){
   	alert("u must enter your lastname");
   return false;
   }
   if(isNaN(lastname.value)==false){
    	alert("enter alphabetic letter");
    	return false;
    }
    if(reg.test(email)!==true){
   	    alert("email invalid")
   	     	return false
   	     	 


   }
   if(password.value.length<8){
   	alert("the password contain at less 8 caracter");
   return false;
   }

   for(char of password.value) {
	if(char >='a' && char <= 'z')
	 {hasLetter = true}
	if(char >='A' && char <= 'Z') 
		{hasUpperLetter = true}
	if(char >='0' && char <= '9')
	 {hasNumber = true}
	}

	var isValid = hasLetter && hasUpperLetter && hasNumber
	if(!isValid) 
		{alert('The password must be a combination of charatacters , numbers and at least a capital letter')}
     
    if(age.value==""){
    	alert("enter you'r age")
    }
    if(sexe.checked==0)
	{
	alert("choose your sexe");
	return false;
	}	 

 
}
function test()
{
		   var password1 = document.getElementById('Password1') ;
		    var hasLetter = false
	   var hasUpperLetter = false
	   var hasNumber = false
	   var chek=document.getElementById('chek')

	if(password1.value.length<8){
   	alert("the password contain at less 8 caracter");
   return false;
   }

   for(char of password1.value) {
	if(char >='a' && char <= 'z')
	 {hasLetter = true}
	if(char >='A' && char <= 'Z') 
		{hasUpperLetter = true}
	if(char >='0' && char <= '9')
	 {hasNumber = true}
	}
	 var isValid = hasLetter && hasUpperLetter && hasNumber
	if(!isValid) 
		{alert('The password must be a combination of charatacters , numbers and at least a capital letter')}
   
}


function msg()
{
	var name=document.getElementById('names').value;
    var email=document.getElementById('emails').value;
    var mobile=document.getElementById('phone').value;
    var sub=document.getElementById('subject').value;
    var message =document.getElementById('message').value;
  	const regex= /^\w+@\w+\.\w+/gi;

 
     if(name.trim()==""){
     	document.getElementById('num').innerHTML="u must enter ur name";
    	
    return false;
    }
    if(isNaN(name)==false)
    {
     	document.getElementById('nums').innerHTML="you'r name invalid";
     	
     	return false;
     }
    
	 if(sub.trim()==""){
     	document.getElementById('sub').innerHTML="u must enter the subject";
    	
    return false;
	}
	if(mobile.length<8){
   	 document.getElementById('mob').innerHTML="ur mobile number invalid"
   return false;
   }
   if(regex.test(email)!==true){
   	     

   	     	document.getElementById('mail').innerHTML="email invalid";
   	     	return false
   	     	 


   }
   return true 

}