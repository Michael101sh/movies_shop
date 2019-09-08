const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

let users = [];
let nextID = 1;
const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.get("/getUsers", (req, res) => {
  res.send(users);
  console.log("the users in the system are:", users);
});

router.post("/addUser", (req, res) => {
  const { userName, email, phone, website = "" } = req.body;
  const user = { id: nextID, userName, email, phone, website };
  users.push(user);
  nextID++;
  console.log("The user: ", user, " added successfully");
  res.send("ok");
});

app.use("/api", router);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
