-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select productname, categoryname
from Product
join Category 
on Product.CategoryId = category.Id
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select [order].id, shipper.CompanyName
from [order]
join shipper
on [order].shipVia = shipper.id
where date([order].OrderDate) < date('2012-08-09')

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select OrderDetail.quantity, product.ProductName
from [OrderDetail]
join product
on [OrderDetail].productId = product.id
where [OrderDetail].OrderId = 10251
order by product.productname
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select customer.CompanyName, employee.LastName, [order].id
from [order]
join customer 
on [order].CustomerId = customer.Id
join employee
on [order].EmployeeId = employee.Id