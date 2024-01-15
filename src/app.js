const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Set the view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Corrected the property to 'views'

app.get('/', (req, res)=> {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});