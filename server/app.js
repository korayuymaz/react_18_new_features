const express = require("express");
const morgan = require("morgan");

const characterRouter = require("./routes/characterRoutes");

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(express.static('public'));
app.use('/images', express.static('images'));

app.use(express.json());

// 3) ROUTES
app.use("/api/characters", characterRouter);
// app.use('/api/v1/users', userRouter);

module.exports = app;
