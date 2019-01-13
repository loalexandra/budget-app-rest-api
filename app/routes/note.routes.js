module.exports = (app) => {
  const notes = require('../controllers/note.controller.js');

  // Create a new Note
  app.post('/notes', notes.create);

  // Retrieve all Notes
  app.get('/notes', notes.findAll);

  // Retrieve all Notes by month
  // example: GET /notesByMonth/2019-01 for January 2019
  app.get('/notesByMonth/:month', notes.findAllByMonth);

  // offset & limit
  app.get('/offset=:offset&limit=:limit', notes.offsetAndLimit);

  // Retrieve a single Note with noteId
  app.get('/notes/:noteId', notes.findOne);

  // Update a Note with noteId
  app.put('/notes/:noteId', notes.update);

  // Delete a Note with noteId
  app.delete('/notes/:noteId', notes.delete);
};
