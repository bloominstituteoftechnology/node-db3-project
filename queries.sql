-- Multi-Table Query Practice
-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
Select ProductName, CategoryName
From [Product] as p
Join [Category] as c
on p.CategoryId = c.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
Select id, CompanyName
From [Order] as o
Join [Shipper] as s
on o.ShipVia = s.Id
where o.OrderDate < '2012-08-09'


-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
Select ProductName, Quantity
From [Product] as p
Join [OrderDetail] as o
on p.Id = o.ProductId
where o.OrderId = '10251'
order by p.ProductName 

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
