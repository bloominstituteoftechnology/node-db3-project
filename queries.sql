-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select p.ProductName, c.CategoryName
from product as p  
join category as c 
on p.CategoryId = c.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select o.id, s.companyName
from [order] AS o
join shipper as s 
on o.ShipVia = s.id
where o.orderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select p.ProductName, od.quantity
from orderdetail as od
join [order] AS o ON od.orderid = o.id
join product AS p ON od.productid = p.id
where o.id = 10251
order by p.productname

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select o.id as OrderID, c.companyName as CompanyName, e.lastname as EmployeeLastName
from [order] as o
join customer as c 
on o.customerId = c.id
join employee as e 
on o.employeeId = e.id