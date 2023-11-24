const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

const remove = (par) => {
    let indexNo = shoppingCart.indexOf("Honey");

    (shoppingCart.includes(par))
    ? shoppingCart.splice(indexNo, 1)
    : console.log("item not found");

    console.log(`${par} has been removed!`, shoppingCart);
}

const modify = (par, replace) => {
    //par is the old item to be replace, replace is the new guy
    if (!shoppingCart.includes(par)) { 
        console.log("Item not founded!");
    }
    else {
        let index = shoppingCart.indexOf(par);
        shoppingCart.splice(index, 1, replace);

        console.log(`${par} has been replaced by ${replace}`, shoppingCart);
    }
}

//1. add 'Meat' in the beginning of your shopping cart if it has not been already added
(!shoppingCart.includes("Meat")) && shoppingCart.unshift("Meat");

console.log("Meat has been added!", shoppingCart);

//2. add Sugar at the end of you shopping cart if it has not been already added
(!shoppingCart.includes("Sugar")) && shoppingCart.push("Sugar");

console.log("Sugar has been added!", shoppingCart);

//3. remove 'Honey' if you are allergic to honey
remove("Honey");

//4. modify Tea to 'Green Tea'
modify('Tea', 'Green Tea');