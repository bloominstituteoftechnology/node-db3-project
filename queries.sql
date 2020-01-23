-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

    SELECT *
    FROM Category, Product;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

    SELECT * FROM [Order];

    SELECT * FROM [Shipper];

    SELECT o.id, s.CompanyName FROM [Order] as o 
    JOIN shipper AS s ON o.shipVia = s.id
    WHERE o.orderDate < '2012-08-09';
    
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
