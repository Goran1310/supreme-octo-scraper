const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const app = express()
const url = 'https://www.theguardian.com/uk'
const cors = require('cors');
app.use(cors());
app.get('/', function(req, res) {
    res.send('This is the home page')
})
app.get('/results', (req, res) => {
    axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const articles = []
        $('.fc-item__title', html).each(function() {
            const titel = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                titel,
                url
            })
        })
            res.json(articles)
    }).catch(err => console.log(err))
})
app.listen(PORT,  () => console.log(`Server running on port ${PORT}`))
// https://www.youtube.com/watch?v=-3lqUHeZs_0
// https://www.youtube.com/watch?v=1wXYg8Eslnc