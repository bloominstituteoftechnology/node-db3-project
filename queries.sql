-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select 
    p.productname as 'Product Name', 
    c.categoryname as 'Category Name'
from Product as p
join Category as c
    on p.categoryid = c.id
    
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select 
    o.id as 'OrderId',
    s.companyName as 'Company Name'
from "Order" as o
join Shipper as s
 on o.shipvia = s.id
where orderDate < "2012-08-09"

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select
    p.Productname as 'name',
    od.quantity as 'Quantity'
from orderdetail as od
join product as p
    on p.id = od.productid
where od.orderid = 10251

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select 
    o.id as 'OrderID',
    c.companyname as 'Customer', 
    e.lastname as 'Employee Last Name'
from "Order" as o 
join Customer as c 
    on o.customerid = c.id
join Employee as e 
    on o.employeeid = e.id