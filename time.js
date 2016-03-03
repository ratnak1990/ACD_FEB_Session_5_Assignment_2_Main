function showTime(){
 var date= new Date();
 var hrs=date.getHours();
 var minutes=date.getMinutes();
 console.log(hrs +":"+minutes );
 return (hrs +":"+ minutes);
};
document.getElementById("time").innerHTML="Current Time is " +  window.showTime();
//showTime();
