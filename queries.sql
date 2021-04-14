-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT
p.ProductName,
c.CategoryName
FROM product as p
JOIN category as c ON p.CategoryID = c.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT
Id,
ShipName,
OrderDate
FROM "order"
WHERE OrderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT p.productname,
o.quantity
FROM orderDetail as o
JOIN product as p
ON p.id = o.productid
WHERE orderId = 10251;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT
o.id,
c.companyname,
e.lastname
FROM "Order" as o
JOIN Employee as e ON o.EmployeeId = e.Id
JOIN customer as c ON o.CustomerID = c.Id;

-- Find the number of shipments by each shipper.
SELECT
s.shipperID,
s.ShipperName,
count(s.shipperid) AS Shipments
FROM shippers AS s
JOIN orders AS o
ON s.shipperid = o.shipperid
GROUP BY s.shipperid;

-- Find the top 5 best performing employees measured in number of orders.
SELECT
e.employeeID,
count(o.employeeID) AS Sales
FROM orders AS o
JOIN employees AS e
ON e.employeeid = o.employeeid
GROUP BY e.employeeid
ORDER BY Sales DESC
LIMIT 5;

-- Find the top 5 best performing employees measured in revenue.

-- Find the category that brings in the least revenue.

-- Find the customer country with the most orders.

-- Find the shipper that moves the most cheese measured in units.
