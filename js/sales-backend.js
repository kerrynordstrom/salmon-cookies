console.log('hello, world');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']


  function customersPH(minCustomersPerHr, maxCustomersPerHr) {
  return Math.floor(Math.random() * maxCustomersPerHr - minCustomersPerHr + 1) + minCustomersPerHr;
  };

var firstAndPike = {
  storeName: '1st and Pike',
  minCustomersPerHr: 23,
  maxCustomersPerHr: 65,
  avgCookiesPerCustomer:	6.3,
  customersPerHr: {
  render: function() {
      for (var i = 0; i < hours.length; i++) {
          var liEl = document.createElement('li');
          liEl.textContent = hours[i] + " " + customersPH(23, 65);
          console.log(customersPH(23, 65));
          var firstAndPikeUl = document.getElementById('firstAndPike');
          firstAndPikeUl.appendChild(liEl);
        };
  }
},
  cookiesPerHr: 0,
  dailyCookieTotal: 0
}


firstAndPike.customersPerHr.render();


// seaTacAirport	3	24	1.2
//
// seattleCenter	11	38	3.7
//
// capitolHill	20	38	2.3
//
// alki	2	16	4.6
