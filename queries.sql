-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select ProductName, CategoryName
from product as p
left join category as c
on p.categoryid = c.id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select o.id, s.CompanyName
from 'Order' as o
left join shipper as s
on s.id = o.shipvia
where o.orderdate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select ProductName, quantity
from ordertail as o
left join product as p
on p.id = o.productid
where orderid = 10251
order by ProductName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select
o.id as orderid
c.CompanyName as customerCompanyName, 
e.lastName as employeeName
from 'order' as o
join Customer as c 
on o.customerid = c.id
join employee as e 
on o.employeeid = e.id 