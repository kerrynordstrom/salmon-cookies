var dailySchedule = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']


var firstAndPike = {
  storeName: '1st and Pike',
  minCustomersPerHr: 23,
  maxCustomersPerHr: 65,
  avgCookiesPerCustomer:	6.3,
  customersPerHr: 0,
  cookiesPerHr: [],
  dailyCookieTotal: 0,

  getCustomersPerHour: function() {
    return Math.random() * this.maxCustomersPerHr - this.minCustomersPerHr + 1 + this.minCustomersPerHr;
  },

  getCookiesPerHour: function () {
    for (var i = 0; i < dailySchedule.length; i++) {
      var cookiesPerHr = Math.floor(this.getCustomersPerHour() * this.avgCookiesPerCustomer);
    this.cookiesPerHr.push(cookiesPerHr);
    }
  },

  getCookiesTotal: function () {
    for (var i in this.cookiesPerHr) {
      this.dailyCookieTotal += this.cookiesPerHr[i];
  }
    return this.dailyCookieTotal;
  },

  render: function() {
    var firstAndPikeUl = document.getElementById('firstAndPike');
    var dailyCookieTotal = this.dailyCookieTotal;
    for (var i in this.cookiesPerHr) {
      var liEl = document.createElement('li');
      liEl.textContent = dailySchedule[i] + ': ' + this.cookiesPerHr[i] + ' cookies';
      firstAndPikeUl.appendChild(liEl);
    }
  },

  renderTotal: function() {
    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total: ' + this.getCookiesTotal() + ' cookies';
    var firstAndPikeUl = document.getElementById('firstAndPikeTotal');
    firstAndPikeUl.appendChild(totalLi);
  },
}

firstAndPike.getCookiesPerHour();
firstAndPike.getCookiesTotal();
firstAndPike.render();
firstAndPike.renderTotal();


// seaTacAirport	3	24	1.2

var seaTacAirport = {
  storeName: 'SeaTac Airport',
  minCustomersPerHr: 3,
  maxCustomersPerHr: 24,
  avgCookiesPerCustomer:	1.2,
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
  },

  render: function() {
    var seaTacAirportUl = document.getElementById('seaTacAirport');
    var dailyCookieTotal = this.dailyCookieTotal;
    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total: ' + dailyCookieTotal + '.'
    for (var i = 0; i < dailySchedule.length; i++) {
      var cookiesPerHr = Math.floor(this.getCustomersPerHour() * this.avgCookiesPerCustomer);
      var liEl = document.createElement('li');
      liEl.textContent = dailySchedule[i] + ': ' + cookiesPerHr + ' cookies';
      seaTacAirportUl.appendChild(liEl);
      this.rawCookieInfoWithTime.push(dailySchedule[i], cookiesPerHr);
      this.cookiesPerHr.push(cookiesPerHr);
    }

  },

  renderTotal: function() {
    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total: ' + this.getCookiesTotal() + ' cookies';
    var seaTacAirportUl = document.getElementById('seaTacAirportTotal');
    seaTacAirportUl.appendChild(totalLi);


  },

}

seaTacAirport.getCustomersPerHour();
seaTacAirport.render();
seaTacAirport.renderTotal();
seaTacAirport.getCookiesTotal();

// seattleCenter	11	38	3.7

var seattleCenter = {
  storeName: 'Seattle Center',
  minCustomersPerHr: 11,
  maxCustomersPerHr: 38,
  avgCookiesPerCustomer:	3.7,
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
  },

  render: function() {
    var seattleCenterUl = document.getElementById('seattleCenter');
    var dailyCookieTotal = this.dailyCookieTotal;
    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total: ' + dailyCookieTotal + '.'
    for (var i = 0; i < dailySchedule.length; i++) {
      var cookiesPerHr = Math.floor(this.getCustomersPerHour() * this.avgCookiesPerCustomer);
      var liEl = document.createElement('li');
      liEl.textContent = dailySchedule[i] + ': ' + cookiesPerHr + ' cookies';
      seattleCenterUl.appendChild(liEl);
      this.rawCookieInfoWithTime.push(dailySchedule[i], cookiesPerHr);
      this.cookiesPerHr.push(cookiesPerHr);
    }

  },

  renderTotal: function() {
    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total: ' + this.getCookiesTotal() + ' cookies';
    var seattleCenterUl = document.getElementById('seattleCenterTotal');
    seattleCenterUl.appendChild(totalLi);

  },

}

seattleCenter.getCustomersPerHour();
seattleCenter.render();
seattleCenter.renderTotal();
seattleCenter.getCookiesTotal();

// capitolHill	20	38	2.3

var capitolHill = {
  storeName: 'Capitol Hill',
  minCustomersPerHr: 20,
  maxCustomersPerHr: 38,
  avgCookiesPerCustomer:	2.3,
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
  },

  render: function() {
    var capitolHillUl = document.getElementById('capitolHill');
    var dailyCookieTotal = this.dailyCookieTotal;
    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total: ' + dailyCookieTotal + '.'
    for (var i = 0; i < dailySchedule.length; i++) {
      var cookiesPerHr = Math.floor(this.getCustomersPerHour() * this.avgCookiesPerCustomer);
      var liEl = document.createElement('li');
      liEl.textContent = dailySchedule[i] + ': ' + cookiesPerHr + ' cookies';
      capitolHillUl.appendChild(liEl);
      this.rawCookieInfoWithTime.push(dailySchedule[i], cookiesPerHr);
      this.cookiesPerHr.push(cookiesPerHr);
    }

  },

  renderTotal: function() {
    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total: ' + this.getCookiesTotal() + ' cookies';
    var capitolHillUl = document.getElementById('capitolHillTotal');
    capitolHillUl.appendChild(totalLi);

  },

}

capitolHill.getCustomersPerHour();
capitolHill.render();
capitolHill.renderTotal();
capitolHill.getCookiesTotal();

// alki	2	16	4.6

var alki = {
  storeName: 'Alki',
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
  },

  render: function() {
    var alkiUl = document.getElementById('alki');
    var dailyCookieTotal = this.dailyCookieTotal;
    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total: ' + dailyCookieTotal + '.'
    for (var i = 0; i < dailySchedule.length; i++) {
      var cookiesPerHr = Math.floor(this.getCustomersPerHour() * this.avgCookiesPerCustomer);
      var liEl = document.createElement('li');
      liEl.textContent = dailySchedule[i] + ': ' + cookiesPerHr + ' cookies';
      alkiUl.appendChild(liEl);
      this.rawCookieInfoWithTime.push(dailySchedule[i], cookiesPerHr);
      this.cookiesPerHr.push(cookiesPerHr);
    }

  },

  renderTotal: function() {
    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total: ' + this.getCookiesTotal() + ' cookies';
    var alkiUl = document.getElementById('alkiTotal');
    alkiUl.appendChild(totalLi);

  },

}

alki.getCustomersPerHour();
alki.render();
alki.renderTotal();
alki.getCookiesTotal();
