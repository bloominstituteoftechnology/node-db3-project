-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT 
	p.ProductName,
	c.CategoryName
FROM
	Product as p
LEFT JOIN Category as c ON p.CategoryId = c.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT
	Id,
	ShipName,
	OrderDate
FROM "Order"
WHERE OrderDate < '2012-08-09'
ORDER BY OrderDate DESC; 

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT
	p.ProductName,
	o.Quantity
FROM OrderDetail as o 
LEFT JOIN Product as p ON p.Id = o.ProductId
WHERE OrderId = '10251'
ORDER BY ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT
	o.Id as "Order Id",
	c.CompanyName as "Customers Company Name",
	e.LastName as "Employees Last Name"
FROM "Order" as o 
JOIN Employee as e ON o.EmployeeId = e.Id
JOIN Customer as c ON o.CustomerId = c.Id;