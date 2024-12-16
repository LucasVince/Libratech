const dotenv = require('dotenv');
dotenv.config();

const { connectToDB } = require('../server/DB/connect.js');
const express = require('../server/modules/express.js');

connectToDB();