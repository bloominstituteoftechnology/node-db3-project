-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT categoryName,P.ProductName
FROM Category C
JOIN Product P
ON C.id = P.CategoryId;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT OD.OrderId, S.CompanyName
FROM [Order] O
JOIN Shipper S
ON O.ShipVia = S.Id
JOIN OrderDetail OD
ON O.id = OD.OrderId
WHERE O.OrderDate < '2012-08-09'
GROUP BY OD.OrderId

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT P.ProductName,OD.Quantity
FROM OrderDetail OD
JOIN Product P
ON OD.ProductId = P.id
WHERE OrderId = '10251'
ORDER BY ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT OrderID, C.CompanyName, E.LastName
FROM [Order] O
JOIN OrderDetail OD
ON O.id = OD.OrderId
JOIN Customer C
ON C.id = O.CustomerId
JOIN Employee E
ON E.id = O.EmployeeId
GROUP BY OrderId