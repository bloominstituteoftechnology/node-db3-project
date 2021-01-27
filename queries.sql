-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select ProductName, CategoryName from product as p 
join category as c 
on p.categoryId = c.Id
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
Select o.id, s.CompanyName, o.orderdate from [order] as o 
join shipper as s 
where o.orderdate < '2012-08-09'
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select p.ProductName, p.QuantityPerUnit from product as p 
join [order] as o 
where o.id = 10251
group by p.ProductName 
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select o.id, c.CompanyName, e.LastName from [order] as o 
join customer as c 
on o.CustomerId = c.id 
join employee as e 
on o.employeeid = e.Id 
