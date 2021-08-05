var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data= JSON.parse(this.response);
   console.log(data);
    var result = data.filter((element)=>element.region==='Asia');
   console.log(result);
   var result1 = data.filter((element)=>element.population<200000);
   console.log(result1);
   var result2 = data.filter((element)=>{
       for(let i in element.currencies){
           if(element.currencies[i].code==='USD'){
               return true;
           }
       }
   });
   console.log(result2);

var pop =[]
var abc=data.filter((element)=>{
    for(let i in element.population){
        pop[i]=element.population[i].code
    }
});
console.log(pop);
var totpop = data.reduce((acc,ele)=>acc + ele.population,0);
console.log(totpop);
}