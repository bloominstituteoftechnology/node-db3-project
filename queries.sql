-- Database Queries

-- Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT ProductName, CategoryName
FROM [Products] as p
JOIN [Categories] as c 
    ON p.categoryid=c.categoryid

-- Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT OrderID, ShipperName
FROM [Orders] as o
JOIN [Shippers] as s
	ON o.shipperid=s.shipperid
    AND o.orderdate < '1997-01-09'

-- Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT p.ProductName, o.Quantity
FROM [OrderDetails] as o
JOIN [Products] as p
    ON o.Productid=p.Productid
    AND o.orderid=10251

-- Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT o.orderid, e.lastname as EmployeeLastName, c.customerName
FROM [Orders] as o
JOIN [Customers] as c
    ON o.customerid=c.customerid
JOIN [Employees] as e
	ON o.employeeid=e.employeeid

-- (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT cat.CategoryName, COUNT (prod.CategoryID) as TotalProducts
FROM Categories as cat
JOIN Products as prod
	ON cat.CategoryID = prod.CategoryID
GROUP BY cat.CategoryName

-- (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

SELECT orderid, COUNT(productid) as ItemCount
FROM OrderDetails
GROUP BY orderid