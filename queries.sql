-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select 
    p.ProductName as 'product name',
    c.categoryname as 'category'
from Product as p
join Category as c
    on p.categoryid = c.id;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select o.id, s.companyName
from [order] as o
join shipper as s 
on o.ShipVia = s.id
where o.orderDate < '2012-08-09';
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select
 od.Quantity,
p.productname
 from orderdetail as od
 join [order] as o on od.orderid = o.id
 join product as p on od.ProductId = p.id
 where o.id = 10251
 order by p.productname;
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select 
o.id as 'Order Id',
c.companyname as 'Company Name',
e.lastname as 'LastName'
from [order] as o
join customer as c
on o.customerid = c.id
join employee as e
on o.employeeid = e.id;