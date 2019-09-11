# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT productName, categoryName FROM [Products] as p JOIN [Categories] as c ON c.categoryId = p.categoryId

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT orderId, orderDate, shipperName FROM [Orders] as o JOIN [Shippers] as s ON s.shipperId = o.shipperId WHERE orderDate<'1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT productName, quantity FROM [OrderDetails] as od JOIN [Products] as p ON p.productId = od.productId WHERE od.orderId = "10251" ORDER BY productName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT orderId, customerName as customer, lastName as orderedBy FROM [Orders] as o JOIN [Customers] as c ON c.customerId = o.customerId JOIN [Employees] as e ON e.employeeId = o.employeeId

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

// lecture examples //

SELECT categoryId, min(price) as Cheapest
FROM [Products]
group by categoryId

--SELECT _ FROM [Customers] as c join orders as o on c.customerId = o.customerid -- 196
-- left join means: give me all records from left table and data you find from right table
SELECT _
FROM [Customers] as c
left join orders as o on c.customerId = o.customerid -- 213

``select o.OrderId as [Order], p.ProductName as Product, p.Price
from orders as o
join orderDetails as od on o.OrderId = od.OrderId
join products as p on od.ProductId = p.ProductId
order by p.Price desc

SELECT c.customerName, c.country, o.orderId, o.orderDate, s.ShipperName
FROM [Orders] as o
join customers as c on o.customerId = c.customerId
join shippers as s on o.ShipperID = s.ShipperID
order by o.customerId

# Database Queries

## Find all customers with postal code 1010

SELECT \* FROM [Customers] WHERE postalcode = 1010

## Find the phone number for the supplier with the id 11

SELECT phone FROM Suppliers WHERE supplierid = 11

## List first 10 orders ever places, descending by the order date

SELECT \* FROM [Orders] ORDER BY OrderDate DESC LIMIT 10

## Find all customers that live in London, Madrid, or Brazil

SELECT \* FROM [Customers] WHERE City = "London" OR City="Madrid" OR Country="Brazil"

## Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"

INSERT into [Customers] (CustomerName, ContactName, Address, City, PostalCode, Country) VALUES ('The Shire', 'Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', '111', 'Middle Earth')

## Update Bilbo Baggins record so that the postal code changes to "11122"

UPDATE [Customers] SET PostalCode=11122 WHERE CustomerName = "The Shire"
