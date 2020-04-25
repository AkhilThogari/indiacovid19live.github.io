$(document).ready(function(){
  $.getJSON("https://api.covid19india.org/data.json",function (data,status)
  {
     
     $("#conf").html(data.statewise[0].confirmed);
     $("#act").html(data.statewise[0].active);
     $("#rec").html(data.statewise[0].recovered);
     $("#dea").html(data.statewise[0].deaths);
     
     var length = data.statewise.length;
     console.log(data.statewise);
     
     for(i=1; i<length; i++){
       var tag = "<tr><th>" + data.statewise[i].state + "</th><td>" + data.statewise[i].confirmed + "</td><td>" + data.statewise[i].active + "</td><td >" + data.statewise[i].recovered + "</td><td>" + data.statewise[i].deaths + "</td></tr>";
       $("#tbody").append(tag);
       
       
     }
  });
 
});
