// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

/**
 * Define Global Variables
 *
 */

projectData = {};
const weatherMapAPIKey = process.env.OPEN_WEATHER_MAP_API_KEY;
const port = 5500;

/**
 * End Global Variables
 * Start Express Setup
 *
 */
// Setup express app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('website'));

// Spin server
const server = app.listen(port, listening);
function listening(){
    console.log(`running on localhost: ${port}`);
};

/**
 * stop Express Setup
 * Start Helper Functions
 *
 */
/**
 * @description       Add weather data
 * @returns {string}  request
 */
function addWeather (req, res) {
  console.log(req.body);
  projectData = req.body;
  console.log(projectData);
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
/**
 * @description     Get all data
 * @param {string}  Endpoint '/all'
 * @returns {Map}   Return project data map
 */
app.get('/all', function (req, res) {
  console.log(projectData);
  res.send(projectData);
});

/**
 * @description     Post weather data
 * @param {string}  Endpoint '/all'
 * @param {Map}     Request body
 * @returns {Map}   Return project data map
 */
app.post('/', addWeather);

