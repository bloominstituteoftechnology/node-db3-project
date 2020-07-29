-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT prod.ProductName, cat.CategoryName
FROM Product AS prod
JOIN Category AS cat
ON prod.CategoryId = cat.id;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT ord.Id, ship.CompanyName
From [Order] AS ord 
JOIN Shipper AS ship
ON ord.ShipVia = ship.id where ord.OrderDate < '2012-08-09';
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT pro.ProductName, ord.Quanity
FROM OrderDetails AS ord 
JOIN Product AS prod 
ON ord.ProductId = prod.id 
WHERE OrderId = 10251; 
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT ord.Id, cust.CompanyName, emp.LastName
FROM [Order] as ord 
JOIN [Customer] as cust ON ord.CustomerId = cust.Id
JOIN [Employee] as emp ON ord.EmployeeId = emp.Id;



