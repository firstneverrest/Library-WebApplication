const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

// set up middleware
// when enter /graphql, give the control to graphqlHTTP
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true // this make /graphql be beautiful GUI
  })
);

// server listen client at port 4000
app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
