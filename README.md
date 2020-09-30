# Reward Store SPA

Front-end of an e-commerce website, where the user can spend funds to buy products, filter them and access a purchase history.

User data, funds, product list and purchase history are fetched from Aerolab`s code challenge API: https://aerolabchallenge.docs.apiary.io/

![GitHub repo size](https://img.shields.io/github/repo-size/jmaladio/Reward-Store?color=%23e91e63&style=for-the-badge)

## Usage

The webapp was developed using React 16 and the Create React App aka CRA boilerplate. Redux manages the global states with Redux Thunk as the middleware, Styled Components is used to style the UI components and Framer Motion does the animations. Testing is done using Jest and Enzime.

If you want to deploy a fullstack webapp with your own backend and db, just change the API endpoints and check the actions file.

## Develop, Build and Deploy

In order to start working with the app, NodeJS 12.18.4 or more is needed.
Fork and clone the repo, cd to the main folder ans install dependencies:

```
npm install
```

In order to start the development server:

```
npm start
```

Finally, to get a production-ready build:

```
npm run build
```

## To-do list

- [x] CRA - README.md - Repo
- [ ] Define visual organization and UI components on AdobeXD
- [ ] Update README.md with the design system
- [ ] Tweek the development enviroment and set API endpoints and authorization token
- [ ] Define global states and implement React Redux and Redux Thunk
- [ ] Build main UI components
- [ ] Build the layout and the main views accordingly to the defined visual heriarchy
- [ ] Add basic media queries.
- [ ] Connect components and views with redux states
- [ ] Write the logic of the filters
- [ ] Develop the presentational logic of Card component and User view
- [ ] Implement animations
- [ ] Testing
- [ ] Deploy to gh-pages
