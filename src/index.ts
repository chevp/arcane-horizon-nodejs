import express from 'express';

const app = express();
const port = 3000;

interface Service { name: String, port: Number };

let services = Array<Service>();

app.get('/', (req, res) => res.send('Welcome to Node.js and TypeScript!'));

app.get('/registry', (req, res) => res.sendFile('index.html', {root: __dirname }));

app.get('/register', (req, res) => {
    let found = false;
    for (let i=0; i<services.length; i++)
    {
        if (services[i].name == String(req.query.name))
        {
            services[i].port = Number(req.query.port);
            found = true;
            break;
        }
    }
    if (!found)
    {
        services.push({ name: String(req.query.name), port: Number(req.query.port) });
    }
    res.send({ error: false, status: 200, 
        message: 'service name='+req.query.name+ ' port='+req.query.port+' succefully registred!'});
});

app.get('/services', (req, res) => {
    res.send(services);
});

app.get('/service-list.html', (req, res) => res.sendFile('service-list.html', {root: __dirname }));

app.get('/style.css', (req, res) => res.sendFile('style.css', {root: __dirname }));

app.get('/font-awesome-4.3.0/css/font-awesome.min.css', (req, res) => res.sendFile('/font-awesome-4.3.0/css/font-awesome.min.css', {root: __dirname }));

app.get('/font-awesome-4.3.0/fonts/fontawesome-webfont.woff2', (req, res) => res.sendFile('/font-awesome-4.3.0/fonts/fontawesome-webfont.woff2', {root: __dirname }));

app.get('*', (req, res) => {
    res.status(404).send({error: true, status: 404, message: 'Not Found'});
});

app.listen(port, () => {
    return console.log(`node_server ts-node-gateway is listening on ${port}`);
});

export default app;
