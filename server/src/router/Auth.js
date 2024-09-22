import express from "express"
const route = express.Router();

import * as controllers from "../controllers"

route.get('/alert',controllers.getAlert);

module.exports = route;