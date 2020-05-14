-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT p.ProductName, c.CategoryName
FROM Product AS p
    JOIN Category as c ON c.Id = p.categoryId
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o.id, s.CompanyName
FROM [order] as o
    JOIN Shipper as s ON o.ShipVia = s.id
WHERE o.OrderDate < [2012-08-09];
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT p.ProductName, od.Quantity
FROM Product AS p
    JOIN OrderDetail AS od ON od.ProductId = p.Id
WHERE od.OrderId = 10251
ORDER BY p.ProductName;
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT CustomerID, CompanyName, LastName
FROM [Order] as o
    JOIN Employee as e ON e.Id = o.EmployeeId
    JOIN Customer as c ON c.Id = o.CustomerId;