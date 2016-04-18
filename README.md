# Shakespeare's World

A full-text transcription web app, written for the Folger Library.

---

## Commands

To install, clone the repo and run `npm install`

To develop locally, run `npm start`. Your browser will automatically be opened and directed to the browser-sync proxy address, and the server will serve files from the `/build` directory. Any changes in the `/app` directory will be automatically processed by Gulp, and the changes injected to any open browsers pointed at the proxy address.

__NOTE__: this app wasn't developed against staging, so while there is a staging app for testing auth, it _probably won't work otherwise_. To get it running locally as expected, run `NODE_ENV=production npm start`;

To deploy to [http://preview.zooniverse.org/folgerdemo/](http://preview.zooniverse.org/folgerdemo/) run `npm run deploy-alpha`.

To deploy to [http://preview.zooniverse.org/shakespearesworld/](http://preview.zooniverse.org/shakespearesworld/) run `npm run deploy-staging`.

To deploy to [https://shakespearesworld.org/](http://shakespearesworld.org) run `npm run deploy-production`.


---

## Built using:

- AngularJS
- Gulp
- Browserify
- Stylus
- Nib
- Bootstrap

## Conventions

- [johnpapa's AngularJS Style Guide](https://github.com/johnpapa/angular-styleguide)
- [Gulp best practices](https://github.com/greypants/gulp-starter)
- [RSCSS](https://github.com/rstacruz/rscss)
- [Semantic Versioning](http://semver.org)
- [Keep A Changelog](http://keepachangelog.com/)
