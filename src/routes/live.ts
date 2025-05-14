import { getLiveUrl } from "../controllers/live";
const express = require('express');
const router = express.Router();
router.get('/liveurl', getLiveUrl);
module.exports = router;
