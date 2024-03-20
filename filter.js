const fs = require("fs");


function findUser(username) {
  const userDb = fs.readFileSync("./users.json", "utf8");
  //console.log("rawText", rawText);
  const users = JSON.parse(userDb);
  return users.find((user) => user.username === username);
}
// const user = findUser(username) : User | null;

module.exports = {
  findUser
};


