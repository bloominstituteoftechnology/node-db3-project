# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
```sql
SELECT ProductName, CategoryName FROM Products
JOIN Categories ON Products.CategoryID = Categories.CategoryID; 
```

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

```sql
SELECT OrderID, ShipperName FROM Orders
JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID
WHERE OrderDate < "1997-01-09";
```

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

```sql
SELECT ProductName, Quantity FROM OrderDetails
JOIN Products ON OrderDetails.ProductID = Products.ProductID
WHERE OrderId = "10251"
ORDER BY ProductName;
```

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

```sql
SELECT OrderID, CustomerName, LastName FROM Orders AS O
JOIN Customers AS C ON C.CustomerID = O.CustomerID
JOIN Employees AS E ON E.EmployeeID = O.EmployeeID;
```

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

```sql
```

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 
```sql
```
