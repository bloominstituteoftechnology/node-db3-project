-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select 
p.*, 
c.CategoryName, c.Description as [CategoryDescription],
s.CompanyName as [SupplierName], s.Region as [SupplierRegion]
from [Product] p
join [Category] c on p.CategoryId = c.id
join [Supplier] s on s.id = p.SupplierId
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT
    o.orderid,
    s.shippername,
    o.orderdate
FROM orders as o
JOIN shippers as s
    ON o.shipperid = s.shipperid
    WHERE o.orderdate < '2012-08-09 00:00:00.000'
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT
    p.productname,
    od.quantity
FROM orderdetail as od
JOIN product as p
    ON od.productid = p.id
    WHERE od.orderId = 10251
    ORDER BY p.productname
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT
    o.id,
    c.companyname,
    e.lastname

FROM orders as o 
JOIN customer as c
    ON o.customerid = c.id
JOIN employee as e
    ON o.employeeid = e.id
/* Had to rename the 'Order' table 'Orders' cause when i tried to give it the 'Order' input the rest of the query had errors for some reason. */