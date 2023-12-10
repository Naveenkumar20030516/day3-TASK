
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    for(var i=0;i<res.length;i++){
    // console.log((res[i].flags["png"]));    
    console.log("CountryName:"+(res[i].name["common"])+" , "+"Region:"+(res[i].region)+" , "+"SubRegion:"+(res[i].subregion)+" , "+"Populations:"+(res[i].population)+" , "+"Flags:"+(res[i].flags["png"]));
    }
};
//1.print all country flags
//2.Print all country name, region, subregion and populations.