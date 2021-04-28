-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
    select ProductName, CategoryName from Product
    join Category on CategoryId=Category.id;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
    select [Order].Id, CompanyName, OrderDate from [Order]
    left join Shipper on EmployeeId=Shipper.id
    where OrderDate < '2012-08-09';
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
    select ProductName, count(ProductName) 
    from Product join [Order]
    on EmployeeId=SupplierId
    where [Order].id=10251;

    
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
    select [Order].id as OrderId, 
    CompanyName as CustomerCompanyName,
    LastName as EmployeeLastName
    from [Order]
    join Employee 
    on Employee.id=EmployeeId
    join Customer
    on Customer.id=CustomerId;