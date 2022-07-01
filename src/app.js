const express =require("express");
const app=express();
const hbs =require("hbs");
const port= process.env.PORT || 3000;
const path  = require("path");

const staticPath=path.join(__dirname,"../public");
const template_path= path.join( __dirname,"/templates/views");
const partialsPath =path.join(__dirname,"/templates/partials");
console.log(partialsPath);
console.log(template_path);
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("",(req,res)=>{
    res.render("index");
});


app.get("/weather",(req,res) => {
    res.render("weather")
});

app.get("*",(req,res) => {
    res.render("404error",{
    errormsg : "OOPS Page not found"
    })
});


app.listen(port, () => {
    console.log(`listening to  ${port}`);
})