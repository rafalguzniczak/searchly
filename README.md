# searchly
GitHub repository search web application

Live: https://rafalguzniczak.github.io/searchly/

Search phrase from url with:
https://rafalguzniczak.github.io/searchly/?phrase=test

# Setup

## Requirements:

- node version 16+
- npm version 7+

Install dependencies:

`npm ci`

## Development:

Run application (start server and watch changes):

`npm run dev`

Run unit tests:

`npm run test`

## Production:

Build production bundle:

`npm run build`

## Technology Stack:

- React 17
- React Context - Used becouse requires less configuration and lower entry barrier than Redux. It's also build-in React feature (smaller bundle size). 
- Jest + Enzyme - simple configuration and widely used (big community and good documentation). It also has all necessary testing tools (assertion library, test runner and mocks).
- Typescript - easier to read and debug code. Can save the application from bugs by type checking code. 
- ESlint - watches over the code standard and adjusting it to the style guidelines.
- Parcel bundler - Quick and easy configuration.

## TODO:
- add debounce for fetching when typing
- add query params support for sorting
- clear results when field has been cleared 
- show no results message
- add results pagination and limit per page
- link repository name and owner page
