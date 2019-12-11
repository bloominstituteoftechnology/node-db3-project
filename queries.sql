-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select p.ProductName as ProductName, c.CategoryName as CategoryName
from Product as p
    join Category as c
    on p.CategoryId = c.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select id as orderId, companyName as Shipper, orderDate
from [order]as o
    join Shipper as s
    on o.shipVia = s.id
where o.orderdate < '2012-08-09'
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
Select ProductName, Quantity
From Product
    JOIN OrderDetail
    ON Product.Id = OrderDetail.ProductId
WHERE OrderDetail.OrderId = 10251
Order by ProductName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT Id as OrderId, CompanyName, LastName
FROM [Order]
    Join Customer
    ON [Order].CustomerId = Customer.Id
    Join Employee
    ON [Order].EmployeeId = Employee.Id