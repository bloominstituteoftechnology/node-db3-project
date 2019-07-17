# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
SELECT p.ProductName, c.CategoryName 
from Products as p 
JOIN Categories as c 
ON c.CategoryId = p.CategoryId

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
SELECT o.OrderID, o.OrderDate, s.ShipperName 
FROM Orders as o 
left join Shippers as s 
on o.ShipperID = s.ShipperID where o.OrderDate < '1997-01-09' order by o.OrderDate

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT p.Productname, o.Quantity 
FROM OrderDetails as o 
JOIN Products as p 
on o.Productid = p.Productid 
where o.Orderid = 10251 order by p.Productname

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT o.Orderid as 'Order ID',
c.Customername as 'Customer Name',
e.Lastname as 'Employee Surname' 
FROM Orders as o 
JOIN Customers as c 
on o.Customerid = c.Customerid 
JOIN Employees as e
on o.Employeeid = e.Employeeid

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
SELECT c.Categoryname 
count(p.Categoryid) as Amount 
FROM Products as p 
JOIN Categories as c 
on p.Categoryid = c.Categoryid group by c.Categoryid order by p.Categoryid
JOIN Employees as e
on e.Employeeid = e.Employeeid

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

SELECT orderdetails.orderid, 
count(orders.orderid) as 'Item Count' 
FROM OrderDetails 
join orders 
on orderdetails.orderid = orders.orderid group by orderdetails.orderid
on e.Employeeid = e.Employeeid