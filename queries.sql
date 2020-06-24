-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT p.ProductName, c.CategoryName
FROM Product as p
JOIN Category as c
	on p.CategoryId = c.Id;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o.Id, s.CompanyName, o.OrderDate
FROM "Order" as o
JOIN Shipper as s
	on o.ShipVia = s.Id
WHERE o.OrderDate < "2012-08-09";
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT p.productName, o.quantity
FROM orderDetail as o
JOIN product as p 
    on p.id = o.productId
WHERE o.orderID = "10251"
ORDER BY p.ProductName;
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT "Order".id as "Order ID", c.CompanyName as "Company Name", e.LastName as "Employee Last Name"
FROM "Order"
JOIN customer as c
	on c.id = "Order".CustomerId
JOIN employee as e
	on e.id = "Order".EmployeeId;