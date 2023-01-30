let express = require('express');
let app = express();

app.get('/', (req, res) => {
    return res.send('done by Kiran')
})
app.listen(5000, function() {
    console.log("Server Started on 5000")
})