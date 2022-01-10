# ecommerce-app (basic)

Using React to build a simple SPA, 'eCommerce' style, for practise.

* Written using class based components
* Uses fake REST API - utilises a JSON file as a db (`json-server`)
* React routing (`react-router-dom`)
* Bootstrap - CSS library 
* Font Awesome icons
* AJAX requests

## User Features
* Navigation bar with links to each page
* Login page with basic validation
* Customer list
* A 'shopping cart'
  * list of all products and the details are fetched from a fake REST API
  * product quantities
  * adjustable product quantities
* 404 Page

## Usage
* Clone this repository, then run: `npm install`
* Start json-server at port 5000:
  * `cd data`
  * `json-server react-db.json --watch --port=5000`
* To run app:
  * `cd ..`
  * `npm start`
  
