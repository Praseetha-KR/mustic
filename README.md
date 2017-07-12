# mustic
> 📱🎶 Device as music stick

[![Build Status](https://travis-ci.org/Praseetha-KR/mustic.svg?branch=master)](https://travis-ci.org/Praseetha-KR/mustic)
[![Coverage Status](https://coveralls.io/repos/github/Praseetha-KR/mustic/badge.svg)](https://coveralls.io/github/Praseetha-KR/mustic?branch=master)
[![Dependency Status](https://david-dm.org/Praseetha-KR/mustic.svg?maxAge=2592000)](https://david-dm.org/Praseetha-KR/mustic)
[![devDependencies Status](https://david-dm.org/Praseetha-KR/mustic/dev-status.svg)](https://david-dm.org/Praseetha-KR/mustic?type=dev)

**Mustic** is an Experimental app which takes input from the *Device Orientation API* and gives to *Web Audio API*. Basically what it does is listening to the orientation change, combines the (alpha, beta, gamma) value to produce frequency for the audio output.

<img src="screenshot.jpg" width="200">



## Getting started
### Setting up Dev

Install local dependencies from project's root folder:
```
yarn
```
`gulp-cli` is required as global npm dependency.

### Building

For the initial build:
```
npm run build
```

Watch for build changes:
```
npm run dev
```


### Testing

To run test:
```
npm test
```

Watch for test changes:
```
npm run test-watch
```

Generate test coverage report:
```
npm run test-coverage
```

### Running
```
npm start
```
This will start the server up and running at [http://localhost:5000](http://localhost:5000)

## Demo
> ### ⚠️ Warning
> This app's generated sound is not optimized. **The sound is really creepy** which might affect your ear/brain, please be aware!! ..and keep mobile volume down if you are testing.

#### [Demo](https://praseetha-kr.github.io/mustic/) - works only in mobile devices
