# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
SELECT Products.ProductName, Categories.CategoryName
FROM Products
INNER JOIN Categories ON Products.CategoryID=Categories.CategoryID;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
SELECT Orders.OrderID, Shippers.ShipperName, Orders.OrderDate
FROM Orders
INNER JOIN Shippers ON Orders.ShipperID=Shippers.ShipperID
WHERE OrderDate<"1997-01-09"
### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT Products.ProductName, OrderDetails.Quantity, Products.ProductID
FROM Products
INNER JOIN Orderdetails ON Products.ProductID=OrderDetails.ProductID
WHERE OrderID='10251'
ORDER BY ProductName
### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT o.OrderID as 'Order ID', c.CustomerName as 'Customer Name', e.LastName as 'Employee Last Name'
from Orders as o
join Customers as c 
on c.CustomerID = o.CustomerID
join Employees as e 
on e.EmployeeID = o.EmployeeID
### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 