var br = document.createElement("br")
function convert1(){
	//gets the data from users
     var fromcurrency = document.getElementById("from").value
     var tocurrency = document.getElementById("to").value
     var oldamount = document.getElementById("amount").value

     //var url = 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have='+fromcurrency+'&want='+tocurrency+'&amount='+oldamount;
     var url =  'https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from='+fromcurrency+'&to='+tocurrency+'&amount='+oldamount
	 const options = {
    method: 'GET',
    headers: {
		'X-RapidAPI-Key': 'ad0c9c7bd0msh01ec56be200f01dp14e47ajsn69c552a045a5',
		'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
    }
  }; 

  fetch(url,options)
  .then(response => response.json())
  //.then(response => console.log(Object.values(response)[2].rate))
  //the get get modified 
	  //takes value from the object in server
  .then(response=>document.getElementById("output").innerHTML=(oldamount*(Object.values(response)[2].rate)+' '+tocurrency))
	  //get the data from input and convert it into output
  .then(response => document.getElementById("input").innerHTML= oldamount+' '+fromcurrency+' '+'=')
  }
