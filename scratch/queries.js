'use strict';

const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config');

const Note = require('../models/notes');


mongoose.connect(MONGODB_URI, { useNewUrlParser:true })
  .then(() => {
    const searchTerm = 'boring';
    const searchContent = 'cat';

    return Note.find({ '$or': [
      { title: {$regex: searchTerm} }, 
      { content: {$regex: searchContent}}
    ]}).sort({ updatedAt: 'desc' });
  })
  .then(results => {
    console.log(results);
  })
  .then(() => {
    return mongoose.disconnect();
  })
  .catch(err => {
    console.error(`ERROR: ${err.message}`);
    console.error(err);
  });


/*
mongoose.connect(MONGODB_URI, { useNewUrlParser:true })
  .then(() => {
    const searchId = '000000000000000000000006';
    return Note.findById(searchId);
  })
  .then(results => {
    console.log(results);
  })
  .then(() => {
    return mongoose.disconnect();
  })
  .catch(err => {
    console.error(`ERROR: ${err.message}`);
    console.error(err);
  });

*/

/*
mongoose.connect(MONGODB_URI, { useNewUrlParser:true })
  .then(() => {
    const newObject = {title: 'asdasdasdsad', content: 'sadasdasds'};
    return Note.create(newObject);
  })
  .then(results => {
    console.log(results);
  })
  .then(() => {
    return mongoose.disconnect();
  })
  .catch(err => {
    console.error(`ERROR: ${err.message}`);
    console.error(err);
  });
  */
/*
mongoose.connect(MONGODB_URI, { useNewUrlParser:true })
  .then(() => {
    const id = '000000000000000000000007';
    const modifiedObject = Note.findById(id);
    const newObject = {title: 'aaaaaaa'};

    return Note.updateOne(newObject);
  })
  .then(results => {
    console.log(results);
  })
  .then(() => {
    return mongoose.disconnect();
  })
  .catch(err => {
    console.error(`ERROR: ${err.message}`);
    console.error(err);
  });
  */
/*
mongoose.connect(MONGODB_URI, { useNewUrlParser:true })
  .then(() => {
    const id = '000000000000000000000007';
    const deletedObject = Note.findById(id);
    return Note.deleteOne(deletedObject);
    
  })
  .then(results => {
    console.log(results);
  })
  .then(() => {
    return mongoose.disconnect();
  })
  .catch(err => {
    console.error(`ERROR: ${err.message}`);
    console.error(err);
  });
  */