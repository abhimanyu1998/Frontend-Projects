function myMove() {
    document.getElementById("list1").style.display="none";
    document.getElementById("list2").style.display="none";
    document.getElementById("list3-1").style.display="none";
    document.getElementById("list3-2").style.display="none";
    document.getElementById("list3-3").style.display="none";
    document.getElementById("list4").style.display="none";
    document.getElementById("list5").style.display="none";
    document.getElementById("music-playbutton").style.display="none";

      var elem = document.getElementById("div1");
      var elem2= document.getElementById("div2");
      var elem3= document.getElementById("div3");
      var elem4= document.getElementById("div4");
        elem.style.display="inline-block";
        elem2.style.display="inline-block";
        elem3.style.display="inline-block";
        elem4.style.display="inline-block";
           
         
      var pos = 300;
      var pos2= 560;
      var pos4=790;
      var id = setInterval(frame, 3);
      function frame() {
        if (pos == 10) {
          clearInterval(id);
        } else {
          pos--; 
          pos2--;
          pos4--;
          elem.style.top = pos + "px";
          elem2.style.top = pos + "px";
          elem3.style.top = pos2 + "px";
          elem4.style.top = pos4 + "px";
          
          elem.style.transform = "rotateY(180deg)";
          elem.style.transition="1s ease-in-out";
          
          elem2.style.transform = "rotateY(360deg)";
         elem2.style.transition="1s ease-in-out";
         
          elem3.style.transform = "rotateY(360deg)";
          elem3.style.transition="1s ease-in-out";
          
          elem4.style.transform = "rotateY(360deg)";
          elem4.style.transition="1s ease-in-out";
         
          elem2.style.height=elem2.style.height+250+"px";
          elem.style.height=elem.style.height+250+"px";
          elem3.style.height=elem3.style.height+220+"px";
          elem4.style.height=elem4.style.height+220+"px";
        }
      }
      document.getElementById("myAudio").play();
    }
var x=1;
function show(name)
{
 var x=document.getElementById(name);
 if(x.style.display=='none')
 {
  x.style.display='inline-block';
 }
 else
 {
  x.style.display='none';
 } 
}
function play_pause(name,name2)
{
  
  var x=document.getElementById(name);
  var y=document.getElementById(name2);
 

  if(x.style.display=='none')
  { 
   x.style.display='inline-block';
   y.style.display='none';
   document.getElementById("music-playbutton").style.display="none";
  }
  else
  {
   x.style.display='none';
   y.style.display='inline-block';
   document.getElementById("music-playbutton").style.display="block";

  } 
}

function show_play(id,name,check)
{
  var x=document.getElementById(id);
  var y=document.getElementById(name);
  var z=document.getElementById(check);
  if(z.style.display=='')
  {
    x.style.opacity=".6";
  y.style.display="inline-block";
  }
  
}
function hide_play(id,name,check)
{
  var x=document.getElementById(id);
  var y=document.getElementById(name);
  var exe=document.getElementById('play-pause-1btn');
  var z=document.getElementById(check);
  if( z.style.display=="none")
  {
  
    y.style.display="inline-block";
    x.style.opacity=".7";
    
  }
  else
  {
    exe.style.display="none";
    x.style.opacity="1";
    y.style.display="none";

  }
  
}