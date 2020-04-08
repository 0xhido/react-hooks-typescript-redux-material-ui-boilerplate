## Configurations

##### React + TypeScript

`npx create-react-app --template typescript`

##### Eslint + Prettier

[Create react app typescript: eslint and prettier](https://medium.com/@feralamillo/create-react-app-typescript-eslint-and-prettier-699277b0b913) by Alamillo
I've added some changes at:

```
// .eslintrc
...,
"rules": {
  ...,
  "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 80,
        "endOfLine": "auto"
      }
    ],
  ...,
},
...,
```

This will apply Prettier as Eslint error and fix them on save.

##### React Router

`npm i react-router-dom`

- [ ] Make dedicated file for routes?

##### Material UI

I've installed the most common packages:

`npm i @material-ui/core @material-ui/icons`

##### Redux (Persist, Thunk and Logger)

[Set Up a Typescript React Redux Project](https://levelup.gitconnected.com/set-up-a-typescript-react-redux-project-35d65f14b869) by Nick Scialli

`npm i redux react-redux @types/redux @types/react-redux`
`npm i redux-logger @types/redux-logger`

optional (and recommended 😉):

`npm i redux-persist redux-thunk @types/redux-thunk`
