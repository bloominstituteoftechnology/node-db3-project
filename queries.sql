-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select c.CategoryName, p.ProductName
from [Product] as p
 join Category as c
 on p.CategoryId = c.Id
 
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select shipper.CompanyName, [Order].Id, [Order].OrderDate 
from [Order]
join Shipper
on [Order].ShipVia = shipper.Id
where OrderDate < '2012-08-09'
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select ProductName, count(OrderDetail.id)
from Product
join OrderDetail
on Product.Id = OrderDetail.ProductId
where OrderDetail.OrderId = 10251
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select [Order].id ,Customer.CompanyName, employee.LastName
from [Order]
join Employee, Customer
where [Order].CustomerId = [Customer].Id AND [Order].EmployeeId = [Employee].Id

