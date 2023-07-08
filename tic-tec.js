



arr=[[1,2,3],[4,5,6],[7,8,9]];
krr=[];
x=true;
y=false;
a=window.prompt("enter input of first player");
b=window.prompt("enter input of player 2");
var aud=new Audio();
   aud.src="claps-44774.mp3";
a=a.toUpperCase();
b=b.toUpperCase();
 var done=0;

  if(a=="X" && b=="O"||b=="X" && a=="O")
  {
  

  

document.getElementById("bt-1").onclick=function()
{   
   
  if(done==0)
    if(!krr.includes(1))
    {
      console.log("welcome");
       if(x==true || y==true)
       {
            p=checktictac();
            console.log(p);
             if(x==true  && p==1 )
             {
              console.log("its player 1's turn");
              document.getElementById("lbs").innerHTML="Player 2's turn";
              document.getElementById("bt-1").innerText=a;
              arr[0][0]=a;
              krr.push(1);
              y=true;
              x=false;
              e=checktictac();
              if(e==0 && done==0)
              {
                
                document.getElementById("lbs").innerHTML="Match Tied";
              }


             }
             else if(y==true && p==1)
             {
               console.log("hey");
               document.getElementById("lbs").innerHTML="Player 1's turn";
               console.log("its player 2's turn");
               document.getElementById("bt-1").innerText=b;
               arr[0][0]=b;
              krr.push(1);
               y=false;
               x=true;
               e=checktictac();
               if(e==0 && done==0)
              {
                
                document.getElementById("lbs").innerHTML="Match Tied";
              }

             }

          }
       }
      }
      /*
    if(turn%2!=0)
    {
   document.getElementById("bt-1").innerText="X";
    arr[0][0]="X";
    checktictac();
    }
   else
   {
   document.getElementById("bt-1").innerText="O";
   arr[0][0]="O";
   checktictac();
   }
   */
 //  krr.push(1)

document.getElementById("bt-2").onclick=function()
{  
  if(done==0)
  if(!krr.includes(2))
  {
     if(x==true || y==true)
     {
          p=checktictac();
           if(x==true  && p==1 )
           {
            console.log("its player 1's turn");
            document.getElementById("lbs").innerHTML="Player 2's turn";
            document.getElementById("bt-2").innerText=a;
            arr[0][1]=a;
            krr.push(2);
            y=true;
            x=false;
            e=checktictac();
            if(e==0 && done==0)
              {
                
                document.getElementById("lbs").innerHTML="Match Tied";
              }

           }
           else if(y==true && p==1)
           {
             console.log("its player 2's turn");
             document.getElementById("lbs").innerHTML="Player 1's turn";
             document.getElementById("bt-2").innerText=b;
             arr[0][1]=b;
             krr.push(2);
             y=false;
             x=true;
             e=checktictac();
             if(e==0 && done==0)
              {
                
                document.getElementById("lbs").innerHTML="Match Tied";
              }

           }
           else
           {
              alert("tied");

           }

        }
     }
}

document.getElementById("bt-3").onclick=function()
{  
  if(done==0)
  if(!krr.includes(3))
  {
     if(x==true || y==true)
     {
          p=checktictac();
           if(x==true  && p==1 )
           {
            console.log("its player 1's turn");
            document.getElementById("lbs").innerHTML="Player 2's turn";
            document.getElementById("bt-3").innerText=a;
            arr[0][2]=a;
            krr.push(3);
            y=true;
            x=false;
            e=checktictac();
            if(e==0 && done==0)
              {
                
                document.getElementById("lbs").innerHTML="Match Tied";
              }

           }
           else if(y==true && p==1)
           {
             console.log("its player 2's turn");
             document.getElementById("lbs").innerHTML="Player 1's turn";
             document.getElementById("bt-3").innerText=b;
             arr[0][2]=b;
            krr.push(3);
             y=false;
             x=true;
            e=checktictac();
            if(e==0 && done==0)
              {
              
                document.getElementById("lbs").innerHTML="Match Tied";
              }

           }
           else
           {
              alert("tied");

           }

        }
     }
    }
    
document.getElementById("bt-4").onclick=function()
{  
  if(done==0)
  if(!krr.includes(4))
  {  
     if(x==true || y==true)
     {
          p=checktictac();
           if(x==true  && p==1 )
           {
            console.log("its player 1's turn");
            document.getElementById("lbs").innerHTML="Player 2's turn";
            document.getElementById("bt-4").innerText=a;
            arr[1][0]=a;
            krr.push(4);
            y=true;
            x=false;
            e=checktictac();
            if(e==0 && done==0)
              {
                alert("match tied");
                document.getElementById("lbs").innerHTML="Match Tied";
              }

           }
           else if(y==true && p==1)
           {
             console.log("its player 2's turn");
             document.getElementById("lbs").innerHTML="Player 1's turn";
             document.getElementById("bt-4").innerText=b;
             arr[1][0]=b;
             krr.push(4);
             y=false;
             x=true;
             e=checktictac();
             if(e==0 && done==0)
              {
                document.getElementById("lbs").innerHTML="Match Tied";
              }

           }
           else
           {
              alert("tied");
           }

        }
     }
    }

document.getElementById("bt-5").onclick=function()
{  
  if(done==0)
  if(!krr.includes(5))
  {
     if(x==true || y==true)
     {
        
          p=checktictac();
           if(x==true  && p==1 )
           {
            console.log("its player 1's turn");
            document.getElementById("lbs").innerHTML="Player 2's turn";
            document.getElementById("bt-5").innerText=a;
            arr[1][1]=a;
            krr.push(5);
            y=true;
            x=false;
           e=checktictac();
           if(e==0 && done==0)
              {
              
                document.getElementById("lbs").innerHTML="Match Tied";
              }

           }
           else if(y==true && p==1)
           {
            document.getElementById("lbs").innerHTML="Player 1's turn";
             console.log("its player 2's turn");
             document.getElementById("bt-5").innerText=b;
             arr[1][1]=b;
             krr.push(5);
             y=false;
             x=true;
             e=checktictac();
             if(e==0 && done==0)
              {
  
                document.getElementById("lbs").innerHTML="Match Tied";
              }

           }
           else
           {
              alert("tied");

           }

        }
     }
    }


document.getElementById("bt-6").onclick=function()
{  
  if(done==0)
  if(!krr.includes(6))
  {
     if(x==true || y==true)
     {
          p=checktictac();
           if(x==true  && p==1 )
           {
            console.log("its player 1's turn");
            document.getElementById("lbs").innerHTML="Player 2's turn";
            document.getElementById("bt-6").innerText=a;
            arr[1][2]=a;
            krr.push(6);
            y=true;
            x=false;
            e=checktictac();
            if(e==0 && done==0)
              {
              
                document.getElementById("lbs").innerHTML="Match Tied";
              }

           }
           else if(y==true && p==1)
           {
             console.log("its player 2's turn");
             document.getElementById("lbs").innerHTML="Player 1's turn";
             document.getElementById("bt-6").innerText=b;
             arr[1][2]=b;
            krr.push(6);
             y=false;
             x=true;
             e=checktictac();
             if(e==0 && done==0)
              {
                document.getElementById("lbs").innerHTML="Match Tied";
              }

           }
           else
           {
              alert("tied");

           }

        }
     }
    }


document.getElementById("bt-7").onclick=function()
{  
  if(done==0)
  if(!krr.includes(7))
  {
     if(x==true || y==true)
     {
          p=checktictac();
          console.log("this is p::",p);
           if(x==true  && p==1 )
           {
            console.log("its player 1's turn");
            document.getElementById("lbs").innerHTML="Player 2's turn";
            document.getElementById("bt-7").innerText=a;
            arr[2][0]=a;
            krr.push(7);
            y=true;
            x=false;
            e=checktictac();
            console.log("this is e",e+" "+done);
            if(e==0 && done==0)
              {
                document.getElementById("lbs").innerHTML="Match Tied";
              }

           }
           else if(y==true && p==1)
           {
             console.log("its player 2's turn");
             document.getElementById("lbs").innerHTML="Player 1's turn";
             document.getElementById("bt-7").innerText=b;
             arr[2][0]=b;
            krr.push(7);
             y=false;
             x=true;
             e=checktictac();
             console.log("this is e",e+" "+done);
             if(e==0 && done==0)
              {
                document.getElementById("lbs").innerHTML="Match Tied";
              }

           }
           else
           {
              alert("tied");

           }

        }
     }
    }

document.getElementById("bt-8").onclick=function()
{  
  if(done==0)
  if(!krr.includes(8))
  {
     if(x==true || y==true)
     {
          p=checktictac();
           if(x==true  && p==1 )
           {
            document.getElementById("lbs").innerHTML="Player 2's turn";
            console.log("its player 1's turn");
            document.getElementById("bt-8").innerText=a;
            arr[2][1]=a;
            krr.push(8);
            y=true;
            x=false;
            e=checktictac();
            console.log("this is e",e+" "+done);
            if(e==0 && done==0)
              {
                
                document.getElementById("lbs").innerHTML="Match Tied";
              }

           }
           else if(y==true && p==1)
           {
             console.log("its player 2's turn");
             document.getElementById("lbs").innerHTML="Player 1's turn";
             document.getElementById("bt-8").innerText=b;
             arr[2][1]=b;
             krr.push(8);
             y=false;
             x=true;
             e=checktictac();
             console.log("this is e",e+" "+done);
             if(e==0 && done==0)
              {
            
                document.getElementById("lbs").innerHTML="Match Tied";
              }

           }
           else
           {
              alert("tied");

           }

        }
     }
    }


document.getElementById("bt-9").onclick=function()
{  
  if(done==0)
  if(!krr.includes(9))
  {
    console.log("this is",a);
    console.log("this is",b);
     if(x==true || y==true)
     {
       console.log(x);
       console.log(y);
          p=checktictac();
           if(x==true  && p==1 )
           {
            document.getElementById("lbs").innerHTML="Player 2's turn";
            console.log("its player 1's turn");
            document.getElementById("bt-9").innerText=a;
            arr[2][2]=a;
            krr.push(9);
            y=true;
            x=false;
            e=checktictac();
            console.log("this is e",e+" "+done);

            if(e==0 && done==0)
              {
        
                document.getElementById("lbs").innerHTML="Match Tied";
              }

           }
           else if(y==true && p==1)
           {
             console.log("its player 2's turn");
             document.getElementById("lbs").innerHTML="Player 1's turn";
             document.getElementById("bt-9").innerText=b;
             arr[2][2]=b;
             krr.push(9);
             y=false;
             x=true;
             e=checktictac();
             console.log("this is e",e+" "+done);
             if(e==0 && done==0)
              {
               // alert("match tied");
                document.getElementById("lbs").innerHTML="Match Tied";
              }

           }
           else
           {
              alert("tied");

           }

        }
     }
    }
  }
  else
   alert("invalid input");


function checktictac()
{
  console.log(arr);
  if(arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2])
  { 
    done=1;
    //alert(`player ${(arr[0][0])} won`);
    if(arr[0][0]==a)
    {
  /*  document.getElementById("lbs").innerHTML=` player 1 won`;*/
    callwinner("Player 1 won");
    aud.play();
    tryfor();
    }
    else
    {
   /* document.getElementById("lbs").innerHTML=` player 2 won`;*/
    callwinner("Player 2 won");
    aud.play();
    tryfor();
    }

  }
  else if(arr[0][0]==arr[0][1] && arr[0][1]==arr[0][2])
  {
     done=1;
    //alert(`player ${(arr[0][0])} won`);
    if(arr[0][0]==a)
    {
   /* document.getElementById("lbs").innerHTML=` player 1 won`;*/
    callwinner("Player 1 won");
    aud.play();
    tryfor();
    }
    else
    {
    /*document.getElementById("lbs").innerHTML=` player 2 won`;*/
    callwinner("Player 2 won");
    aud.play();
    tryfor();
    }

  }

  else if(arr[1][0]==arr[1][1] && arr[1][1]==arr[1][2])
  {
     done=1;
   // alert(`player ${(arr[1][0])} won`);
    //document.getElementById("lbs").innerHTML=`${(arr[1][0])} won`;
    if(arr[1][0]==a)
    {
     
   /* document.getElementById("lbs").innerHTML=` player 1 won`;*/
    callwinner("Player 1 won");
    aud.play();
    tryfor();
    }
    else
    {
      
    /*document.getElementById("lbs").innerHTML=` player 2 won`;*/
    callwinner("Player 2 won");
    aud.play();
    tryfor();
    }

  }

  else if(arr[2][0]==arr[2][1] && arr[2][1]==arr[2][2])
  {
    done=1;
    //alert(`player ${(arr[2][0])} won`);
    //document.getElementById("lbs").innerHTML=`${(arr[2][0])} won`;

    if(arr[2][0]==a)
    {
     
   /* document.getElementById("lbs").innerHTML=` player 1 won`;*/
    callwinner("Player 1 won");
    aud.play();
    tryfor();
    }
    else
    {
      
   /* document.getElementById("lbs").innerHTML=` player 2 won`;*/
    callwinner("Player 2 won");
    aud.play();
    tryfor();
    }

  }
  else if(arr[0][0]==arr[1][0] && arr[1][0]==arr[2][0])
  {
    done=1;
    //alert(`player ${(arr[0][0])} won`);
    //document.getElementById("lbs").innerHTML=`${(arr[0][0])} won`;
    if(arr[0][0]==a)
    {
   /* document.getElementById("lbs").innerHTML=` player 1 won`;*/
    callwinner("Player 1 won");
    aud.play();
    tryfor();
    }
    else
    {
    /*document.getElementById("lbs").innerHTML=` player 2 won`;*/
    callwinner("Player 2 won");
    aud.play();
    tryfor();
    }
  }

  else if(arr[0][1]==arr[1][1] && arr[1][1]==arr[2][1])
  {
    done=1;
    //alert(`player ${(arr[1][0])} won`);
   // document.getElementById("lbs").innerHTML=`${(arr[0][1])} won`;
   if(arr[0][1]==a)
   {
   /* document.getElementById("lbs").innerHTML=` player 1 won`;*/
    callwinner("Player 1 won");
    aud.play();
    tryfor();
   }
    else
    {
    /*document.getElementById("lbs").innerHTML=` player 2 won`;*/
    callwinner("Player 2 won");
    aud.play();
    tryfor();
    }

  }

  else if(arr[0][2]==arr[1][2] && arr[1][2]==arr[2][2])
  {
     done=1;
    //alert(`player ${(arr[2][0])} won`);
    //document.getElementById("lbs").innerHTML=`${(arr[0][2])} won`;
    if(arr[0][2]==a)
    {
     
   /* document.getElementById("lbs").innerHTML=` player 1 won`;*/
    callwinner("Player 1 won");
    aud.play();
    tryfor();
    }
    else
    {
    /*document.getElementById("lbs").innerHTML=` player 2 won`;*/
    callwinner("Player 2 won");
    aud.play();
    tryfor();
    }

  }
  else if(arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0])
  {
    done=1;
   // alert(`player ${(arr[0][2])} won`);
    //document.getElementById("lbs").innerHTML=`${(arr[0][2])} won`;
    if(arr[0][2]==a)
    {
    /*document.getElementById("lbs").innerHTML=` player 1 won`;*/
    callwinner("Player 1 won");
    aud.play();
    tryfor();
    }
    else
    {  
   /* document.getElementById("lbs").innerHTML=` player 2 won`;*/
    callwinner("Player 2 won");
    aud.play();
    tryfor();
    }

  }
  else
  {
    console.log(krr.length);
    if(!(krr.length==9))
    { 
      console.log("hey");
      return 1;
    }
    else
    {
      //done=1;
      //console.log("ok");
      return 0;
    }
  }
}

function tryfor()
{
  if((arr[0][0]=="X" && arr[1][1]=="X"&& arr[2][2]=="X")||(arr[0][0]=="O" &&arr[1][1]=="O" && arr[2][2]=="O"))
  {
    console.log("1");
      document.getElementById("bt-1").style.color="#f94bc1de";
    
      document.getElementById("bt-5").style.color="#f94bc1de";
    
      document.getElementById("bt-9").style.color="#f94bc1de"; 
  }
  else if(((arr[0][0]=="X" && arr[0][1]=="X") && (arr[0][1]=="X" && arr[0][2]=="X"))||((arr[0][0]=="O" &&arr[0][1]=="O")&&(arr[1][1]=="O" && arr[1][2]=="O")))
  {
    console.log("2");
    document.getElementById("bt-1").style.color="#f94bc1de";
    document.getElementById("bt-2").style.color="#f94bc1de";
    document.getElementById("bt-3").style.color="#f94bc1de";
  }
  else if(((arr[1][0]=="X" && arr[1][1]=="X")&&(arr[1][1]=="X" && arr[1][2]=="X"))||((arr[1][0]=="O" && arr[1][1]=="O")&&(arr[1][1]=="O" && arr[1][2]=="O")))
  { 
    console.log("3");
    document.getElementById("bt-4").style.color="#f94bc1de";
    document.getElementById("bt-5").style.color="#f94bc1de";
    document.getElementById("bt-6").style.color="#f94bc1de";
  }
  else if(((arr[2][0]=="X" && arr[2][1]=="X")&&(arr[2][1]=="X" && arr[2][2]=="X"))||((arr[2][0]=="O" && arr[2][1]=="O")&&(arr[2][1]=="O" && arr[2][2]=="O")))
  {  
    console.log("4");
    document.getElementById("bt-7").style.color="#f94bc1de";
    document.getElementById("bt-8").style.color="#f94bc1de";
    document.getElementById("bt-9").style.color="#f94bc1de";
  }
  else if(((arr[0][0]=="X" && arr[1][0]=="X")&&(arr[1][0]=="X" && arr[2][0]=="X"))||((arr[0][0]=="O" && arr[1][0]=="O")&&(arr[1][0]=="O" && arr[2][0]=="O")))
  {  
    console.log("5");
    document.getElementById("bt-1").style.color="#f94bc1de";
    document.getElementById("bt-4").style.color="#f94bc1de";
    document.getElementById("bt-7").style.color="#f94bc1de";
}
else if(((arr[0][1]=="X" && arr[1][1]=="X")&&(arr[1][1]=="X" && arr[2][1]=="X"))||((arr[0][1]=="O" && arr[1][1]=="O")&&(arr[1][1]=="O" && arr[2][1]=="O")))
{
  console.log(" reaching 6");
  document.getElementById("bt-2").style.color="#f94bc1de";
  document.getElementById("bt-5").style.color="#f94bc1de";
  document.getElementById("bt-8").style.color="#f94bc1de";
}

else if(((arr[0][2]=="X" && arr[1][2]=="X")&&(arr[1][2]=="X" && arr[2][2]=="X"))||((arr[0][2]=="O" && arr[1][2]=="O")&&(arr[1][2]=="O" && arr[2][2]=="O")))
{
  console.log("7");
  document.getElementById("bt-3").style.color="#f94bc1de";
  document.getElementById("bt-6").style.color="#f94bc1de";
  document.getElementById("bt-9").style.color="#f94bc1de";
}
else if(((arr[0][2]=="X" && arr[1][1]=="X") &&(arr[1][1]=="X" && arr[2][0]=="X"))||((arr[0][2]=="O" && arr[1][1]=="O"&& arr[2][0]=="O")))
{ 
  console.log("8");
  document.getElementById("bt-3").style.color="#f94bc1de";
  document.getElementById("bt-5").style.color="#f94bc1de";
  document.getElementById("bt-7").style.color="#f94bc1de";

}
}

function callwinner(winnername)
{
  /*
var abc=document.createElement("label");
abc.id="winner";
abc.innerHTML=winnername;
op=document.querySelector("#out-div");
op.appendChild(abc);
*/
document.getElementById("lbs").style.display="none";
var abc=document.createElement("h1");
abc.id="winner";
abc.innerHTML=winnername;
op=document.querySelector("body");
op.appendChild(abc);
}
