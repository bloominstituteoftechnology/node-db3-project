-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

select 
    p.productname,
    c.categoryname
from products p
join categories c
    on p.categoryid = c.categoryid

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select
    o.orderid,
    s.shippername,
    o.orderdate
from orders o
join shippers s
    on o.shipperid = s.shipperid
    where o.orderdate < '2012-08-09 00:00:00.000'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.


SELECT
    p.productname,
    od.quantity
FROM orderdetails od
JOIN products p
    ON od.productid = p.productid
    WHERE od.orderId = 10251
    order by p.productname


-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select
    o.orderid,
    c.customername,
    e.lastname

FROM orders o 
JOIN customers c
    ON o.customerid = c.customerid
JOIN employees e
    ON o.employeeid = e.employeeid

