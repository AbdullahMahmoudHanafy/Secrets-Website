import express from 'express';
import axios from 'axios';

const port = 3000;
const app = express();

app.use(express.static("public"));

app.listen(port, console.log(`working on port number ${port}`));