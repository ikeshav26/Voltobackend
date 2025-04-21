import express from 'express';
const router = express.Router();


router.get('/signup', (req, res) => {
    res.send('plz signup!');
});

export default router;