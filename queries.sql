-- Multi-Table Query Practice

-- -- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
-- SELECT productname, categoryname FROM product
-- join category on product.categoryId = category.id;

-- Display the order id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT "order".id, companyname FROM "order"
join shipper on shipper.id = shipper.id
WHERE orderdate < '2012-09-08';

-- -- Display the name and quantity of the products ordered in order with id 10251. Sort by ProductName. Shows 3 records.
-- SELECT productname, quantity FROM orderdetail
-- join product on orderdetail.productId = product.id
-- WHERE orderid = 10251 ORDER BY productname;

-- -- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
-- SELECT "order".id, customer.contactname, lastname FROM "order"
-- join customer on "order".customerid = customer.id
-- join employee on "order".employeeid = employee.id;