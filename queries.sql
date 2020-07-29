-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT prod.ProductName, cat.CategoryName 
FROM Product As prod 
JOIN Category AS cat 
ON prod.CategoryId = cat.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT ords.Id, co.CompanyName 
FROM 'Order' AS ords 
JOIN Customer As co 
ON ords.CustomerId = co.Id WHERE ords.OrderDate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT prod.ProductName, ords.Quantity 
FROM 'OrderDetail' AS ords 
JOIN Product AS prod 
ON ords.ProductId = prod.Id 
WHERE OrderId = 10251 
ORDER BY prod.ProductName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT ords.Id 
AS Order_ID, cust.CompanyName, empl.LastName 
AS Employee_Last_Name 
FROM 'Order' 
AS ords 
JOIN Customer AS cust 
ON ords.CustomerId = cust.Id 
JOIN Employee AS empl 
ON ords.EmployeeId = empl.Id


-- STRETCH SQL ------------------------------------------------------------------------------------------

-- Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 8 records.
SELECT Categories.CategoryName, COUNT(Products.CategoryID) AS 'Count' 
FROM Products
LEFT JOIN Categories 
ON Products.CategoryID = Categories.CategoryID
GROUP BY CategoryName

-- Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
SELECT OrderID, COUNT(prod.ProductID) 
AS 'ItemCount' 
FROM OrderDetails 
AS od
JOIN Products 
AS prod
ON prod.ProductID = od.ProductID
GROUP BY OrderID