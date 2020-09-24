-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT "ProductName", "CategoryName"
FROM "Product"
JOIN "Category"
ON Product.Category.Id = Category.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o.Id, s.CompanyName
FROM "Order" as o
JOIN "Shipper" as s 
ON o.ShipVia = s.Id
WHERE o.OrderDate < "2012-08-09"

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT p.ProductName, od.Quantity
FROM OrderDetail as od on od.OrderId = o.Id
JOIN Product as p on on od.ProductId = p.Id
WHERE o.Id = 10251
ORDER by p.ProductName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.id as OrderId, 
    c.CompanyName as CompanyName, 
    e.LastName as EmployeeLastName
FROM "Order" as o
JOIN "Customer" as c on o.CustomerId = c.Id
JOIN "Employee" as e on o.EmployeeId = e.id