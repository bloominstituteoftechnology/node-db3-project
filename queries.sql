-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT ProductName, cat.CategoryID
FROM Products as prod
LEFT JOIN Categories as Cat
on prod.CategoryID = cat.CategoryID


SELECT ord.OrderID, ship.ShipperName, ord.OrderDate
FROM Orders as ord
LEFT JOIN shippers as ship
ON ord.ShipperID = ship.ShipperID
Where ord.OrderDate < '2012-08-09'
Order by ord.OrderDate 

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT prod.ProductName, ordeats.quantity, ordeats.OrderID
FROM Products as prod
JOIN OrderDetails as ordeats
on prod.ProductID = ordeats.ProductID
where ordeats.OrderID = 10251
GROUP BY prod.ProductName
ORDER BY prod.ProductName


-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.


-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
