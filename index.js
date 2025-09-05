const express = require("express");
const { apiroute } = require("./routes");

const app = express();
app.use(express.json());

app.use("/api", apiroute);

app.listen(process.env.PORT, () => {
  console.log("Server is up......");
});
