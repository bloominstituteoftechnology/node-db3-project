-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT ProductName, CategoryName FROM Product AS P
JOIN Category AS C
ON P.CategoryId = C.Id;


-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT O.Id, CompanyName FROM [Order] AS O
JOIN Shipper As Sh
ON O.ShipVia = Sh.Id
WHERE O.OrderDate < "2012-08-09";

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT P.ProductName, Od.Quantity FROM [OrderDetail] AS Od
JOIN Product As P
ON Od.ProductId = P.Id
WHERE Od.OrderId = 10251
ORDER BY P.ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT O.Id AS "Order Id", 
C.CompanyName AS "Customer Company Name", 
E.LastName AS "Employee Last Name"  
FROM [Order] AS O
JOIN Customer As C
ON O.CustomerId = C.Id
JOIN Employee AS E
ON O.EmployeeId = E.Id;