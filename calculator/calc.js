let x=document.getElementById("result");
function y(num){
    if(num.id == 45)
    {
       x.innerHTML=+eval(x.innerHTML);
       document.getElementById("his").innerHTML= x.innerHTML;
      
    }
  
  else if(num.id==44){
         x.innerHTML="";
   }

   else if(num.id==43){
       let z=x.innerHTML;
       x.innerHTML=(x.innerHTML.slice(0,z.length-1));
  } 
  else{
  
    let m=num.innerHTML;
    x.innerHTML+=m;
   
  }
}