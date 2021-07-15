const fs = require("fs");
const startHTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet">
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossorigin="anonymous"
    />
    <link href="./style.css" rel="stylesheet" />
    <style>  body {background: linear-gradient(0.25turn, #424349, #3f87a6);font-family:'Merriweather', serif; ;}
</style>
    <title>Team Roster</title>
  </head>
  <body class="container">
    <header class="border p-3 mb-4 bg-secondary row rounded-pill">
      <h1 class="text-center text-white">PROJECT TEAM</h1>
    </header>
    <main class="row justify-content-center">
     `;

function updateHTML(employee) {
  const name = employee.name;
  const id = employee.id;
  const email = employee.email;
  const role = employee.getRole();
  let newHTML;
  if (role === "Manager") {
    newHTML = `<div class="col-3 shadow rounded mx-3 my-3">
        <div class="bg-primary row">
          <h4>${name}</h4>
          <h5>${role}</h5>
        </div>
        <div class="bg-light row">
          <p class="border border-danger">Employee ID: ${id}</p>
          <p class="border border-danger">Email: ${email} </p>
          <p class="border border-danger">Office Number: ${employee.getOfficeNumber()}</p>
        </div>
        </div>`;
  } else if (role === "Engineer") {
    newHTML = `<div class="col-3 shadow rounded mx-3 my-3">
        <div class="bg-primary row">
          <h4>${name}</h4>
          <h5>${role}</h5>
        </div>
        <div class="bg-light row">
          <p class="border border-danger">Employee ID: ${id}</p>
          <p class="border border-danger">Email: ${email} </p>
          <p class="border border-danger">Github Profile: ${employee.getGithub()}</p>
        </div>
        </div>`;
  } else if (role === "Intern") {
    newHTML = `<div class="col-3 shadow rounded mx-3 my-3">
        <div class="bg-primary row">
          <h4>${name}</h4>
          <h5>${role}</h5>
        </div>
        <div class="bg-light row">
          <p class="border border-danger">Employee ID: ${id}</p>
          <p class="border border-danger">Email: ${email} </p>
          <p class="border border-danger">School: ${employee.getSchool()}</p>
        </div>
        </div>`;
  }

  fs.appendFile("./dist/team.html", newHTML, function (err) {
    if (err) console.log("Failed to create employee");
  });
}

let endHTML = `  </main>
  </body>
</html>`;

module.exports = { startHTML, updateHTML, endHTML };
