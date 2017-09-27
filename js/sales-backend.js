'use strict';

var dailySchedule = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

var allStores = [];
var allStoresTotal = [];
var totalTotal = 0;
var allStoresTable = document.getElementById('allStores')

function Cookiestore (storeName, minCustomersPerHr, maxCustomersPerHr, avgCookiesPerCustomer) {
  this.storeName = storeName;
  this.minCustomersPerHr = minCustomersPerHr;
  this.maxCustomersPerHr = maxCustomersPerHr;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPerHr = [];
  this.hourlyCookieTotal = [];
  this.dailyCookieTotal = 0;
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
};

Cookiestore.prototype.getDailyTotalCookies = function () {
  for (i = 0; i < this.cookiesPerHr.length; i++) {
  this.dailyCookieTotal += this.cookiesPerHr[i];
  }
};

Cookiestore.prototype.renderHeader = function () {
  var thEl = document.createElement('th');
  var trEl = document.createElement('tr');
  thEl.textContent = 'Store';
  trEl.appendChild(thEl);
  for (var i = 0; i <= dailySchedule.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = dailySchedule[i];
    trEl.appendChild(thEl);
    allStoresTable.appendChild(trEl);
  }
  thEl.textContent = 'Daily Total';
  trEl.appendChild(thEl);
};

Cookiestore.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  var thEl = document.createElement('th');
  tdEl.textContent = this.storeName;
  trEl.appendChild(tdEl);

  for (var i in this.cookiesPerHr) {
  tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesPerHr[i] + ' cookies';
  trEl.appendChild(tdEl);
}

  for (i in allStores) {
    allStores[i].getDailyTotalCookies();
  };
  thEl = document.createElement('th');
  thEl.textContent = Math.floor(this.dailyCookieTotal);
  trEl.appendChild(thEl);
  allStoresTable.appendChild(trEl);
};

function allStoresColumnTotal() {
  for (var i = 0; i < dailySchedule.length; i++) {
    var  allStoresColumnTotal = 0;
    for (var k = 0; k < allStores.length; k++) {
      allStoresColumnTotal += allStores[k].cookiesPerHr[i];
    }
    allStoresTotal.push(allStoresColumnTotal)
  }
  for (var m = 0; m < allStoresTotal.length; m++) {
      totalTotal += allStoresTotal[m];
      console.log(totalTotal);
    }
};

function renderAllTotals() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals';
  trEl.appendChild(thEl);
  allStoresTable.appendChild(trEl);

  for (var i in dailySchedule) {
  thEl = document.createElement('th');
  thEl.textContent = allStoresTotal[i];
  trEl.appendChild(thEl);
  allStoresTable.appendChild(trEl);
  }
  var thEl = document.createElement('th');
  thEl.textContent = 'Total for All Stores\n' + totalTotal;
  trEl.appendChild(thEl);
  allStoresTable.appendChild(trEl);
};

var firstAndPike = new Cookiestore('First and Pike', 23, 65, 6.3);
var alki = new Cookiestore('Alki', 2, 16, 4.6);
var seaTacAirport = new Cookiestore('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Cookiestore('Seattle Center', 11, 38, 3.7);
var capitolHill = new Cookiestore('Capitol Hill', 20, 38, 2.3);

Cookiestore.prototype.renderHeader();

for (var i in allStores) {
  allStores[i].getCookiesPerHour();
  allStores[i].render();
}
allStoresColumnTotal();
renderAllTotals();
