var express = require("express");
var router = express.Router();

const Activity = require("../models/activities");

router.get("/", (req, res) => {
  Activity.find({})
    .then((activities) => {
      res.json({ result: true, activities: activities });
    })
    .catch((error) => {
      res.json({ result: false, error: error.message });
    });
});

router.post("/", (req, res) => {
  const newActivity = new Activity({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  });

  newActivity
    .save()
    .then((newDoc) => {
      res.json({ result: true, activity: newDoc });
    })
    .catch((error) => {
      res.json({ result: false, error: error.message });
    });
});

router.delete("/", (req, res) => {
  const activityId = req.body.activityId;

  Activity.findByIdAndDelete(activityId)
    .then((deletedActivity) => {
      if (deletedActivity) {
        res.json({ result: true });
      } else {
        res.json({ result: false, message: "Activité non trouvée" });
      }
    })
    .catch((error) => {
      res.json({ result: false, error: error.message });
    });
});

module.exports = router;
