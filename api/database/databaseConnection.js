var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/blog-test'

mongoose.connect(dburl);
mongoose.connection.on('connected', function(){
    console.log('Mongoose connected to ' + dburl);
});

mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});

mongoose.connection.on('error', function(err){
    console.log('Mongoose connected: ' + err);
});

process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected throught app termination(SIGINT)');
        process.exit(0);
    })
});

process.on('SIGINTERM', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected throught app termination(SIGINTERM)');
        process.exit(0);
    });
});

process.once('SIGUSR2', function() {
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected throught app termination(SIGUSR2)');
        process.kill(process.pid, 'SIGUSR2');
    });
});

require('./article-model.js');
