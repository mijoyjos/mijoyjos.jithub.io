function fnValidate()
{
var pas=document.getElementById('pwdPass').value;
var patt=new RegExp("[0-9]","g");
var re=new RegExp("[a-z]","g");
var cap=new RegExp("[A-z]","g");
var spe=new RegExp("[@!~#$%^&*]","g");
if(patt.test(pas)==false)
{

	alert("Enter a strong password");
	return false;
}

if(re.test(pas)==false&&cap.test==false)
{
alert("Enter a strong password");
return false;	
}

if(spe.test(pas)==false)
{
alert("Enter a strong password");	
return false;	
}
return false;
}