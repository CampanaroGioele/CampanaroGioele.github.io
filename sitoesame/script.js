var userA=new Array("pippo","anna","sergio","ada");
  var pwdA=new Array("pi","an","se","ad");
 
     function registrazione() {
  
	//alert("sono in reg");
		 

    var user=document.getElementById("userReg").value;
    //alert (user);
    var pwd=document.getElementById("passwordReg").value;
    //alert (pwd);
   // document.getElementById("errorMessage").value="utente non";
		
    userA[userA.length] =user;
    pwdA[pwdA.length] =pwd;
    var l=userA.length;
		  alert(userA[l-1]);   alert(pwdA[l-1]);
    if(user==userA[l-1]){
     document.getElementById("errorMessage").value="utente inserito con successo";
      } else{
           document.getElementById("errorMessage").value="utente non inserito con successo";
      }
		       if (pwdA !== confirmPwdA) {
        errorMessage.textContent = "Le password non coincidono!";
      } else {
        errorMessage.textContent = "";
        alert("Registrazione completata con successo!");
        registerForm.reset();
      }
	 });
 }// fine function registrazione() {

 
  function valLogin() {
	
    var user=document.getElementById("username").value;
    //alert (user);
    var pwd=document.getElementById("password").value;
    //alert (pwd);
    let l=userA.length;
    for (let i=0; i<l; i++){
    //alert(userA[i]);
     if((user== userA[i]) &&  (pwd== pwdA[i])){
        i=l;  
        document.getElementById("esito").value="login effettuato con successo";
      }else{
      document.getElementById("esito").value="utente non registrato";
      }

	}// fine for
 }// fine function valLogin() {
 
 
