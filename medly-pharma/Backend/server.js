const express = require("express");
const cors = require("cors");
const multer = require("multer"); // Import multer
require("./db/config");
const Admin = require("./db/Admin/Admins");

// const vendor= require('./db/Vendor/Vendors');
const users = require("./db/User/Users");
const items = require("./db/Admin/Additem");
const Wishlist = require("./db/User/Wishlist");
const myorders = require("./db/User/myorders");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

// Set up Multer for file upload
const storage = multer.diskStorage({
  destination: "uploads", // The directory where uploaded files will be stored
  filename: function (req, file, callback) {
    callback(null, Date.now() + "-" + file.originalname); // Set the file name
  },
});

const upload = multer({ storage });
app.use("/uploads", express.static("uploads"));

// Admin //
//  login api
app.post("/alogin", (req, resp) => {
  const { email, password } = req.body;
  Admin.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        return resp.json({
          Status: "Success",
          user: { id: user.id, name: user.name, email: user.email },
        });
      } else {
        resp.json("login fail");
      }
    } else {
      resp.json("no user");
    }
  });
});

// Register Api
app.post("/asignup", (req, resp) => {
  const { name, email, password } = req.body;
  Admin.findOne({ email: email })
    .then((use) => {
      if (use) {
        resp.json("Already have an account");
      } else {
        Admin.create({ email: email, name: name, password: password })
          .then((result) => resp.json("  Account Created"))
          .catch((err) => resp.json(err));
      }
    })
    .catch((err) => resp.json("failed "));
});

// ITEMS
app.post("/items", upload.single("itemImage"), async (req, res) => {
  const { itemtype, description, price, userId, userName } = req.body;
  const itemImage = req.file.path; // The path to the uploaded image

  try {
    const item = new items({
      itemtype,
      description,
      price,
      itemImage,
      userId,
      userName,
    });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: "Failed to create item" });
  }
});
app.get("/item", async (req, res) => {
  try {
    const images = await items.find();
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.get("/getitem/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const tasks = await items.find({ userId }).sort("position");
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});
app.delete("/useritemdelete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await items.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
// Single item
app.get("/item/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const item = await items.findById({ _id: id });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/itemdelete/:id", (req, res) => {
  const { id } = req.params;
  items
    .findByIdAndDelete(id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
});

// User //
//  login api
app.post("/ulogin", (req, resp) => {
  const { email, password } = req.body;
  users.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        return resp.json({
          Status: "Success",
          user: { id: user.id, name: user.name, email: user.email },
        });
      } else {
        resp.json("login fail");
      }
    } else {
      resp.json("no user");
    }
  });
});

// Register Api
app.post("/usignup", (req, resp) => {
  const { name, email, password } = req.body;
  users
    .findOne({ email: email })
    .then((use) => {
      if (use) {
        resp.json("Already have an account");
      } else {
        users
          .create({ email: email, name: name, password: password })
          .then((result) => resp.json("  Account Created"))
          .catch((err) => resp.json(err));
      }
    })
    .catch((err) => resp.json("failed "));
});

app.get("/getusers", (req, res) => {
  users
    .find()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.delete("/userdelete/:id", (req, res) => {
  const { id } = req.params;
  users
    .findByIdAndDelete(id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
});

// User orders
app.post("/userorder", async (req, res) => {
  const {
    flatno,
    city,
    state,
    pincode,
    totalamount,
    seller,
    sellerId,
    BookingDate,
    description,
    Delivery,
    userId,
    userName: String,
    itemname,
    itemImage,
  } = req.body;

  try {
    const bike = new myorders({
      flatno,
      city,
      state,
      pincode,
      totalamount,
      seller,
      sellerId,
      BookingDate,
      description,
      userId,
      Delivery,
      userName: String,
      itemname,
      itemImage,
    });
    await bike.save();
    res.status(201).json(bike);
  } catch (err) {
    res.status(400).json({ error: "Failed to create policy" });
  }
});

app.get("/getorders/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const tasks = await myorders.find({ userId }).sort("position");
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

app.get("/orders", (req, res) => {
  myorders
    .find()
    .then((orders) => {
      res.status(200).json(orders);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});
app.delete("/userorderdelete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await myorders.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

//wishlist
app.post("/items", upload.single("itemImage"), async (req, res) => {
  const { itemtype, description, price, userId, userName } = req.body;
  const itemImage = req.file.path; // The path to the uploaded image
  try {
    const item = new wishlist({
      itemtype,
      description,
      price,
      itemImage,
      userId,
      userName,
    });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: "Failed to create item" });
  }
});

app.post("/add", async (req, res) => {
  const { userId, itemId } = req.body;

  try {
    const wishlistItem = new Wishlist({ userId, item: itemId });
    await wishlistItem.save();
    res.json({ message: "Item added to wishlist" });
  } catch (error) {
    res.status(500).json({ error: "Error adding item to wishlist" });
  }
});

// Get a user's wishlist
app.get("/user/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const wishlist = await Wishlist.find({ userId }).populate("item");
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ error: "Error fetching wishlist" });
  }
});

app.listen(8000, () => {
  console.log("listening at 8000");
});
