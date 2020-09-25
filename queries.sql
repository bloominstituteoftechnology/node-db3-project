-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT p.ProductName, c.CategoryName
FROM Category as c
  JOIN Product as p
  on p.CategoryId = c.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT o.Id, s.CompanyName, o.OrderDate
FROM [Order] as o
  JOIN Shipper as s
  on o.OrderDate < "2012-08-09" AND s.Id = o.ShipVia;

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT p.ProductName, o.Quantity
FROM Product as p
  INNER JOIN OrderDetail as o
  on p.Id = o.ProductId AND o.OrderId = 10251;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.Id as "OrderId", c.CompanyName, e.LastName
FROM [Order] as o
  JOIN Customer as c   , Employee as e
on c.Id = o.CustomerId AND e.Id = o.EmployeeId;