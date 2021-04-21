
module.exports =  (app) => {
     const notes = require('../controller/node.controller')

    // get all notes
    app.get('/notes',notes.index)

    // create new notes
    app.post('/notes',notes.create)

    // single note
    app.get('/notes/:noteId',notes.show)

    // update notes
    app.put('/notes/:noteId',notes.update)

    // delete notes
    app.delete('/notes/:noteId',notes.delete)
}