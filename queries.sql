-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT ProductName, CategoryName
FROM product AS P
    JOIN Category AS C
    ON P.CategoryId = C.id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT [Order].id, OrderDate, CompanyName
FROM [Order]
    JOIN Shipper
    ON [Order].shipvia = shipper.id
WHERE [Order].orderdate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT ProductName, Quantity
FROM Product
    JOIN OrderDetail
    ON product.Id = orderdetail.ProductId
WHERE orderdetail.OrderId = '10251'
ORDER BY product.ProductName


-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.


SELECT distinct orderid, companyname, lastname
FROM OrderDetail
    JOIN [Order] , employee, customer
ON orderdetail.orderid = [order].id and [order].EmployeeId = employee.id and [order].customerid = customer.id 