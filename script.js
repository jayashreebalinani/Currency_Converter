/////var br = document.createElement("br")
function convert1(){
     var fromcurrency = document.getElementById("from").value
     var tocurrency = document.getElementById("to").value
     var oldamount = document.getElementById("amount").value
     
     var url = 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have='+fromcurrency+'&want='+tocurrency+'&amount='+oldamount;
     const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd98a809651msha857f5479c53644p1e168djsn833e37ebc1df',
      'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
    }
  }; 

  fetch(url,options)
  .then(response => response.json())
  //.then(response => console.log(Object.values(response)))
  .then(response=>document.getElementById("output").innerHTML=(Object.values(response)[0])+' '+tocurrency)
  .then(response => document.getElementById("input").innerHTML= oldamount+' '+fromcurrency+' '+'=')
  
  }
