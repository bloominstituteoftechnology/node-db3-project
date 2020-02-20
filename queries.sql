-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.


SELECT  product.ProductName 
, category.CategoryName

from product
JOIN category 
on product.CategoryId  = category.Id


-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select [order].Id
, shipper.CompanyName
, [order].OrderDate

from [order]
join shipper
on [order].ShipVia = shipper.Id
where [order].OrderDate < "2012-08-09"



-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select product.ProductName 
, orderDetail.Quantity

from product
join orderDetail
on product.Id = orderDetail.ProductId
where orderDetail.OrderId = 10251


-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select [order].Id
,  customer.CompanyName
,  employee.LastName

from [order]
join customer on customer.Id = [order].CustomerId
join employee on employee.Id = [order].EmployeeId


-- Stretch 
-- Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 8 records.
select CategoryName, count(*) as count
from Categories
join Products
on Categories.CategoryID = Products.CategoryID
group by 1;


-- Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
select Orders.OrderID, count(OrderDetails.Quantity) as ItemCount
from Orders
join OrderDetails
on Orders.OrderID = OrderDetails.OrderID
group by 1;