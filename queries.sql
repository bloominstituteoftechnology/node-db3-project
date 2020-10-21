-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select p.ProductName, c.CategoryName 
from product as p
join category as c
on p.categoryid = c.id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select shipper.CompanyName, [order].id, [order].orderDate
from [order]
join shipper 
on [order].ShipVia = shipper.Id
where [order].orderDate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select product.ProductName, orderDetail.id, orderdetail.quantity 
from product
join OrderDetail 
on product.id = orderDetail.productId 
where OrderDetail.orderId = 10251
order by product.ProductName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select [order].id as OrderId, Customer.CompanyName as Company, Employee.LastName EmployeeLastName
from [order]
join Employee 
    on [order].employeeId = Employee.Id
join Customer 
    on [order].CustomerId = Customer.Id;