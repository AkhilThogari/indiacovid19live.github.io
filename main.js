$(document).ready(function(){
  $.getJSON("https://api.covid19india.org/data.json",function (data,status)
  {
     //result=number.toLocaleString(undefine

     
     
     
     $("#conf").html(parseInt(data.statewise[0].confirmed).toLocaleString("en-IN"));
     $("#act").html(parseInt(data.statewise[0].active).toLocaleString("en-IN"));
     $("#rec").html(parseInt(data.statewise[0].recovered).toLocaleString("en-IN"));
     $("#dea").html(parseInt(data.statewise[0].deaths).toLocaleString("en-IN"));
     $("#span").html("Last Update:- "+data.statewise[0].lastupdatedtime)
     
     var length = data.statewise.length;
     console.log(data);
     
     for(i=1; i<length; i++){
       var tag = "<tr><th>" + data.statewise[i].state+ "</th><td>" + parseInt(data.statewise[i].confirmed).toLocaleString("en-IN") + "</td><td>" + parseInt(data.statewise[i].active).toLocaleString("en-IN") + "</td><td >" + parseInt(data.statewise[i].recovered).toLocaleString("en-IN") + "</td><td>" + data.statewise[i].deaths + "</td></tr>";
       $("#tbody").append(tag);
      }
      
  });
  
  
});