-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
Select c.CategoryName as Category, p.ProductName
From Product as p
Join Category as c ON p.CategoryId = c.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
Select o.Id, s.CompanyName
From [Order] as o
Join Shipper as s
ON o.ShipVia = s.Id
where o.OrderDate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
Select p.ProductName, d.Quantity
From [Product] as p
Join OrderDetail as d
ON p.Id = d.ProductId
where d.OrderId = 10251

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.-
Select o.Id, c.CompanyName, e.LastName
From [Order] as o
Join [Customer] as c ON o.CustomerId = c.Id
Join [Employee] as e ON o.EmployeeId = e.Id

-- Stretch 1
SELECT c.CategoryName, count(p.CategoryID) as Count
From Categories as c
Join Products as p
ON p.CategoryID = c.CategoryID
Group by CategoryName