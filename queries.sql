-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT ProductName, CategoryName FROM category JOIN product WHERE category.id = product.CategoryId
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o.id, CompanyName FROM `order` as o JOIN shipper as s WHERE s.Id = o.ShipVIA AND o.OrderDate < '2012-08-09'
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT ProductName, Quantity FROM product as p JOIN orderdetail as o WHERE p.ID = o.ProductId AND o.OrderId = 10251
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.Id, CompanyName, LastName FROM `order` as o JOIN customer as c JOIN employee as e WHERE o.CustomerID = c.Id AND o.EmployeeId = e.Id