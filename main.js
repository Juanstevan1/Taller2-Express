const app = require('./config/app'); 

const pokeneaRoutes = require('./src/routes/pokeneaRoutes');

app.use('/', pokeneaRoutes);

app.listen(app.get('port'), () => {
    console.log(`Server initialized eat port ${app.get('port')}`);
});