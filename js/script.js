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
const mainHeader = document.querySelector("#main-header");
const mainFooter = document.querySelector("#main-footer");

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

// Lead Data
const leadData = [
  {
    personName: "Mark Johnson",
    emailAddress: "mark@example.com",
    phoneNumber: 8945637285,
    organization: "Abc Technologies",
    leadStage: "Closed Booked",
    leadOwner: "Admin User",
  },

  {
    personName: "Jacob Thornton",
    emailAddress: "jacob@example.com",
    phoneNumber: 4657298750,
    organization: "Efg Technologies",
    leadStage: "Closed Booked",
    leadOwner: "John Doe",
  },

  {
    personName: "Steve Smith",
    emailAddress: "steve@example.com",
    phoneNumber: 8934015674,
    organization: "Hij Technologies",
    leadStage: "Shortlisted",
    leadOwner: "John Doe",
  },

  {
    personName: "Mitchelle Johnson",
    emailAddress: "mitchelle@example.com",
    phoneNumber: 7845093400,
    organization: "Klm Technologies",
    leadStage: "Pipeline",
    leadOwner: "Max Dsouza",
  },

  {
    personName: "Kevin Thomas",
    emailAddress: "kevin@example.com",
    phoneNumber: 9087608840,
    organization: "Nop Technologies",
    leadStage: "Prospect",
    leadOwner: "Max Dsouza",
  },

  {
    personName: "Kane Williamson",
    emailAddress: "kane@example.com",
    phoneNumber: 6821097780,
    organization: "Qrs Technologies",
    leadStage: "Prospect",
    leadOwner: "Admin User",
  },

  {
    personName: "Shane Watson",
    emailAddress: "shane@example.com",
    phoneNumber: 9005638750,
    organization: "Tuv Technologies",
    leadStage: "Pipeline",
    leadOwner: "John Doe",
  },

  {
    personName: "Kieron Pollard",
    emailAddress: "kieron@example.com",
    phoneNumber: 7850092490,
    organization: "Wxyz Technologies",
    leadStage: "Pipeline",
    leadOwner: "Admin User",
  },

  {
    personName: "Mitchelle Starc",
    emailAddress: "mitchelle@example.com",
    phoneNumber: 8967008432,
    organization: "Acd Technologies",
    leadStage: "Prospect",
    leadOwner: "John Doe",
  },

  {
    personName: "John Miller",
    emailAddress: "john@example.com",
    phoneNumber: 9640882390,
    organization: "Bcx Technologies",
    leadStage: "Closed Booked",
    leadOwner: "Max Dsouza",
  },

  {
    personName: "Glen Maxwell",
    emailAddress: "glen@example.com",
    phoneNumber: 7560998234,
    organization: "Prs Technologies",
    leadStage: "Shortlisted",
    leadOwner: "Admin User",
  },

  {
    personName: "Trent Boult",
    emailAddress: "trent@example.com",
    phoneNumber: 8099654060,
    organization: "Dgs Technologies",
    leadStage: "Shortlisted",
    leadOwner: "Max Dsouza",
  },
];

// Current year for the Copyright
$("#year").text(new Date().getFullYear());

// Implementing Login

let currentUserAccount;

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  currentUserAccount = users.find((user) => {
    return (
      user.username === inputLoginUsername.value &&
      user.password === Number(inputLoginPassword.value)
    );
  });

  console.log(currentUserAccount);
  if (currentUserAccount?.password === Number(inputLoginPassword.value)) {
    inputLoginUsername.value = inputLoginPassword.value = "";
    loginContainer.classList.add("d-none");

    setTimeout(() => {
      loginUser.textContent = `Welcome ${currentUserAccount.fullName}`;
      $(function () {
        $(mainHeader).fadeIn(2000);
        $(cardContainer).fadeIn(2000);
        $(tableContainer).fadeIn(2000);
        mainFooter.classList.remove("fixed-bottom");
      });
    }, 1000);
  }
});

// Data Initialization
const init = (data) => {
  dataContainer.innerHTML = "";
  data.forEach((arrayElement, index, array) => {
    const result = `<tr>
  <th scope="row">${index + 1}</th>
  <td>${arrayElement.personName}</td>
  <td>${arrayElement.emailAddress}</td>
  <td>${arrayElement.phoneNumber}</td>
  <td>${arrayElement.organization}</td>
  <td>${arrayElement.leadStage}</td>
  <td>${arrayElement.leadOwner}</td>
  </tr>`;

    dataContainer.insertAdjacentHTML("beforeend", result);
  });
};

init(leadData);

// Implementing - Search Lead Data By Lead Owner

search.addEventListener("click", (e) => {
  e.preventDefault();

  if (!leadOwned.value) return init(leadData);

  const filteredData = leadData.filter((leads) => {
    return (
      leads.leadOwner ===
      leadOwned.value
        .split(" ")
        .map((arrayElement, index) => {
          return arrayElement[0].toUpperCase() + arrayElement.slice(1);
        })
        .join(" ")
    );
  });

  console.log(filteredData);

  dataContainer.innerHTML = "";

  filteredData.forEach((arrayElement, index) => {
    const result = `<tr>
      <th scope="row">${index + 1}</th>
      <td>${arrayElement.personName}</td>
      <td>${arrayElement.emailAddress}</td>
      <td>${arrayElement.phoneNumber}</td>
      <td>${arrayElement.organization}</td>
      <td>${arrayElement.leadStage}</td>
      <td>${arrayElement.leadOwner}</td>
      </tr>`;

    dataContainer.insertAdjacentHTML("beforeend", result);
  });
});

// Implementing - Sort Lead Data By Person Name
sortByName.addEventListener("click", (e) => {
  e.preventDefault();

  const sortedData = leadData.slice().sort((a, b) => {
    if (a.personName < b.personName) return -1;
    if (a.personName > b.personName) return 1;
    return 0;
  });

  dataContainer.innerHTML = "";
  sortedData.forEach((arrayElement, index) => {
    const result = `<tr>
      <th scope="row">${index + 1}</th>
      <td>${arrayElement.personName}</td>
      <td>${arrayElement.emailAddress}</td>
      <td>${arrayElement.phoneNumber}</td>
      <td>${arrayElement.organization}</td>
      <td>${arrayElement.leadStage}</td>
      <td>${arrayElement.leadOwner}</td>
      </tr>`;
    dataContainer.insertAdjacentHTML("beforeend", result);
  });
});
