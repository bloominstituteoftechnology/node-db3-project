-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT 
    productname as Product,
    c.CategoryName
FROM product as p
JOIN category as c
    on p.categoryid = c.id;


-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT 
    o.Id as OrderID,
    s.CompanyName
FROM "order" o
JOIN shipper s
    on o.shipvia = s.Id
WHERE o.OrderDate<"2012-08-09"; 


-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT 
    p.ProductName,
    o.Quantity
FROM orderdetail o
JOIN product p
    on o.ProductId = p.Id
WHERE o.orderid = 10251;  


-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT 
    o.Id Order_ID,
    c.CompanyName Customer_Company,
    e.LastName Sales_Employee_Last_Name
FROM "order" o
JOIN customer c
    on o.customerid = c.Id
JOIN employee e
    on o.EmployeeId = e.Id; 