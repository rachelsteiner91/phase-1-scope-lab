// Write your solution in this file!
var customerName = 'bob'
function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer(){
    throw 'Assignment to constant variable.'
}

//function setBestCustomer() {
    //return customerName =`'not' ${customerName}`
