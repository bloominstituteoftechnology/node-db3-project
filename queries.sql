-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

select
    p.id,
    p.productname,
    c.id,
    c.CategoryName
from product p
left join category c
    on p.Id = c.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select
    [order].Id,
    [order].ShipName,
    [order].ShippedDate
from [order]
where [order].ShippedDate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select
    od.id,
    od.Productid,
    p.ProductName
from OrderDetail od
join Product p
    on p.id = od.ProductId
    where od.id like '10251%'
    order by p.ProductName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select distinct
    od.OrderId,
    c.CompanyName,
    e.lastname
from [order] o
join orderdetail od
    on o.id = od.OrderId
join customer c
    on o.customerid = c.Id
join employee e
    on  o.EmployeeId = e.id