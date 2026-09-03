// Local / traditional-host entry point (Render, Railway, etc.)
// Run with: node server.js
const app = require("./app");

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
