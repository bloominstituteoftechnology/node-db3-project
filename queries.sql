-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT 
p.productname,
c.categoryname
FROM product p 
JOIN category c
ON p.categoryid = c.id;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT 
o.id,
s.companyName,
o.orderdate
from [order] o
join Shipper s
on o.shipVia = s.id
where o.OrderDate < '2012-08-09'
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT
p.Productname,
od.quantity
FROM [orderDetail] od
JOIN Product p
on od.productid = p.id
WHERE od.orderid = 10251
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT
o.ID,
c.companyName,
e.lastname
FROM [Order] o
join Customer c
on o.customerID = c.id
join Employee e
on o.employeeID = e.id;
