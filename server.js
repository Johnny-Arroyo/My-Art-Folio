/*const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("public/index.html", (error, data) => {
    if (error) {
      res.writeHead(404);
      res.write("Error: File Not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, (error) => {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
*/

const express = require("express");
const path = require("path");
const mime = require("mime");

const app = express();
const port = 3000;

//Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//Start the server
app.listen(port, (error) => {
  if (error) {
    console.log("Something went wrong, error");
  } else {
    console.log(`Server running on port ${port}`);
  }
});
