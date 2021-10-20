-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT ProductName, CategoryName
FROM Product
JOIN Category
ORDER BY ProductName and CategoryName DESC;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT Orders.OrderID, Shippers.ShipperName
FROM Orders
INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID
WHERE OrderDate < '2012-09-08';
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT OrderID.10251
FROM Orders
JOIN OrderDetails ON OrderDetails.Quantity
JOIN Products ON Products.ProductName;
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT Orders.OrderID, Suppliers.SupplierName, Employees.LastName
FROM Orders
INNER JOIN Suppliers ON Suppliers.SupplayerName = Orders.OrdersID
INNER JOIN Employees ON Employees.LastName = Suppliers.SupplierName;