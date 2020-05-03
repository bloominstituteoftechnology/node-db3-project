-- Multi-Table Query Practice
 
-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
    select ProductName, CategoryName 
        from Product
        join Category
        on CategoryId = Category.id;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
    select p.ProductName, o.Quantity
    from [OrderDetail] as o
    join [Product] as p
    on p.id = o.ProductId
    where o.OrderId = 10251
    order by p.ProductName;
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
    SELECT ProductName, Quantity
    FROM Product
    JOIN OrderDetail
    ON Product.Id = OrderDetail.ProductId
    WHERE OrderDetail.OrderId = '10251'
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
    SELECT CompanyName, LastName as EmployeesLastName, [Order].Id
    FROM [Order]
    JOIN Employee
    ON Employee.Id = [Order].EmployeeId
    JOIN Customer
    ON Customer.Id = [Order].CustomerId  