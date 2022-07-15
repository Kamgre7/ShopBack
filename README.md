## Megak_shop - backend

#### Megak_shop is a shop application created using node + express + typescript + mysql database. Code was formetted using eslint with airbnb-typescript configuration.

Project is a backend api for megak_shop application which use:
- PRODUCT - recaives data from the database, get all products, one product, insert new product, delete or update product
- CATEGORY -  recaives data from the database, get all categories, one category, insert new category
- CART - user items which add to shopping cart, validated and returned to FE - FE stored items in localStorage and next is validate in BE
- images - folder for images added from form  
- megak_shop.sql - example of database (folder utils)



#### Packages:
- express
- cors
- multer
- mysql2
- uuid
- eslint - airbnb configuration 
- ts-node
- typescript


## TODO:
- register and login with JTW Authentication
- admin panel - add/delete/update products, table of all users, can block user
- user panel - adding address, changing information about user
- user/admin data to database
- filter products by name/category/price 
- unit testing 
- refactor code
