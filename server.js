import express from 'express';
import multer from 'multer';
import { merge } from './index.js';

const app = express();
const upload = multer({ dest: 'public/uploads/' })
const port = 3000;

app.use(express.static('./'));

app.get('/', (req, res) => {
    // res.send("Hello World")
    res.sendFile('public/views/index.html', { root: './' }, function (err) {
        if (err) {
            console.log("Error in Home Page: " + err);
        }
    });
})

app.get('/about', (req, res) => {
    res.sendFile(`public/views/about.html`, { root: './' }, function (err) {
        if (err) {
            console.log("Error in About Page: " + err);
        }
    });
})

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
    let filename = await merge(req.files);
    res.redirect('http://127.0.0.1:3000/' + filename);
})

app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
})