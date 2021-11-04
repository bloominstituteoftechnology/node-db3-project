-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select
    pr.productname, ca.categoryname
    from product as pr
    left join category as ca
    on ca.id=pr.categoryid
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT
    order.Id, Shipper.companyname
FROM order
LEFT JOIN Shipper 
    ON Order.ShipVia=Shipper.Id
where Order.orderdate<'2012-08-09' 
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select
product.productname,orderdetail.Quantity,product.ProductName
from product
join orderdetail
on product.id=orderdetail.ProductId
where orderdetail.OrderId=10251

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
