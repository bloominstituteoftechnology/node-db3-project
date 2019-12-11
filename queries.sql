-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select P.id, P.ProductName, Cat.id, Cat.CategoryName
from Product as P
join Category as Cat
  on P.CategoryId = Cat.id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT O.id, O.ShipVia, O.OrderDate, S.CompanyName, S.id 
FROM [order] as O
JOIN Shipper as S
  on O.ShipVia = S.id
  WHERE O.OrderDate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT OD.OrderId, OD.Quantity, P.ProductName 
FROM OrderDetail as OD
JOIN [Order] as O ON OD.OrderId = O.Id
Join Product as P ON OD.ProductId = P.id
WHERE O.ID = 10251
ORDER BY P.ProductName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT C.CompanyName, O.id, O.EmployeeId, O.CustomerId, E.LastName as "Employee Last Name"
FROM [Order] as O
JOIN Customer as C ON C.id = O.CustomerId
JOIN Employee as E ON E.id = O.EmployeeId
