-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

select CategoryName, ProductName from product join category on product.CategoryId = category.id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select id, CompanyName from [Order] join Shipper on [Order].ShipVia = Shipper.Id where OrderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT ProductName, Quantity FROM OrderDetail JOIN Product ON OrderDetail.ProductId = Product.Id WHERE OrderId = 10251 ORDER BY ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT id, CompanyName, LastName FROM [Order] JOIN Customer ON [Order].CustomerId = Customer.Id JOIN Employee ON [Order].EmployeeId = Employee.Id;
