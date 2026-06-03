const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let leads = [
  {
    id: 1,
    name: "Rohit",
    email: "rohit@gmail.com",
    status: "New"
  }
];

// Get all leads
app.get("/leads", (req, res) => {
  res.json(leads);
});

// Add lead
app.post("/leads", (req, res) => {

  const lead = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email,
    status: req.body.status || "New"
  };

  leads.push(lead);

  res.json(lead);
});

// Update status
app.put("/leads/:id", (req, res) => {

  const lead = leads.find(
    l => l.id == req.params.id
  );

  if (lead) {
    lead.status = req.body.status;
    res.json(lead);
  } else {
    res.status(404).json({
      message: "Lead not found"
    });
  }

});

// Delete lead
app.delete("/leads/:id", (req, res) => {

  leads = leads.filter(
    lead => lead.id != req.params.id
  );

  res.json({
    message: "Lead Deleted"
  });

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});