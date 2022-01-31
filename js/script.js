`use strict`;

// DOM Selectors
const dataContainer = document.querySelector(".tabledata");
const leadOwned = document.querySelector("#searchByLeadOwner");
const selectLeadStage = document.querySelector("#selectLeadStage");
const search = document.querySelector(".search");
const sortByName = document.querySelector(".sortname");
const refresh = document.querySelector(".refresh");

const inputLoginUsername = document.querySelector(".username");
const inputLoginPassword = document.querySelector(".password");
const btnLogin = document.querySelector(".btnLogin");

const loginContainer = document.querySelector(".lg-container");
const loginUser = document.querySelector(".loginuser");
const displayDate = document.querySelector(".display-date");
const cardContainer = document.querySelector(".cd-container");
const tableContainer = document.querySelector(".tb-container");

// User Data
const user1 = {
  fullName: "Admin User",
  password: 0000,
};

const user2 = {
  fullName: "John Doe",
  password: 1111,
};

// User Account 2
const user3 = {
  fullName: "Max Dsouza",
  password: 2222,
};

const users = [user1, user2, user3];

// Creating Username Function
const createUsername = (usrs) => {
  usrs.forEach((user, index, array) => {
    user.username = user.fullName
      .toLowerCase()
      .split(" ")
      .map((element) => {
        return element[0];
      })
      .join("");
  });
};

createUsername(users);
console.log(users);
