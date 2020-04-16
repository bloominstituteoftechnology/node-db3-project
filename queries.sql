-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT ProductName, CategoryName
FROM product
JOIN category
    ON  category.id = product.categoryId

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT "order".Id, shipper.CompanyName FROM "Order"
JOIN shipper 
	ON shipper.id = "order".shipVia
	WHERE "Order".OrderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT ProductName, QuantityPerUnit FROM Product
JOIN OrderDetail 
	ON OrderDetail.ProductId = Product.Id
	WHERE OrderDetail.OrderId = 10251 
	ORDER BY ProductName;
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT "Order".Id, CompanyName, Employee.LastName FROM "Order"
JOIN Customer ON Customer.Id = "Order".customerId
JOIN Employee ON Employee.Id = "Order".employeeId;