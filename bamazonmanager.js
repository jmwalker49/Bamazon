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

// connection.query("SELECT * FROM products", function(err, res) {
//    console.log("Welcome to BAMAZON, See our products below")
//   for (var i = 0; i < res.length; i++) {
//     console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + "$" + res[i].price + " | " + res[i].stock_quantity);
//   }
//   console.log("-----------------------------------");
// });


var inquirer = require("inquirer");
// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.
inquirer.prompt([
  {
    type: "list",
    name: "managerChoice",
    message: "Welcome Bamazon manager.  What would you like to do?",
    choices: ["View all products for sale", "View low inventory", "Add to inventory", "Add a new product"]
  }
]).then(function(answers) {
  console.log(answers.managerChoice);
    switch(answers.managerChoice) {
    case "View all products for sale":
        connection.query("SELECT * FROM products", function(err, res) {
         console.log("Welcome BAMAZON manager.  Here are all the products we currently sell")
          for (var i = 0; i < res.length; i++) {
            console.log(res[i].product_name);
             }
            console.log("-----------------------------------");
   });
        break;
    case "View low inventory":
        connection.query("SELECT * FROM products", function(err, res) {
         console.log("Welcome BAMAZON manager.  Here are all the products with low inventory")
          for (var i = 0; i < res.length; i++) {
            if (res[i].stock_quantity <= 5){
              console.log(res[i].product_name + " has a low inventory of " + res[i].stock_quantity + " units" )
            } else {
              // console.log(res[i].product_name + " is stocked sufficently")

            };
     
             };
            console.log("-----------------------------------");
   });
        break;
    case "Add to inventory":
    connection.query("SELECT * FROM products", function(err, res) {
   console.log("Welcome to BAMAZON, See our products below")
  for (var i = 0; i < res.length; i++) {
    console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + "$" + res[i].price + " | " + res[i].stock_quantity);
  }
  console.log("-----------------------------------");
});


    inquirer.prompt([
  {
    name: "id",
    message: "What is the id of the product you would like to update?"
  }, {
    name: "quantity",
    message: "How many of this item would you like to add to inventory?"
  }
]).then(function(answer) {

   
      connection.query("SELECT * FROM products", function(err, res) {
    var updateQuantity = (res[(answer.id - 1)].stock_quantity) + answer.quantity
    console.log(updateQuantity);

     connection.query("UPDATE products SET ? WHERE ?", [{
  stock_quantity: updateQuantity
}, {
  item_id: answer.id
}], function(err, res) {});

console.log(res[(answer.id - 1)].product_name + " inventory has been updated by " + answer.quantity + " units");
     
});
});  


      
        break;
    case "Add a new product":
        console.log("working4");
        break;
    default:
        console.log("default");
}






});  


