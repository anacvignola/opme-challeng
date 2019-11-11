This repository was created to solve the challenge of a junior developer vacancy ReactJS.

Challenge Instructions:

1. Create an API that will proxy all client requests to the appropriate GitHub endpoint. The
following endpoints must be provided:
• GET - /api/users?since={number}
This endpoint must return a list of GitHub users and the link for the next page.
• GET - /api/users/:username/details
This endpoint must return the details of a GitHub user
• GET - /api/users/:username/repos
This endpoint must return a list with all user repositories
2. (optional) Create tests for your application covering all endpoints.
3. Create a screen that will list all users from GitHub and will display their Id and Login.
Remember, you can’t list all users at once you will have to use pagination.
4. Using the screen created in step 3, create a new screen that will display the details of a user
(Id, Login, Profile URL and the date of the login creation).
5. On the details screen (created on step 4) add a table that will display the public repositories
of the user, this table must contain the id, name, and URL to the repository

## :rocket: Technologies

This project was developed with the following technologies:

-  [Node.js][nodejs]
-  [Express](https://expressjs.com/)
-  [ReactJS](https://reactjs.org/)
-  [React Router v4](https://github.com/ReactTraining/react-router)
-  [styled-components](https://www.styled-components.com/)
-  [axios](https://github.com/axios/axios)
-  [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] or higher + [Yarn][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/anacvignola/opme-challenge

# Go into the repository
$ cd opme-challenge

# Install dependencies
$ yarn install

# Start the backend server
$ yarn start
```

It is also available on Heroku [here](link).

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
