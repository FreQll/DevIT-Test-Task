const express = require("express");
const { getRequests } = require("../controllers/RequestController");
const router = express.Router();

router.get("/", getRequests);

module.exports = router;
