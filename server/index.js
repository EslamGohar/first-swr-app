const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const data = [
  {
    name: "Kim Doe",
    age: 23,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mary Jane",
    age: 25,
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Ken Joe",
    age: 24,
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    name: "John Doe",
    age: 27,
    avatar: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    name: "Tami Kean",
    age: 26,
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Monica Pan",
    age: 29,
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];

app.use("/", (req, res) => {
  res.json(data);
});

app.listen(3001, () => {
  console.log("App listening on port 3001");
});
