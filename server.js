//create constructors 
const path = require('path');
const express = require('express');
const exsess = require('express-session');
const handles = require('express-handlebars');


const routes = require('./routes');
const sequel = require('./config/connection');
const helpe = require('./utils/helpers');



const sess = {
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
};


// set up handlebars.js engine instance with custom helpers
const hbs = exphbs.create({ helpers });

// set which template engine to use.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


