# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

> `SELECT Products.ProductName, Categories.CategoryName 
FROM Products  
JOIN Categories 
ON Products.CategoryID = Categories.CategoryID 
LIMIT 76`

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
> `SELECT Orders.OrderID, Orders.OrderDate, Shippers.ShipperName
FROM ORDERS  
JOIN Shippers
ON Orders.ShipperID =  Shippers.ShipperID
WHERE Orders.OrderDate < '1997-09-01'
LIMIT 161`

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

> `SELECT Products.ProductName, OrderDetails.Quantity FROM OrderDetails JOIN
Products ON OrderDetails.ProductID = Products.ProductID WHERE OrderDetails.OrderID = 10251 ORDER BY Products.ProductName
LIMIT 3`

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

> `SELECT o.OrderID, c.CustomerName, e.LastName 
FROM Orders AS o
JOIN Customers AS c ON o.CustomerID = c.CustomerID
JOIN Employees AS e ON o.EmployeeID = e.EmployeeID
LIMIT 196`

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

> `SELECT c.CategoryName, Count(Products.ProductID) AS ProductCount 
FROM Categories AS c 
JOIN Products ON c.CategoryID = Products.CategoryID 
GROUP BY c.CategoryName LIMIT 9`

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

> `SELECT Od.OrderID, COUNT(P.ProductID) AS ItemCount
FROM OrderDetails as Od
JOIN Products AS P ON Od.ProductID = P.ProductID
GROUP BY Od.OrderID LIMIT 196`