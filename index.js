const express = require('express');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const courseName = require('./data/courseName.json');
const courseDetails = require('./data/courseDetails.json');

app.get('/', (req, res) => {
  res.send('Explore Tech Server is Running')
});


app.get('/course-title', (req, res) => {
  res.send(courseName);
});


app.get('/allCourse', (req, res) => {
  res.send(courseDetails);
});


app.get('/course/:id', (req, res) => {
  const id = req.params.id;
  const courseTopic = courseDetails.filter(cd => cd.categoryId === id);
  res.send(courseTopic);
});

app.get('/details/:id', (req, res) => {
  const id = req.params.id;
  const selectedCourse = courseDetails.find(cd => cd.id === id)
  res.send(selectedCourse)
});


app.listen(port, () => {
  console.log('Explore Tech is running on port:', port)
});