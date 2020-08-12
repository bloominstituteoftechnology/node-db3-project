-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT ProductName, CategoryName
FROM Product
JOIN Category ON Category.id = Product.CategoryId;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT o.id, s.CompnayName
FROM Order as o
JOIN Shipper as s ON o.id = s.id
WHERE OrderDate < '8/9/2012';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT p.ProductName, o.Quantity
FROM OrderDetail as o
JOIN Product as p ON o.ProductId = p.id
WHERE o.OrderId = '10251';

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT o.id, c.CompnayName, e.LastName
FROM Order as o
JOIN Employee as e ON e.id = o.EmployeeId
JOIN Custokmer as c ON c.id = o.CustomerId;