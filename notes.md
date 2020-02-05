TABLE1:
id table1_name
1 City1
2 City2

TABLE2:
id table2_name table1_id
1 Steve 1
2 Bob 2
3 Susan 1
4 Kyle 1
5 Frank 2

Foreign Key: table1_id, in TABLE2, from above.

example:
select d.id, d.table2_name, e.id, e.table1_name
from TABLE1 as e
join TABLE2 as d
on e.table1_id

return('TABLE2 as t')

///Users ("main" table)
username
name1
name2
name3

///Posts ("secondary" table)
user_id contents
--3 ------ asdf
--1 ------ asdf
--1 ------ asdf

function findDataFromFirstTable(id){
...do some stuff...
}

// finding posts
select p.id, p.name, u.username, p.contents
from posts as p
join users as u
== on u.id = p.user_id

function findDataFromSecondTable(id){
== return db('posts as p')
// retrieve information from 'posts' table, referencing them as 'p'
==== .join('users as u', 'u.id', 'p.user_id')
// joins user.id and p.user_id together, referencing Users table as 'u'
==== .select('p.id', 'p.name', 'u.username', 'p.contents')
==== .where({user_id: id});

//
From knexjs.org...
//
.join(/table,/first,[operator],/second)
-> /table = the joining table
-> /first, /second = first, second column
-> [operator] = '=', etc...

ex:

select 'users'.'id', 'contacts'.'phone'
from 'users'
join 'contacts'
on 'users'.'id' = 'contacts'.'user_id'
============================
knex('users') ======= "from 'users'"
.join('contacts','users.id','=','contacts.user_id')
.select('users.id', 'contacts.phone')
