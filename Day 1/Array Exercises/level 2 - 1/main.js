console.log("Countries: ", countries);
console.log("Web Techs: ", webTech);

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if(countries.includes("Euthiopia")) {
    console.log("ETHIOPIA");
}
else {
    countries.push("Euthopia");
    console.log("Euthopia added: ", countries);
}

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
(webTech.includes("SASS"))
? console.log("Sass is a CSS preprocess")
: webTech.push("SASS"); 

console.log("Sass has been added: ", webTech);