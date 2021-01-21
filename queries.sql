-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select productName, CategoryName
from product 
join Category 
group by ProductName
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select s.companyName, d.orderid, o.orderdate
from shipper s 
join OrderDetail d
join 'order' o
where o.orderdate < '2012-08-09'
group by orderdate;
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select p.productName,d.orderid, d.quantity
    from Product p, orderDetail d
    where d.orderid = 10251
    group by p.productName;
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
