-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

-- SELECT
-- 	p.ProductName,
-- 	c.CategoryName
-- FROM Product AS p
-- INNER JOIN Category AS c ON p.CategoryId = c.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

-- SELECT 
-- 	o.Id OrderId,
-- 	o.OrderDate,
-- 	s.CompanyName Shipper
-- FROM "Shipper" AS s
-- INNER JOIN "Order" AS o ON s.Id = o.ShipVia
-- WHERE o.OrderDate < "2012-08-09";

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

-- SELECT
-- 	oD.OrderId,
-- 	p.ProductName,
-- 	oD.Quantity
-- FROM "OrderDetail" AS oD
-- INNER JOIN "Order" AS o ON oD.OrderId = o.Id
-- INNER JOIN "Product" AS p ON oD.ProductId = p.Id
-- WHERE o.Id = 10251
-- ORDER BY p.ProductName ASC;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

-- SELECT
-- 	o.Id OrderId,
-- 	c.CompanyName CustomersCompanyName,
-- 	e.LastName EmployeeLastName
-- FROM "Order" AS o
-- INNER JOIN "Customer" AS c ON o.CustomerId = c.Id
-- INNER JOIN "Employee" AS e ON o.EmployeeId = e.Id;