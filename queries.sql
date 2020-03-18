-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT p.ProductName, c.CategoryName
FROM [Product] as p
JOIN Category as c ON p.CategoryId = c.Id
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o.Id, s.CompanyName
FROM [Order] as o
JOIN Shipper as s
ON o.ShipVia = s.Id
WHERE o.OrderDate < date('2012-08-09')

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT p.ProductName, o.Quantity
FROM [Product] as p
JOIN OrderDetail as o
ON p.Id = o.ProductId
WHERE o.OrderId = 10251
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.Id, c.CompanyName as CustomerName, e.LastName as EmployeeLastName
FROM [Order] as o
JOIN Customer as c
JOIN Employee as e
ON o.CustomerId = c.Id AND o.EmployeeId = e.Id

-- STRETCH PROBLEMS

--   Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 8 records.
SELECT Categories.CategoryName as "Category", count(*) as "Total Products"
FROM Products
JOIN Categories
WHERE Products.CategoryID = Categories.CategoryID
GROUP BY Products.CategoryID

--   Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
SELECT OrderID, count(*) as "ItemCount" from OrderDetails
GROUP BY OrderID