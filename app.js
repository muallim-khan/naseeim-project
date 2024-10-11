const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();

const port = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// style and pics
app.use(express.static('public'))

// route
app.get('/', (req, res) =>{
    res.sendFile('/templates/index.html', {root:__dirname})
})
app.get('/about', (req, res) =>{
    res.sendFile('/templates/about.html', {root:__dirname})
})
app.get('/courses', (req, res) =>{
    res.sendFile('/templates/courses.html', {root:__dirname})
})
// Serve the HTML file
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/contact.html'));
});

app.get('/admin', (req, res)=>{
    res.sendFile('/templates/admin.html', {root: __dirname})
})

// database
app.get('/database', (req, res) => {
    res.sendFile(path.join(__dirname, '/data.json'));
});

app.get('/data', (req, res)=>{
    res.sendFile('/templates/db-data.html', {root: __dirname})
})


// Handle POST request

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Read the existing data from the JSON file
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data.json:', err);
            return res.status(500).send('Internal Server Error');
        }

        const jsonData = JSON.parse(data);

        // Add the new entry
        jsonData.push({ name, email, message });

        // Write updated data back to the JSON file
        fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                console.error('Error writing to data.json:', err);
                return res.status(500).send('Internal Server Error');
            }

          console.log(`wellcome ${name}, your request has been submitted`)
          res.sendFile(path.join(__dirname, 'templates/contact.html'));
        
        });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
