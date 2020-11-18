-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT p.productname,
       c.categoryname
    FROM Product AS p
        JOIN
        category AS c ON p.categoryid = c.id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o.id,
       sh.companyname
  FROM [order] AS o
       JOIN
       shipper AS sh ON o.shipvia = sh.Id
 WHERE o.OrderDate < date('2012-08-09');

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT p.productname,
       od.quantity
  FROM OrderDetail AS od
       JOIN
       product AS p ON p.Id = od.productid
 WHERE od.OrderId = 10251
 ORDER BY p.productname;


-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.Id AS [Order ID],
       c.CompanyName AS [Customer Company Name],
       e.LastName AS [Employee Last Name]
  FROM [order] AS o
       JOIN
       employee AS e ON o.EmployeeId = e.Id
       JOIN
       customer AS c ON o.CustomerId = c.Id;