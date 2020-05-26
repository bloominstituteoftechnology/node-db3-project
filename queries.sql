-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT ProductName, CategoryName
FROM product AS P
    JOIN Category AS C
    ON P.CategoryId = C.id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select [order].id, orderdate, companyname
from [order]
    join shipper
    on [order].shipvia = shipper.id
where [order].orderdate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select ProductName, Quantity
from Product
    join OrderDetail
    on product.Id = orderdetail.ProductId
where orderdetail.OrderId = '10251'
order by product.ProductName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select distinct orderid, companyname, lastname
from orderdetail
    join [order] , employee, customer
on orderdetail.orderid = [order].id and [order].EmployeeId = employee.id and [order].customerid = customer.id