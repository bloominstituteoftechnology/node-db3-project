-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
    SELECT 
        p.productname AS 'Product Name', 
        c.categoryname AS 'Category Name'
    FROM Product AS p
    JOIN Category AS c
    ON p.categoryid = c.id
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
    SELECT
        o.id AS 'Order Id',
        s.companyname AS 'Company Name'
    FROM 'Order' AS o
    JOIN 'Shipper' AS s
        on o.shipvia = s.id
    WHERE orderdate < "2012-08-09"
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
    SELECT 
        p.productname AS 'Product Name',
        od.quantity as 'Quantity'
    FROM orderdetail AS od
    JOIN product AS p 
    ON p.id = od.productid
    WHERE od.orderid = 10251;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
    SELECT
        o.id AS 'OrderID',
        c.companyname AS 'Customer', 
        e.lastname AS 'Employee Last Name'
    FROM "Order" AS o 
    JOIN Customer AS c 
        ON o.customerid = c.id
    JOIN Employee AS e 
        ON o.employeeid = e.id
