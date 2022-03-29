

function getMonth(data1) {

    //var day = new Date(Date.now());
    //return day.getDate()

    var data = data1.toString()

    var month = data.slice(-2)
    console.log(month)
}

getMonth('2019-03')

const subscription = new Object();
subscription.id = 1234;
subscription.type = 'active';
subscription.cost = 19.99;

function dailyCost(subscription) {
    return subscription.cost/30;    

//var cost = subscription.id.toString();
//return cost
}

//console.log(dailyCost(subscription));


const customers = [
    {id:1, fname:'Courtland', lname:'Griffin', subscription:1 }, {id:2, fname:'Danica', lname:'Aniciete', subscription:2}, {id:3, fname:'Gaby', lname:'Pacurar', subscription: 3}
, {id:4, fname:'Camille', lname:'Griffin', subscription:3}]

let type = customers[2]['subscription']

console.log(type)