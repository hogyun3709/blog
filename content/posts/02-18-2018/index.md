---
title: "ES6 Main Features"
cover: "https://unsplash.it/1280/500/?random?BoldMage"
author: "hogyun"
date: "02/18/2018"
category: "tech"
tags:
    - Javascript
---
#### Explains the main features of ES6 comparing to ES5


> ###### *Note: Following concepts will be cover*

- Block Scopes, Let, and Const keywords
- Arrow Functions and Enhanced Object Literals
- De-structuring and Extended Parameter Handling(Default, Rest, Spread)
- Modules and Classes


It's been a decade for using **RESTful API** to send data over HTTP with structured access resources in web application development industry. By using a 'stateless protocol', the **server** does not store any state of **client session** on server side. This allows to scale down thousands of concurrent users.  

However, REST api has shown its shortcomings to catch up huge requirements of the clients which is mainly "inefficiency of data fetching".

### Data Fetching Issue

Lets suppose the client wants the data of a **post** with the **writer's name** and its **followers**.

> **RESTful API**

![alt text](./es-6.jpg)

The picture shows the Rest api retrieves every information of client's request with multiple endpoints. When client throws GET method with resources, the server returns followed datas.

> **GraphQL**

![alt text](./data-fetch-graphql.png "graphql image")

Since graph"QL" is Query Language, client throws specific query to server, clients receive matched datas from server. With this predefined query structure, graphql prevents over and underfetching.


- This post referenced by [es6-features.org](http://es6-features.org/)
