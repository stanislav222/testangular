const app = require('./app');

var port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server has been started ${port}`));
