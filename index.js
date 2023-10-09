import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res) => {

    const today = new Date("June 24,2023 11:15:00");
    const day = today.getDay();

    //console.log(day);
    let type="a Weekday";
    let adv = "work hard brother";

    if(day === 0 || day === 6){
        type="the Weekdend";
        adv = " ITS TIME TO RELAX";
    }
    else{
       type="a Weekday";
       adv = "work hard brother"; 
    }
   res.render("index.ejs",{
    daytype:type,
    advice:adv,
   });
});

app.listen(port, () => {
    console.log(`Running on Port ${3000}`)
})

