const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);

app.use("/api/dishes", require("./routes/dishRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
