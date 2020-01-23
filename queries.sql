-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.  
Select Product.ProductName, Category.CategoryName 
From Product
Join Category
on Product.CategoryId = Category.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
-- Select o.id, shipper.companyname, o.OrderDate
-- from [order] as o
-- join shipper
-- on o.id = o.id
-- where orderdate < '2012-08-09' 
SELECT id, companyname
FROM [order] as o
JOIN customer as c
ON customerid = c.id
WHERE orderdate < '2012-08-09'


-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT productname, quantity
FROM orderdetail
JOIN product as p 
ON productid = p.id
JOIN [order] as o
ON orderid = o.id
WHERE o.id = 10251
order By productname

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select [order].id as OrderID, c.Companyname, e.LastName as 'Employee Last Name'
from [order]
JOIN customer as c
ON customerid = c.id
JOIN employee as e
ON employeeid = e.Id