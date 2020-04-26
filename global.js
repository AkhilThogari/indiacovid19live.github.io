$(document).ready(function(){
$.get('https://api.covid19api.com/summary',function(data,status){
  
  $confirmed = parseInt(data.Global.TotalConfirmed);
  $deaths =parseInt(data.Global.TotalDeaths);
  
  $recovered = parseInt(data.Global.TotalRecovered);
  
  $active= $confirmed-($deaths+$recovered);
  console.log($active);
  
  $("#gconf").html($confirmed.toLocaleString("en-IN"))
  
  $("#gact").html($active.toLocaleString("en-IN"));
  
  $("#grec").html($recovered.toLocaleString("en-IN"));
  
  $("#gdea").html($deaths.toLocaleString("en-IN"));
  
  
});
});