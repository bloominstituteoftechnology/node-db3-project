-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
        SELECT p.ProductName, c.CategoryName FROM  Product as p 
        JOIN Category as c ON p.CategoryId = c.id
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
        SELECT o.id, s.CompanyName FROM [Order] as o 
        JOIN Shipper AS s ON o.ShipVia = s.id
        Where o.OrderDate < '2012-08-09'
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
        SELECT p.ProductName, od.Quantity from OrderDetail as od 
        join Product as p on p.id = od.ProductId 
        WHERE od.OrderId = 10251
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
        SELECT o.id, c.CompanyName, e.LastName 
        from (([Order] as o 
        INNER JOIN Customer as c on o.CustomerId =  c.id)
        INNER JOIN Employee as e on o.EmployeeId = e.id )