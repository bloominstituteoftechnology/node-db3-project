-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT p.ProductName, c.CategoryName
FROM Category as c
JOIN Product as p
ORDER BY p.ProductName

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o.id, s.CompanyName
FROM "Order" as o
JOIN "Shipper" as s ON o.ShipVia = s.id
WHERE o.OrderDate < "2012-08-09"
ORDER BY o.OrderDate


-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT od.Quantity, p.ProductName
FROM "OrderDetail" as od
JOIN "Product" as p ON p.Id = od.ProductId
WHERE od.OrderId = 10251
ORDER BY p.ProductName
LIMIT 3

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.Id, c.CompanyName, e.LastName
FROM "Order" as o
JOIN "Customer" as c ON o.CustomerId = c.Id
JOIN "Employee" as e ON e.Id = o.EmployeeId