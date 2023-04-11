const form=document.getElementById("form");
var fField=document.getElementById("fname");
var flabel=document.getElementById("fname-label");
var ferror=document.getElementById("f-error");
var emailField=document.getElementById("mail");
var emaillabel=document.getElementById("mail-label");
var emailerror=document.getElementById("e-error");
var QueryField=document.getElementById("query");
var Querylabel=document.getElementById("query-label");
var Queryerror=document.getElementById("q-error");








function validatefname()
{
    if(fField.value===""){
    ferror.innerHTML="please enter the First name";
    fField.style.border="2px solid red";
    return false;
    }
    else if(fField.value.length<4 || fField.value.length>15){
        ferror.innerHTML="Characters of the First name should be Min 4 and Max 15";
        fField.style.border="2px solid red";
        return false;
    }

    else{
        ferror.innerHTML="";
        fField.style.border="2px solid green";
        return true; 

    }
}


function validateemail()
{
    if(emailField.value===""){
        emailerror.innerHTML="please enter the E-Mail id";
        emailField.style.border="2px solid red";
        return false;
        }

        else if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            emailerror.innerHTML = "please enter a  valid E-mail ID";
            emailField.style.border = "2px solid red";
            return false;
         }
    
        else{
            emailerror.innerHTML="";
            emailField.style.border="2px solid green";
            return true; 
    
        }
}

function validateQuery()
{
    if(QueryField.value===""){
        Queryerror.innerHTML="Please enter your Queries";
        QueryField.style.border="2px solid red";
        return false;
        }

        else if(QueryField.value.length<50 || QueryField.value.length>50){
            Queryerror.innerHTML="Queries should have contain atleast 50 words";
            QueryField.style.border="2px solid red";
            return false;
        }

   else{
        Queryerror.innerHTML="";
        QueryField.style.border="2px solid green";
       return true; 
    
        }   

}


form.addEventListener('submit',e=>{
    e.preventDefault();
    checkinput();
   });

   
function checkinput() {
    const fullnamevalue = fField.value.trim();
    const emailvalue = emailField.value.trim();
    const Queryvalue= QueryField.value.trim();

    document.write("Full Name:"+" "+fullnamevalue + "<br>");
    document.write("Email id:"+" " + emailvalue + "<br>");
    document.write("Queries:"+" " + Queryvalue + "<br>");
}

