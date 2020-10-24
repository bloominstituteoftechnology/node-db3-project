-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT p.ProductName, c.CategoryName
FROM Product as p
JOIN Category as c on p.CategoryId = c.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o.Id, o.ShipName
FROM [Order] as o
WHERE OrderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10252. Sort by ProductName. Shows 3 records.
SELECT p.ProductName, od.OrderId, od.Quantity
FROM  [OrderDetail] as od
JOIN [Order] as o on  od.OrderId = o.Id
JOIN [Product] as p on od.ProductId = p.Id
WHERE OrderId = 10252;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.Id , c.CompanyName, e.LastName 
FROM [Order] as o
JOIN Customer as c on o.CustomerId = c.Id
JOIN Employee as e on o.EmployeeId = e.Id;