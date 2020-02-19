-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
```
Select p.ProductName, c.CategoryName from Product p join Category c on p.CategoryId = c.id;

```

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
```
Select o.Id as 'Order ID',s.CompanyName as 'Shipper CompanyName' from [Order] as o join Shipper as s on o.ShipVia = s.id where o.OrderDate < '2012-08-09'

```
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
```
Select p.ProductName as 'Product Name',od.Quantity as 'Quantity' from [Order]as o join OrderDetail as od on o.id = od.OrderId join Product as p on od.ProductId = p.id

where o.id = 10251;

```
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
```
Select o.id as 'OrderID', c.CompanyName, e.LastName from [Order]as o join Customer as c on o.CustomerId = c.id join Employee as e on o.EmployeeId = e.id

```
