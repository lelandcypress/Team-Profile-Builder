const fs = require("fs");
const startHTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossorigin="anonymous"
    />
    <link href="./style.css" rel="stylesheet" />
    <title>Team Roster</title>
  </head>
  <body class="container bg-info">
    <header class="border p-3 mb-4 bg-secondary row">
      <h1 class="text-center text-white">PROJECT TEAM</h1>
    </header>
    <main class="row justify-content-center">`;

let endHTML = `  </main>
  </body>
</html>`;

module.exports = { startHTML, endHTML };
