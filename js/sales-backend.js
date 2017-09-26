var dailySchedule = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']


var firstAndPike = {
  storeName: '1st and Pike',
  minCustomersPerHr: 23,
  maxCustomersPerHr: 65,
  avgCookiesPerCustomer:	6.3,
  rawCookieInfoWithTime: [],
  customersPerHr: 0,
  cookiesPerHr: [],
  dailyCookieTotal: 0,

getCustomersPerHour: function() {
  return Math.random() * this.maxCustomersPerHr - this.minCustomersPerHr + 1 + this.minCustomersPerHr;
},

getCookiesTotal: function () {
    for (var i = 0; i <this.cookiesPerHr.length; i++) {
    this.dailyCookieTotal += this.cookiesPerHr[i];

}
    return this.dailyCookieTotal;
// console.log(this.cookiesPerHr);
// console.log(this.dailyCookieTotal);
},

render: function() {
  var firstAndPikeUl = document.getElementById('firstAndPike');
  var dailyCookieTotal = this.dailyCookieTotal;
  var totalLi = document.createElement('li');
  totalLi.textContent = 'Total: ' + dailyCookieTotal + '.'
    for (var i = 0; i < dailySchedule.length; i++) {
      var cookiesPerHr = Math.floor(this.getCustomersPerHour() * this.avgCookiesPerCustomer);
        var liEl = document.createElement('li');
        liEl.textContent = dailySchedule[i] + ': ' + cookiesPerHr + ' cookies';
        firstAndPikeUl.appendChild(liEl);
        // this.rawCookieInfoWithTime.push(dailySchedule[i], cookiesPerHr);
        this.cookiesPerHr.push(cookiesPerHr);

}

},

  renderTotal: function() {
    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total: ' + this.getCookiesTotal() + ' cookies.';
    var firstAndPikeUl = document.getElementById('firstAndPikeTotal');
    firstAndPikeUl.appendChild(totalLi);
    console.log(this.getCookiesTotal);

  },


}
firstAndPike.getCustomersPerHour();
firstAndPike.render();
firstAndPike.renderTotal();
firstAndPike.getCookiesTotal();



// seaTacAirport	3	24	1.2
//
// seattleCenter	11	38	3.7
//
// capitolHill	20	38	2.3
//
// alki	2	16	4.6
