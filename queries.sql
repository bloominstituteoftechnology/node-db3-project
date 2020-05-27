-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT p.product_name, c.category_name FROM Products as p
INNER JOIN Categories as c ON p.category_id = c.category_id;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o.order_id, s.company_name, o.shipped_date FROM Orders as o
INNER JOIN Shippers as s ON o.ship_via = s.shipper_id
WHERE o.shipped_date < '2012-08-09'
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select p.product_name, o.quantity from order_details as o
INNER JOIN products as p ON p.product_id = o.product_id
WHERE o.order_id = 10251
ORDER BY p.product_name DESC
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.order_id, c.company_name, e.last_name FROM orders AS o
INNER JOIN customers as c ON o.customer_id = c.customer_id
INNER JOIN employees as e ON o.employee_id = e.employee_id