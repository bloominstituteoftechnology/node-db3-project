-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT ProductName, CategoryName
FROM Product
JOIN Category
ON CategoryId = Category.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o.Id, s.CompanyName
FROM Shipper as s
JOIN [Order] as o
ON o.ShipVia = s.Id
WHERE o.OrderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT p.ProductName, od.Quantity
FROM Product AS p
JOIN OrderDetail as od
ON od.OrderId = 10251
AND od.ProductId = p.Id
ORDER BY p.ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.Id AS [OrderId], c.CompanyName AS [Customers Company], e.LastName AS [Employee Last Name]
FROM [Order] AS o
JOIN Customer AS c ON o.CustomerId = c.Id
JOIN Employee AS e ON o.EmployeeId = e.Id;