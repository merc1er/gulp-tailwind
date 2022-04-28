<div align="center">
  <h3>Gulp + Tailwind + AlpineJS project skeleton</h3>
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
npm start
```

---

### 👨🏻‍💻 Develop

##### Coding style

Use the coding style recommended by [codeguide.co](https://codeguide.co).

##### Structure

- HTML files are located in `/src/`. `.njk` files are templates ([Nunjucks](https://mozilla.github.io/nunjucks/)) files.

- CSS files are located in `/src/css/`.

- JavaScript files are located in `/src/js/`. The files are bundled by webpack. Entry point is `app.js`.


Hit `ctrl + C` to stop the server.

---

### 🚀 Deploy

Run `npm run build`. The `/dist/` folder contains the production website.

