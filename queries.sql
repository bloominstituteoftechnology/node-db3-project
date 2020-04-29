 -- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT "Product"."ProductName", "Category"."CategoryName" 
FROM "Product"
JOIN "Category"
ON "Product"."CategoryId" = "Category"."Id";

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT "Order"."Id", "Shipper"."CompanyName", "Order"."OrderDate"
FROM "Order"
JOIN "Shipper"
ON "Order"."ShipVia" = "Shipper"."Id"
WHERE "OrderDate" < "2012-08-09"
ORDER BY "OrderDate" desc;

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT "ProductName", "Quantity" 
FROM "OrderDetail"
JOIN "Product"
ON "OrderDetail"."ProductId" = "Product"."Id"
WHERE "OrderId" = 10251
ORDER BY "ProductName";

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
 SELECT 
	o."Id",
	c."CompanyName",
	e."LastName" "EmployeeLastName"
FROM "Order" AS o
JOIN "OrderDetail" AS od ON od."OrderId" = o."Id"
JOIN "Customer" AS c ON c."Id" = o."CustomerId"
JOIN "Employee" AS e ON e."id" = o."EmployeeId"
LIMIT 16789;