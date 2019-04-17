# Preact Splash Page Boilerplate

[Getting Started](#getting-started)

[Deployment - Joyent Elastic Cloud](#deployment)

### Intro

🕊️ This is a simple light weight boilerplate with Preact and powered by Webpack. It aims for static splash pages or social bounce pages that need to be very light and don't require complexity like routes or global states.
<br />

This boilerplate includes:

- [Preact](https://preactjs.com/) (chosen for the small lib size)
- [Babel](https://babeljs.io/) (ES6 and JSX transpile)
- [SASS](https://sass-lang.com/)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
  <br />

<a name="getting-started"></a>

## Getting Started

### Installation

Clone the project and go into the directory

```sh
git clone https://github.com/nicohsieh/preact-splash-page-boilerplate.git my-splash-page
cd my-splash-page
```

Make it yours!

```sh
rm -rf .git && git init && npm init
```

Install the dependencies

```sh
npm install
```

<br />

### Development

Start a webpack dev server at `:8000`

```sh
npm start
```

Build production code into `dist` folder

```sh
npm run build
```

Start a local server at `dist` folder at `:8080` to check the build

```sh
npm run start:dist
```

---

### License

MIT

<a name="deployment"></a>

## Deployment - Joyent Elastic Cloud

Project includes a Dockerfile that will build a fully functional image. You will need Docker infrastructure installed in your local environment.

`npm run docker`

Next, push the image from local to Docker Hub, and then pull it to Joyent Triton. You will need the Triton-Docker infrastructure installed and setup in your local environment.

`npm run docker:triton`

Run the docker image in the cloud with:

`npm run triton:run`

Triton will launch the Container with a random instance name. Joyent provides a [CNS](https://docs.joyent.com/public-cloud/network/cns/usage#using-triton-cns-in-docker) means of handling web traffic to the new instance's IP. Set it to the existing service `rap-app-dns` like so:

`triton instance tag set -w <instance_name> triton.cns.services=rap-app-dns`

Now you can safely delete the previous instance, and rename the new one:

`triton instance delete red-ad-production`
`triton instance rename <instance_name> red-ad-production`
