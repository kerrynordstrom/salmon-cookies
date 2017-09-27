'use strict';

var dailySchedule = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

var allStores = [];
var allStoresTable = document.getElementById('allStores')

function Cookiestore (storeName, minCustomersPerHr, maxCustomersPerHr, avgCookiesPerCustomer) {
  this.storeName = storeName;
  this.minCustomersPerHr = minCustomersPerHr;
  this.maxCustomersPerHr = maxCustomersPerHr;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPerHr = [];
  this.hourlyCookieTotal = [];
  this.dailyCookieTotal = [];
  allStores.push(this);
}


Cookiestore.prototype.getCustomersPerHour = function() {
  return Math.random() * this.maxCustomersPerHr - this.minCustomersPerHr + 1 + this.minCustomersPerHr;
};

Cookiestore.prototype.getCookiesPerHour = function () {
  for (var i = 0; i < dailySchedule.length; i++) {
    var hourlyCookiesSold = this.getCustomersPerHour();
     this.cookiesPerHr.push (Math.floor(hourlyCookiesSold * this.avgCookiesPerCustomer));
  }
}



Cookiestore.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');

  tdEl.textContent = this.storeName;
  trEl.appendChild(tdEl);

  for (var i in this.cookiesPerHr) {
  tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesPerHr[i] + ' cookies';
  trEl.appendChild(tdEl);
}



allStoresTable.appendChild(trEl);
};

Cookiestore.prototype.renderHeader = function () {
  var thEl = document.createElement('th');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');

  for (var i = 0; i < dailySchedule.length; i++) {
    thEl = document.createElement('th');
    tdEl = document.createElement('td');
    tdEl.textContent = dailySchedule[i];
    thEl.appendChild(tdEl);
  }
};

var firstAndPike = new Cookiestore('First and Pike', 23, 65, 6.3)
  firstAndPike.getCookiesPerHour();
  firstAndPike.render();
  firstAndPike.renderHeader();
var seaTacAirport = new Cookiestore('SeaTac Airport', 3, 24, 1.2)
  seaTacAirport.getCookiesPerHour();
  seaTacAirport.render();
  seaTacAirport.renderHeader();
var seattleCenter = new Cookiestore('Seattle Center', 11, 38, 3.7)
  seattleCenter.getCookiesPerHour();
  seattleCenter.render();
  seattleCenter.renderHeader();
var capitolHill = new Cookiestore('Capitol Hill', 20, 38, 2.3)
  capitolHill.getCookiesPerHour();
  capitolHill.render();
  capitolHill.renderHeader();
var alki = new Cookiestore('Alki', 2, 16, 4.6)
  alki.getCookiesPerHour();
  alki.render();
  alki.renderHeader();



// function allStoresRows() {
//   for (var i = 0; i < allStores.length; i++) {
//     Cookiestore.prototype.render();
//     Cookiestore.prototype.getCustomersPerHour();
//   }
// }
