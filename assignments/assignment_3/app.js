
const express = require('express')
var bodyParser = require('body-parser');

const app = express()
const port = 3000;
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); 
app.use(bodyParser.urlencoded({ extended: true })); 

var users=[{
    "name":"nithin",
    "email":"nithinkuchibotla@gmail.com"
    
},{
    "name":"sai",
    "email":"saikuchibotla@gmail.com"
    
}]
app.get('/', (req, res)=>{
 
    // The render method takes the name of the HTML
    // page to be rendered as input
    // This page should be in the views folder
    // in the root directory.
    res.render('home.ejs',{data:users});
     
    });

    app.get('/form', (req, res)=>{
 
        // The render method takes the name of the HTML
        // page to be rendered as input
        // This page should be in the views folder
        // in the root directory.
        res.render('form.ejs');
        // var temp={"name":req.query.fname, "email":req.query.email}
        // users.push(temp)
        // console.log(req.query);
        
       // res.render('home.ejs',{data:users});
         
        });
        app.post('/user/add',(req,res)=>{
            console.log(req.body)
            var temp={"name":req.body.fname, "email":req.body.email}
            users.push(temp)
            res.render('home.ejs',{data:users});

        })
    app.listen(port, function(err){
        if (err) console.log("Error in server setup")
        console.log("Server listening on Port", port);
    })