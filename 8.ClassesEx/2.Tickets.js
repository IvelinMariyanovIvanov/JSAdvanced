function solve(arr, sortStategy){

    let allTicketsCollection = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    arr.forEach(ticket => {
        ticket = ticket.split('|');
        let description = ticket[0];
        let price = Number(ticket[1]);
        let status = ticket[2];
        
        let currentTicket = new Ticket(description, price, status);

        allTicketsCollection.push(currentTicket);
    });

    return allTicketsCollection.sort((a,b) => {
        if(a[sortStategy] < b[sortStategy]){
            return -1;
        }else if(a[sortStategy] > b[sortStategy]){
           return 1;
        }
        else {
            return 0;
        }
    });

}

let arr = solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
);

console.log(arr);

