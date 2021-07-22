export const appendApiKey = link => `https://apidojo-forever21-v1.p.rapidapi.com/${link}?rapidapi-key=62aeaca5e3msh89a9cdf68421fd7p192629jsn6fd9ceedcd4f`;

export const getProducts = category => `https://apidojo-forever21-v1.p.rapidapi.com/products/list?rapidapi-key=62aeaca5e3msh89a9cdf68421fd7p192629jsn6fd9ceedcd4f&category=${category}&page=1`;

export const buildUrl = rawUrl => `https://www.forever21.com/images/default_330/${rawUrl}`;

export const searchProducts = query => `https://apidojo-forever21-v1.p.rapidapi.com/products/search?rapidapi-key=62aeaca5e3msh89a9cdf68421fd7p192629jsn6fd9ceedcd4f&query=${query}`