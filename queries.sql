-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT P.Id, P.ProductName, C.CategoryName
FROM Product as P
JOIN Category as C on P.CategoryId = C.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT [Order].Id, [Order].OrderDate, Shipper.CompanyName
FROM [Order]
JOIN Shipper on [Order].ShipVia = Shipper.Id
WHERE [Order].OrderDate < '2012-08-09'
ORDER BY [Order].OrderDate DESC

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT o.OrderId, Product.ProductName, o.Quantity
FROM OrderDetail as o
JOIN Product on o.ProductId = Product.Id
WHERE o.OrderId = 10251;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.Id as 'Order ID'
  , c.CompanyName as 'Company'
  , e.LastName as 'Employee Lastname'
FROM [Order] as o
JOIN Customer as c ON o.CustomerId = c.Id
JOIN Employee as e ON o.EmployeeId = e.Id