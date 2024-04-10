const express = require("express");
const fs = require("fs");

const app = express();

//Basic Node js server ---> Task-1
app.listen(3000, () => {
    console.log("Server is running on the port 3000");
});

//inputs to the function ----> Task-2
const arr = [1, 2, 3, 4, 5];
//function that returns sum of elements in an array
const Sumofnum = (acc,num) => {
    return acc + num;
}

app.get("/", async (req, res) => {
    //logging the sum in the main route
    const result = arr.reduce(Sumofnum);
    console.log(result);
    //Asynchronous file handling ----> Task-3

    function WordsCount(data){
        const words = data.split(/\s+/);
        return words.length;
    }

    fs.readFile('data.txt', 'utf-8', (err, data) =>{
        if(err) {
            console.log("Error while reading file:", err);
            return;
        }
        
        let count = WordsCount(data);
        console.log('Total num of words:', count);
    })
    res.send("Hello world");
})
