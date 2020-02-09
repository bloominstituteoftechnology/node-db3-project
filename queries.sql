-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select ProductName, CategoryName
from Product
join Category
on Product.CategoryId = Category.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select CompanyName, [Order].Id 
From [Order]
join Shipper
on Shipper.Id = [Order].ShipVia
Where [Order].OrderDate < '2012-08-09'



-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select ProductName, Quantity
From Product
join OrderDetail
on Product.Id = OrderDetail.ProductId
Where OrderDetail.OrderId = '10251'




-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select CompanyName, LastName as EmployeesLastName, [Order].Id
From [Order]
join Employee
on Employee.Id = [Order].EmployeeId
join Customer
on Customer.Id = [Order].CustomerId
