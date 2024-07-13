import express from 'express';
import axios from 'axios';

const port = 3000;
const app = express();

app.use(express.static("public"));

app.get("/", async (req, res) => {

    try {
        const response = await axios.get('https://secrets-api.appbrewery.com/random');
        let secret = response.data.secret, user = response.data.username;

        res.render("index.ejs", {secret: secret, user: user});
    } catch (error) {
        console.error(error);
    }
})

app.listen(port, console.log(`working on port number ${port}`));