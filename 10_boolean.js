 
 //Possono avere solo due valori: true o false
 //Questi valori sono case sensitive

 //I seguenti valori sono sempre false:
 //false, null, undefined, 0, NaN e stringa vuota

 //tutti gli altri valori sono 'veri' in una cpondizione booleana

 //Anche new Boolean(false) è vero perchè è un oggetto
 
 
 
 var mioValore = false;
 var mioValore2 = true;

 //ritorna false
console.log(mioValore);

//true
console.log(mioValore2);

//ritorna false per la valenza dell'equazione
var bool = Boolean(6>7);
console.log(bool);

//dichiaro un oggetto boolObject e ritorna 'true'
var boolObject1 = new Boolean("Hello");

var boolObject2 = Boolean("Hello");

//ritorna true perchè compara solo i valori
console.log(boolObject1 == boolObject2);

//ritorna false perchè compara il tipo, e boolObject2 è di tipo primitivo
console.log(boolObject1 === boolObject2);

//negando due volte la variabile FACCIO IL CAST a true o false o per trasformare un valore in stringa
var valoreInt = 12;
varInt = !!valoreInt;
console.log("valore di ValoreInt="+varInt);

//I seguenti valori sono false

//0, ''. "", null, undefined
var test = new Boolean(0);
console.log("test="+test);  //test=false
console.log(typeof(test));  //*object

if (test) {
    console.log("Test è vero")
}

if (!!test) {
    console.log("Test è vero")
}

//ritorna false perchè test è primitivo
if (test.valueOf()) {
    console.log("Test è vero")
}


