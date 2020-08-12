-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT ProductName, CategoryName
From Product AS P
  JOIN Category AS C
  ON P.ProductID = C.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT Id, CompanyName
FROM [Order]
AS 0
LEFT JOIN Shipper as S
ON O.ShipVia = S.Id
WHERE "OrderDate" < "2012-08-09"

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.


SELECT ProductName, Quantity
FROM [OrderDetail]
AS 0
JOIN Product AS P
ON O.ProductID = P.Id;
WHERE O.OrderId = 10251
ORDER BYT P.ProductName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT O.Id AS OrderId, CompanyName AS Customer, LastName AS EmployeeLastName
FROM [Order] AS O
  JOIN [Customer] AS C
  On O.CustomerId = C.Id
  JOIN [EmployeeID] as E
  On O.EmployeeID = E.Id