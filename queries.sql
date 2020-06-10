-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT Product.productName, Category.CategoryName
FROM Product
INNER JOIN Category on Product.CategoryId = Category.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT O.id, Shipper.CompanyName
FROM 'Order' as O
INNER JOIN Shipper on O.ShipVia =Shipper.Id
WHERE O.OrderDate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT O.Quantity, Product.ProductName
FROM OrderDetail as O 
INNER JOIN Product on O.ProductId = Product.Id
WHERE O.OrderId = 10251;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.


SELECT O.Id as OrderId, C.CompanyName, E.LastName
From 'Order' as O
JOIN Employee as E on O.EmployeeId = E.Id
JOIN Customer as C on O.CustomerId = C.Id;