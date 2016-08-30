# **Weather Project Notes**

The solution was built using the following:

* client side web/SPA app using **React**
* server side microservice using **Azure Functions**

### **User Guide**

**Web Project**
 
 You can access the web project running live via this URL: [Pactera Weather App](http://pacteraweather.herokuapp.com/) (hosted on Heroku). *Please note that as this is a free Heroku "dyno" it may take 10+ seconds for the web server to spin up and present a web page after you enter the URL, so please be patient. Once the web app is running response times are excellent*.
 
Getting the current weather for either of the 3 nominated cities is simple. Just choose a city from the drop-down box on the web page and wait for the response to be returned from the server. The results will be displayed in a grid, as per the following screen shot.

![](/images/ui.png)

### **High Level Solution Diagram**

![](/images/high-level.png)

### **Assumptions**

* the server side is stateless and does not persist any data
* client/server communication is via **https**, however no functionality was included to secure the Azure microservice app key. This could be added via a mechanism such as JSON Web Token (JWT).



 
 
 
 
 
 
