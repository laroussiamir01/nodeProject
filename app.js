const express = require('express');
const connectDB = require('./db')
const Product = require('./product');
const User = require('./user');
const Evenement = require('./evenement');
const Offer = require('./offer');
const Student = require('./student');

const app = express();
app.use(express.json());



app.get('/', async (req, res) => {

        res.send("Hello UP Web " );
    
    
});

app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
app.get('/evenements', async (req, res) => {
    try {
        const evenements = await Evenement.find();
        res.json(evenements);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
app.get('/offers', async (req, res) => {
    try {
        const offers = await Offer.find();
        res.json(offers);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});


app.get('/products/:id', async (req, res) => {    //http://localhost:3000/products/1
    try {
        const product = await Product.findById(req.params.id);
        if (!product) throw new Error('Product not found');
        res.json(product);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});



app.post('/products', async (req, res) => {    //http://localhost:3000/products/1
    try {
        const {name, price, quantity} = req.body;
        const product = new Product({name, price, quantity});
        await product.save();
        res.status(201).json({success: true});
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
app.post('/users', async (req, res) => {    //http://localhost:3000/products/1
    try {
        const {name, email, password} = req.body;
        const user = new User({name, email, password});
        await user.save();
        res.status(201).json({success: true});
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
app.post('/evenements', async (req, res) => {    //http://localhost:3000/products/1
    try {
        const {name, address, description} = req.body;
        const evenement = new Evenement({name, address, description});
        await evenement.save();
        res.status(201).json({success: true});
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
app.post('/offers', async (req, res) => {    //http://localhost:3000/products/1
    try {
        const {name, post, skills} = req.body;
        const offer = new Offer({name, post, skills});
        await offer.save();
        res.status(201).json({success: true});
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
app.post('/students', async (req, res) => {    //http://localhost:3000/products/1
    try {
        const {name, cin, phoneNumber} = req.body;
        const student = new Student({name, cin, phoneNumber});
        await student.save();
        res.status(201).json({success: true});
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});


app.put('/products/:id', async (req, res) => {    //http://localhost:3000/products/1
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!product) throw new Error('Product not found');
        res.json({success: true});
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});


app.delete('/products/:id', async (req, res) => {    //http://localhost:3000/products/1
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) throw new Error('Product not found');
        res.json({success: true});
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});


module.exports = app;