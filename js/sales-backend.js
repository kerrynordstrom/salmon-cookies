var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']


var firstAndPike = {
  storeName: '1st and Pike',
  minCustomersPerHr: 23,
  maxCustomersPerHr: 65,
  avgCookiesPerCustomer:	6.3,
  rawCookieInfo: [],
  customersPerHr: 0,
  cookiesPerHr: 0,
  dailyCookieTotal: 0,

getCustomersPerHour: function() {
  return Math.random() * this.maxCustomersPerHr - this.minCustomersPerHr + 1 + this.minCustomersPerHr;

},
render: function() {
    for (var i = 0; i < hours.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = hours[i] + ': ' + Math.floor(this.getCustomersPerHour() * this.avgCookiesPerCustomer) + ' cookies';
        console.log(this.getCustomersPerHour() * this.avgCookiesPerCustomer)
        var firstAndPikeUl = document.getElementById('firstAndPike');
        firstAndPikeUl.appendChild(liEl);


}
}
}

firstAndPike.render();


// seaTacAirport	3	24	1.2
//
// seattleCenter	11	38	3.7
//
// capitolHill	20	38	2.3
//
// alki	2	16	4.6

firstAndPike.getCustomersPerHour();
