const { editNoteByIdHandler } = require('./handler');
const { deleteNoteByHandler } = require('./handler');
const {addNoteHandler, getAllNotesHandler, getNoteByIdHandler} = require('./handler');
const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    },
    {
      method: 'GET',
      path: '/notes',
      handler: getAllNotesHandler,
    },
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: getNoteByIdHandler,
    },
    {
      method: 'PUT',
      path: '/notes/{id}',
      handler: editNoteByIdHandler,
    },  
    {
      method: 'DELETE',
      path: '/notes/{id}',
      handler: deleteNoteByHandler
    }
  ]
  
  module.exports = routes;
  