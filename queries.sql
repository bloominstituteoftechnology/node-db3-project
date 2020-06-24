-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT Product.ProductName, Category.CategoryName
FROM Product
JOIN Category
ON Product.CategoryID = Category.Id
-- WHERE ProductName = "Uncle Bob's Organic Dried Pears"

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT [Order].Id, SHIPPER.CompanyName
FROM [Order]
JOIN SHIPPER
    ON [Order].ShipVia = Shipper.Id
WHERE [Order].OrderDate < "2012-08-09"

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT Product.ProductName, OrderDetail.Quantity
FROM Product
JOIN OrderDetail
    ON OrderDetail.ProductId = Product.Id
WHERE OrderDetail.OrderId = "10251"

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT 
    [Order].Id AS "Order_Id", 
    Customer.CompanyName AS "Company_Name", 
    Employee.LastName As "Employee_Last_Name" 
FROM [Order]
JOIN Customer
    on [Order].CustomerId = Customer.Id
JOIN Employee
    on [Order].EmployeeId = Employee.Id