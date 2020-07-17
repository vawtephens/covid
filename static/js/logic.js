var base_url = "https://knowi.com/api/data/ipE4xJhLBkn8H8jisFisAdHKvepFR5I4bGzRySZ2aaXlJgie?entityName=Raw%20County%20level%20Data&exportFormat=json&c9SqlFilter=select%20*%20where%20State%20like%20Indiana"
var d = [[],[]]
var c = [[],[]]



d3.json(base_url, function(response){
    console.log(response);

    response.forEach( x => {
        if (x.County == "Boone County" && x.Type == "Deaths") {
            d[0].push(new Date(x.Date));
            d[1].push(x.values);
        }
        else if (x.County == "Boone County" && x.Type == "Confirmed") {
            c[0].push(new Date(x.Date));
            c[1].push(x.values);
        }




    })
    console.log(d);
    console.log(c);
});

