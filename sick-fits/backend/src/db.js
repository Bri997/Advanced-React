//THis files connect to the remote prisma DB and gives the ability to query it with JS
const { Prisma } = require("prisma-binding");

const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: process.env.Prisma_ENDPOINT,
  secret: process.env.Prisma_SECRET,
  debug: false
});

module.exports = db;
