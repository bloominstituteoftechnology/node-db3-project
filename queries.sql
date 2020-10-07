-- Multi-Table Query Practice
-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT Category.CategoryName, Product.ProductName
from Category
join Product on Product.CategoryId = Category.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT [Order].Id, Shipper.CompanyName, [Order].OrderDate
from [Order]
join Shipper on [Order].ShipVia = Shipper.Id 
where [Order].OrderDate < '2012-08-09'
order by OrderDate


-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
Select Product.ProductName, OrderDetail.Quantity
from Product 
join OrderDetail on OrderDetail.ProductId = Product.Id
where OrderDetail.OrderId = '10251'

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
Select [Order].Id, Customer.CompanyName, Employee.LastName
from [Order]
join Customer on [Order].CustomerId = Customer.Id
join Employee on [Order].EmployeeId = Employee.Id