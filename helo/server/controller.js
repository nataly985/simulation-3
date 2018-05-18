module.exports = {
    create: (req, res) => {
        const db = req.app.get('db');
        const { username, password } = req.body;
// create a new user in the db
        db.create_user([req.params.id])
          .then(() => res.status(201).send(req.user))
          .catch(() => res.status(404).send('Not found'))
    },
    create: (req, res ) => {
        const db = req.app.get('db');
        const { username, password } = req.body;
  //pull the user with the matching info
        db.matching_user([req.params.id])
           .then(() => res.status(200).send(req.body))
           .catch(() => res.status(404).send('Not found'))

    },
    read: (req, res) => {
        const db = req.app.get('db');

        db.read_user([req.params.id, req.query.desc])
           .then(() => res.status(200).send('all good'))
           .catch(() => res.status(400).send('Not found'))
    },

   
    update: (req, res ) => {

    },
    delete: (req,res) => {
        const db = req.app.get('db');
        const { params } = req;

        db.user([params.id])
        .then(() => res.status(204).send('No content'))
        .catch(() => res.status(404). send('No found'))
    }
}