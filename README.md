
<h1> REST API for store </h1>
<p> A simple REST API for retrieving JSON data, written in Express, using Mongo to store data </p>
<p> User can query: </p>
<ul>
  <li> featured<bool> : choose if the received item is feature or not </li>
  <li> company<string> : choose the Company name </li>
  <li> name<string> : choose the item's name </li>
  <li>sort <array<string>>: choose the order to sort received item</li>
  <li>fields<array<string>>: choose list of item's property to receive</li>
</ul>
<p> A few thing to notice: </>
<ul>
  <li> Don't forget to set the MONGO_URI in .env file (for connecting to database) </li>
  <li> Run the populate.js first if you want to save the data in product.json to your database </li>
</ul>
<p> Thank for using my API &#128521 </p>
