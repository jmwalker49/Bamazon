var mysql = require("mysql");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "UNCCrugby_49",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

connection.query("SELECT * FROM products", function(err, res) {
   console.log("Welcome to BAMAZON, See our products below")
  for (var i = 0; i < res.length; i++) {
    console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + "$" + res[i].price + " | " + res[i].stock_quantity);
  }
  console.log("-----------------------------------");
});


var inquirer = require("inquirer");
// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.
inquirer.prompt([
  {
    name: "id",
    message: "What is the id of the product you would like to buy?"
  }, {
    name: "quantity",
    message: "How many of this item would you like to purchase?"
  }
]).then(function(answers) {
       var purchaseID = answers.id;
       var purchaseQuantity = answers.quantity;   
      connection.query("SELECT * FROM products", function(err, res) {

        if(purchaseQuantity <= res[(answers.id - 1)].stock_quantity){
     console.log("-----------------------------------");
     console.log("You would like to purchase " + answers.quantity + " " + res[(answers.id - 1)].product_name);
     console.log("-----------------------------------");
     console.log("connected as id " + connection.threadId);

     connection.query("UPDATE products SET ? WHERE ?", [{
  stock_quantity: (res[(answers.id - 1)].stock_quantity) - purchaseQuantity
}, {
  item_id: purchaseID
}], function(err, res) {});

console.log("Your Order of " + purchaseQuantity + " " + res[(answers.id - 1)].product_name + " has been processed at a cost of $" + res[(answers.id - 1)].price * purchaseQuantity);
     
  
    } else {
      console.log("Insufficient Quantity")
    };
});
});  


