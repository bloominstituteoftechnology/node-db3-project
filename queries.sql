-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select
p.productname,
c.categoryName
from product p
join category c
on p.categoryid = c.id;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select
o.id,
s.companyname
from 'order' o
join shipper s
on o.shipvia = s.id
where orderDate < '2012-08-09'
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select
p.productname,
od.quantity
from orderdetail od
join product p
on p.id = od.productid
where od.orderid = 10251

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select
o.id,
c.companyname,
e.lastname
from'order'o
join customer c
on o.customerid = c.id
join employee e
on o.employeeid = e.id
