-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select Category.CategoryName, Product.ProductName
from Product
inner join Category on Product.CategoryId = Category.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select o.Id, s.CompanyName
from [Order] as o
inner join Shipper as s on o.ShipVia = s.Id
where o.OrderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select Product.ProductName, OrderDetail.Quantity
from Product
inner join OrderDetail on OrderDetail.ProductId = Product.Id
where OrderDetail.OrderId = '10251';

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select o.Id, Customer.CompanyName, Employee.LastName
from [Order] as o
join Customer on o.CustomerId = Customer.Id
join Employee on o.EmployeeId = Employee.Id;
