-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select productname, categoryname
from Product
join Category 
on Product.CategoryId = category.Id
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select  [order].id, shipper.CompanyName, [order].orderdate
from [order]
join shipper
on [order].OrderDate < '2012-08-09'
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select product.ProductName, product.UnitsInStock, [order].id
from [order]
join product
where [order].id = 10251
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select [order].id, customer.CompanyName, employee.LastName
from [order]
inner join customer 
on [order].CustomerId = customer.Id
inner join employee
on [order].EmployeeId = employee.Id