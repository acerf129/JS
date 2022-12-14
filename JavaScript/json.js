var remoteOrder = {
    "date": "11/20/2013",
    "customerId": 116,
    "items": [
      {
        "product": "Surface 4 Pro",
        "unitprice": "799",
        "amount": 1
      },
      {
        "product": "Type Cover 4",
        "unitprice": "129",
        "amount": 1
      },
      {
        "product": "Docking station",
        "unitprice": "199",
        "amount": 1
      }
    ]
  }
  var orderString = JSON.stringify(remoteOrder);
  // Assume the order is pushed through the network
  var order = JSON.parse(orderString);
  console.log("Date: " + order.date);
  for (var i = 0; i < order.items.length; i++) {
    console.log("Product: "
      + order.items[i].product);
    console.log("Unit price: "
      + order.items[i].unitprice);
    console.log("Amount: "
      + order.items[i].amount);
  }