# MC INFO - MERN-STACK PROJECT JULY 20024

## INSTALLATION

```bash
BE: npm init -y
    npm i express  mongoose body-parser cors jsonwebtoken dotenv bcryptjs
    npm i -D nodemon
    app.listen(8061)
    "start": "nodemon index.js"

    add gitignore file (-> gitignore.io / node)


FE: npx create-react-app .
    "start": "PORT=3061 react-scripts start"

    "https://tailwindcss.com/docs/guides/create-react-app"
    npm install -D tailwindcss
    npx tailwindcss init

    npm install --save-dev @babel/plugin-proposal-private-property-in-object

    npm i react-router-dom axios react-icons  

    "https://www.npmjs.com/package/react-toastify"
    npm install --save react-toastify
    
    "https://react-redux.js.org/introduction/getting-started"
    "https://handsonreact.com/docs/redux-thunk"
    npm i redux react-redux redux-thunk 
    "https://www.npmjs.com/package/redux-devtools-extension"
    npm install --save redux-devtools-extension
    npm install redux-devtools-extension --legacy-peer-deps


root: git init 
      

```

## IMPORTANT NOTES

1. BE >> MVC structure // modules-controllers-routes
        config // dbConnection
        .env // PORT, MongoDb

2. Auth >> BE register, login, logout

3. FE >> folders => hooks, components, containers, redux ((actions, reducers, store.js)), pages
