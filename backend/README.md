# My Pokemon Team | Backend

This project is an API for My Pokemon Team, a challenge to practive fullStack development.

You can read more about the challenge <a href="https://www.linkedin.com/feed/update/urn%3Ali%3Aactivity%3A6956323125886087168" target="_blank">here</a>, including a documentation with the specifications to develop the app, if you want to challenge yourself.

## Running the project locally

After cloning the repository, you should configure the `.env` file copying the `.env.example` in a `.env` and passing the variables, install the dependencies with `yarn` or `npm install`.

With the database environment configured in `.env` file, run `yarn prisma migrate dev` or `npx prisma migrate dev` to create the database for the app.

Finally you can run `yarn dev` or `npm run dev` to start the API server locally.

## Other scripts available

`yarn build` or `npm run build`: build the production package, converting typescript to javascript, so Node can run it.


`yarn start` or `npm run start`: start the production package with Node instead of Typescript dev compilators.

### Documentation

Check the project's requirements <a href="./README/checklist.md" target="_blank">here</a>.

OpenAPI documentation: With the project running, go to <a href="http://localhost:3333/docs" target="_blank">/docs</a>.
