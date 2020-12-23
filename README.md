<div align="center">
  <h3>Gulp + Tailwind project skeleton</h3>
</div>

---

### Table of contents

- [Run the develoment server](#-run-the-develoment-server)
- [Contribute](#-contribute)
- [Deployment](#-deployment)

---

### 💻 Run the develoment server

You will need [nodeJS](https://nodejs.org/en/) installed on your machine, then run:

```shell
npm install
npx gulp
```

---

### 👨🏻‍💻 Develop

##### Coding style

Use the coding style recommended by [codeguide.co](https://codeguide.co).

##### Structure

- HTML files are located in `/src/`. `.njk` files are templates ([Nunjucks](https://mozilla.github.io/nunjucks/)) files.

- CSS files are located in `/src/css/`.

- JS files are located in `/src/js/`. The files are concatenated in alphabetical order unless specified otherwise.


Hit `ctrl + C` to stop the server.

---

### 🚀 Deploy

Run `npx gulp build`. The `/dist/` folder contains the production website.

