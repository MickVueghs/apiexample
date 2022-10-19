const express = require('express');
const router = express.Router();
const Campus = require('./models/campus');

router.get('/', (req, res) => {
    console.log(`/route called`);
    res.send(
        '<h1>Welcome to my API, these are the available routes:</h1>'

        + '<h2>/</h2>'
        + 'Where you are right now'

        + '<hr/>'

        + '<h2>/campus</h2>'
        + 'Returns all campuses in the database using .find()'

        + '<hr/>'

        + '<h2>/campus/:id</h2>'
        + 'Returns one single campus in the database using .findById(objectId)'
        + '<br><br>'
        + 'Uses req.params.id, which means the id is passed in the url'
        + '<br><br>'
        + '/campus/6346a60a397af47f5383af47 returns the campus with id 6346a60a397af47f5383af47'

        + '<hr/>'
        
        + '<h2>/campus/create</h2>'
        + 'Adds one single campus to the database using .create({data})'
        + '<br><br>'
        + 'Uses req.body, which means an object is passed'
        + '<br><br>'
        + '/api/campus/add adds the campus to the database'
        + '<br><br>'
        + 'Since we can`t pass a body in our browser, this path only works when called via code/postman' 

        + '<hr/>'

        + '<h2>/campus/update/:id</h2>'
        + 'Updates one single campus in the database using .findByIdAndUpdate(objectId, {$set;})'
        + '<br><br>'
        + 'Uses req.params.id, which means the id is passed in the url'
        + '<br><br>'
        + 'Also uses req.body, which means an object is passed'
        + '<br><br>'
        + '/campus/update/6346a60a397af47f5383af47 updates the campus with 6346a60a397af47f5383af47 with the data passed in req.body'
        + '<br><br>'
        + 'Since we can`t pass a body in our browser, this path only works when called via code/postman' 

        + '<hr/>'

        + '<h2>/campus/delete/:id</h2>'
        + 'Deletes one single campus from the database using .findByIdAndDelete(objectId)'
        + '<br><br>'
        + 'Uses req.params.id, which means the id is passed in the url'
        + '<br><br>'
        + '/campus/delete/6346a60a397af47f5383af47 deletes the campus with id 6346a60a397af47f5383af47 with the data passed in req.body'
        + '<br><br>'
        + 'Please only delete campus you added'

        + '<hr/>'
    );
})


router.get('/campus', async (req, res) => {
    console.log(`/campus route called`);
    try {
        res.json(await Campus.find());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/campus/:id', async (req, res) => {
    console.log(`/campus/:id route called`);
    try {
        res.send(await Campus.findById(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/campus/create', async (req, res) => {
    console.log(`/campus/create route called`);
    try {
        res.send(await Campus.create(req.body));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/campus/update/:id', async (req, res) => {
    console.log(`/campus/update/:id route called`);
    try {
        res.send(await Campus.findByIdAndUpdate(req.params.id, {$set: req.body}));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/campus/delete/:id', async (req, res) => {
    console.log(`/campus/delete/:id route called`);
    try {
        res.send(await Campus.findByIdAndDelete(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router