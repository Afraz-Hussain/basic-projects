 var target=document.getElementById('btnplus');
 var x=0;
 target.addEventListener('click',add());
  function add(){
      x=x+1;
      document.getElementById('counter').innerHTML=x;
  }
 add();

 target.addEventListener('click',sub());
 function sub(){
    x=x-1;
    document.getElementById('counter').innerHTML=x;
}
sub();

var Reset=document.getElementById('reset');
var re=Reset.addEventListener('click',resetnow);
 function resetnow(){
{
    x=x*0
    document.getElementById('counter').innerHTML=x;
}
 }

resetnow();



