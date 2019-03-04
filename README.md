# NewsApiExpress

NewsApiExpress is a simple express/node app consuming the 3 endpoints of the news api.

Packages used;   
- axios
- express
- dotenv
- nodemon

## Installation & Set up
Clone the repo and install all dependencies;
>  git clone https://github.com/justmesam/newsApiExpress.git  
> cd newsApiExpress  
npm i

 Create an account with news api [here](https://newsapi.org/) to get an API_KEY.   
 Now update the `.env`(environment file) by after running `cp .env-sample .env`

## Usage
You can consume the `NewsApiExpress ` api using a single endpoint which is `/api/news/:news-api-endpoint`;  
 __Example__

> For getting the sources, simply do;&nbsp;&nbsp;&nbsp;&nbsp; GET /api/news/sources  
> For getting the everything, simply do;&nbsp;&nbsp;&nbsp;&nbsp; GET /api/news/everything  
> For getting the top-headlines, simply do;&nbsp;&nbsp;&nbsp;&nbsp; GET /api/news/top-headlines

### Consuming with parameters
 __Example__
> For getting the everything with extra queries/parameters, simply do;<br/> &nbsp;&nbsp;&nbsp;&nbsp; GET /api/news/everything?q=bitcoin  
> For getting the top-headlines with extra queries/parameters, simply do;<br/> &nbsp;&nbsp;&nbsp;&nbsp; GET /api/news/top-headlines?country=us  
> For getting the sources with extra queries/parameters, simply do;<br/> &nbsp;&nbsp;&nbsp;&nbsp; GET /api/news/sources?language=en&
