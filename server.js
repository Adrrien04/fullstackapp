import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import User from './models/User.js';
import House from './models/House.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';



dotenv.config();

const uri = process.env.DB_URI;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const app = new Koa();
const router = new Router();

mongoose.connect(uri, clientOptions, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

router.post('/register', async (ctx) => {
    const { username, password } = ctx.request.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    try {
        await user.save();
        ctx.body = { message: 'User registered successfully' };
    } catch (err) {
        ctx.status = 400;
        ctx.body = { message: err.message };
    }
});

router.post('/login', async (ctx) => {
    console.log('Login request:', ctx.request.body);
    const { username, password } = ctx.request.body;
    const user = await User.findOne({ username });
    if (!user) {
        console.log('User not found:', username);
        ctx.status = 400;
        ctx.body = { message: 'User not found' };
        return;
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        console.log('Invalid password for user:', username);
        ctx.status = 400;
        ctx.body = { message: 'Invalid password' };
        return;
    }
    console.log('Logged in successfully:', username);
    ctx.body = { message: 'Logged in successfully' };
});
router.get('/houses', async (ctx) => {
    try {
        console.log('Fetching houses...');
        const houses = await House.find();
        console.log('Fetched houses:', houses);
        ctx.body = houses;
    } catch (err) {
        console.error('Error fetching houses:', err);
        ctx.status = 400;
        ctx.body = { message: err.message };
    }
});
app.use(cors());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => console.log('Server running on port 3000'));