-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

    SELECT p.Id, p.ProductName, c.CategoryName
    FROM product as p 
    JOIN category as c 
    ON p.CategoryId = c.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

    SELECT o.Id, s.CompanyName, o.OrderDate
    FROM "Order" as o 
    JOIN "Shipper" as s 
    ON o.ShipVia = s.Id
    WHERE o.OrderDate < "2012-08-09" 
    ORDER BY o.OrderDate DESC;

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

    SELECT o.Id, p.ProductName, o.quantity
    From Product AS p 
    JOIN OrderDetail AS o 
    ON p.id = o.ProductId
    WHERE o.OrderId = 10251
    ORDER BY p.ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

    SELECT o.Id, c.CompanyName as CustomerCompanyName, e.LastName as EmployeeLastName
    FROM "Order" AS o
    Join Customer AS c ON o.CustomerId = c.Id
    Join Employee AS e ON o.EmployeeId = e.Id;

--Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

    SELECT c.CategoryName, c.Description, Count() as AmtofProductsinCategory
    FROM categories as c
    JOIN products AS p ON c.CategoryId = p.CategoryId
    GROUP BY p.CategoryID;

--Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

    SELECT o.OrderId, SUM(od.Quantity) AS ItemCount
    FROM Orders AS o
    JOIN OrderDetails AS od ON o.OrderID = od.OrderId
    GROUP BY o.OrderId;