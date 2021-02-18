-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT product.ProductName, category.CategoryName
FROM [category]
JOIN product 
ON category.id = product.CategoryId;


-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT [order].id, shipper.CompanyName, [order].orderDate
FROM shipper
JOIN [order]
ON [order].ShipVia = shipper.id
WHERE [order].OrderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT [order].id, [customer].CompanyName, [employee].LastName
FROM [order] 
JOIN [customer], [employee]
WHERE [customer].id = [order].CustomerId AND [order].EmployeeId = [employee].id


-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

