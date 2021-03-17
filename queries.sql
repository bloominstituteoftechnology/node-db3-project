-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select
    p.productname,
    c.CategoryName
from Product as p
    left join Category as c
    on p.CategoryId = c.Id

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select
    p.ProductName,
    od.Quantity
from [Product] as p
    join [OrderDetail] as od
    on od.ProductId = p.Id
    join [Order] as o
    on o.Id = od.OrderId
where o.Id = 10251
order by p.ProductName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select
    o.Id as "Order ID",
    c.CompanyName,
    e.LastName as "Employee Last Name"
from [Order] as o
    join [Customer] as c
    on o.CustomerId = c.Id
    join [Employee] as e
    on o.EmployeeId = e.Id


-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select
    o.Id
from [Order] as o
where o.orderdate < 20120809

