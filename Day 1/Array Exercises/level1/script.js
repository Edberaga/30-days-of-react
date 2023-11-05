const array = ['one','two','three','four','five',] //1 and 2
console.log("Length: ", array.length); //3

//4. Get the first item, the middle item and the last item of the array
const first = array[0];
const average = (num) => {
    let result = Math.floor(num / 2);
    if(num % 2) {
        return result;
    }
    else {
        return result - 1
    }
}

const middle = array[average(array.length)];
const last = array[array.length - 1];

console.log(`First: ${first}, Middle: ${middle}, Last: ${last} `);

//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['string', 'string with number 100', 100, 66.6, true, false];
console.log(mixedDataTypes);

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon'];

//7.Print the array using console.log()
console.log(itCompanies);

//8. Print the number of companies in the array
console.log(itCompanies.length);

//9. Print the first company, middle and last company
const firstComp = itCompanies[0];
const middleComp = itCompanies[average(itCompanies.length)];
const lastComp = itCompanies[itCompanies.length - 1];
console.log(`First Company: ${firstComp}, Middle Company: ${middleComp}, Last Company: ${lastComp} `);

//10. Print out each company
for(i = 0; i < itCompanies.length; i++) {
    console.log("print: ", itCompanies[i]);
}

//11. Change each company name to uppercase one by one and print them out
for(i = 0; i < itCompanies.length; i++) {
    console.log("Upper case: ", itCompanies[i].toUpperCase());
}

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
var sentence = '';
for(i = 0; i < itCompanies.length - 1; i++) {
    sentence += `${itCompanies[i]} `;
}
console.log(sentence + 'and ' + lastComp + 'are big IT companies.');

//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const isExist = (par) => {
    let name = itCompanies.includes(par);
    if(name == true) {
        return par;
    }
    else {
        return "a company is not found";
    }
}

console.log(isExist("Facebook"));
console.log(isExist("Bank"));

//14. Filter out companies which have more than one 'o' without the filter method
var itHasOresult = '';

for(i = 0; i < itCompanies.length; i++) {
    if(itCompanies[i].includes('o')) {
        itHasOresult += `${itCompanies[i]} `;
    }
}
console.log("Companies that has o: ", itHasOresult);

//15. Sort the array using sort() method
console.log("Sorted: ", itCompanies.sort());

//16. Reverse the array using reverse() method
console.log("Sort Reversed: ", itCompanies.reverse());

//17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 2));

//18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length - 1));

//19. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(average(itCompanies.length)));

//20. Remove the first IT company from the array
console.log("Remove: ", itCompanies.shift());
console.log("Current Array:", itCompanies);

//21. Remove the middle IT company or companies from the array
console.log("Remove: ", itCompanies.splice(average(itCompanies.length), 1));
console.log("Current Array:", itCompanies);

//22. Remove the last IT company from the array
console.log("Remove: ", itCompanies.splice(itCompanies.length - 1, 1));
console.log("Current Array:", itCompanies);

//23. Remove all IT companies
console.log("Remove All: ", itCompanies.splice());
console.log("Current Array:", itCompanies);