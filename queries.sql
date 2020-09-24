-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select p.Id, p.ProductName, c.CategoryName
from Product as p
join Category as c
 on p.CategoryId = c.Id
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select o.id, s.CompanyName 
from [Order] as o
join Shipper as s
on o.ShipVia = s.Id
where o.OrderDate < "2012-08-09"
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
Select p.ProductName, o.Quantity
from OrderDetail as o
join Product as p
on o.ProductId = p.Id
where OrderId = 10251
ORDER BY p.ProductName
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.id AS OrderID,
       c.companyname AS CustomerCompanyName,
       e.lastname AS EmployeeSirname
  FROM [order] AS o
       JOIN
       customer AS c ON c.id = o.customerid
       JOIN
       employee AS e ON e.id = o.employeeid;



