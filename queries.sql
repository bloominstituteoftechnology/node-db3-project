-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select ProductName, CategoryName 
from Product
join Category
on CategoryId = Category.id;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. 
--Shows 429 records.
select [order].id,[order].OrderDate, CompanyName 
from [order]
join Shipper
on ShipVia = Shipper.id
where [order].orderDate < date('2012-08-09');

-- Display the name and quantity of the products ordered in order with Id 10251. 
--Sort by ProductName. Shows 3 records.
select p.ProductName, o.Quantity
from [OrderDetail] as o
join [Product] as p
 on p.id = o.ProductId
where o.OrderId = 10251
order by p.ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order.
-- All columns should be labeled clearly. Displays 16,789 records.
select c.CompanyName, o.ID, e.LastName
from [Order] as o
join [Customer] as c
on c.Id = o.CustomerId
join [Employee] as e
on o.EmployeeId= e.Id 
order by e.LastName;

--STRETCH---
--Displays CategoryName and a new column called Count that shows how many products are in each category. 
--Shows 8 records.
SELECT c.CategoryName as Category, count(p.ProductName)as [Count]
from Products as p
join Categories as c
on p.CategoryId= c.CategoryId
group by c.CategoryName;

--Display OrderID and a column called ItemCount that shows the total number of products placed on the order.
--Shows 196 records.
SELECT OrderID , count(OrderID)as [ItemCount]
from [orders];