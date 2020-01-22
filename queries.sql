-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT p.Productname, c.CategoryName
FROM product as p
    JOIN category as c
    ON c.Id = p.CategoryId
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o.Id, s.CompanyName, o.OrderDate
From [order] as o
    Join Shipper as s
    on o.ShipVia = s.Id
WHERE o.Orderdate < '2012-08-09';
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT p.ProductName, od.Quantity
FROM [orderDetail] as od
    JOIN Product as p
    on od.ProductId = p.Id
WHERE od.OrderId = 10251
ORDER BY p.ProductName
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.Id, c.CompanyName, e.LastName
From [order] AS o
    JOIN customer as c
    ON o.CustomerId = c.Id
    JOIN employee as e
    ON o.EmployeeId = e.Id;
