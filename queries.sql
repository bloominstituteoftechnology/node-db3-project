-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select p.ProductName, c.CategoryName
from Product as p
join Category as c
on p.CategoryId = c.Id
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select o.id, s.companyName
from [order] as o
join Shipper as s 
on o.ShipVia = s.Id
where o.orderDate < '2012-08-09'
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select p.ProductName, od.quantity
from OrderDetail as od
join [Order] AS o ON od.OrderId = o.id
join Product AS p On od.ProductId = p.id
where o.id = 10251
order by p.ProductName