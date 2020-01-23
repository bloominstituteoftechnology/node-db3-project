-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select o.Id, s.CompanyName from [Order] as o join Shipper as s on s.Id = o.Id
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select s.Id, o.Id,o.EmployeeId, s.CompanyName, o.OrderDate, * from [order] as o join shipper as s on s.Id = o.ShipVia where o.OrderDate <= [2012-08-08 23:59:59];
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select p.ProductName, o.Quantity from [order] as Ordr join OrderDetail as o on o.OrderId = Ordr.Id join Product as p on p.id = o.ProductId where Ordr.Id = 10251 order by p.ProductName desc
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select o.Id as [Order ID], Customer.CompanyName as [Company Name], Employee.LastName as [Last Name] from [order] as o join Customer on Customer.Id = o.CustomerId join Employee on Employee.Id = o.EmployeeId