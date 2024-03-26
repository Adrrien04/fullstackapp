import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import User from './models/User.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.DB_URI;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const app = new Koa();
const router = new Router();

mongoose.connect(uri, clientOptions, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Could not connect to MongoDB Atlas', err));

router.post('/register', async (ctx) => {
    const { username, password } = ctx.request.body;
    const user = new User({ username, password });
    try {
        await user.save();
        ctx.body = { message: 'User registered successfully' };
    } catch (err) {
        ctx.status = 400;
        ctx.body = { message: err.message };
    }
});

app.use(cors()); // Utilisez @koa/cors ici
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => console.log('Server running on port 3000'));