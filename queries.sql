-- Multi-Table Query Practice
    
-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
    SELECT c.CategoryName, p.ProductName
    FROM Product AS p
    JOIN Category AS c
    ON p.CategoryId = c.Id  
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
    SELECT shipper.CompanyName, [Order].Id, [Order].OrderDate 
    FROM [Order]
    JOIN Shipper
    ON [Order].ShipVia = shipper.Id
    WHERE OrderDate < '2012-08-09'
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
    SELECT ProductName, COUNT(OrderDetail.id)
    FROM Product
    JOIN OrderDetail
    ON Product.Id = OrderDetail.ProductId
    WHERE OrderDetail.OrderId = 10251
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
     SELECT [Order].id ,Customer.CompanyName, employee.LastName
    FROM [Order]
    JOIN Employee, Customer
    WHERE [Order].CustomerId = [Customer].Id AND [Order].EmployeeId = [Employee].Id
