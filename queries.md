# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
select ProductName, CategoryName 
from Products as P join Categories as C on P.CategoryId = C.CategoryId;
### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
select OrderId, ShipperName 
from Orders 
LEFT join shippers on Orders.ShipperID = shippers.ShipperID
where Orders.OrderDate < '1997-01-09';
### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
select ProductName, Quantity 
from OrderDetails 
Join Products on OrderDetails.ProductID =
Products.ProductID
where OrderDetails.OrderId = 10251
Order by Products.ProductName;
### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
select OrderID as [Order ID], CustomerName as [Customer Name], LastName as [EmployeeLast Name]
from Orders 
Join Customers On Orders.CustomerID = Customers.CustomerID
join Employees on Orders.EmployeeID = Employees.EmployeeID;
### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 