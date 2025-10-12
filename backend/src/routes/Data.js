const express = require('express');
const route = express.Router();

const DataController=(require('../app/controller/DataController'))

route.use('/project', DataController.ProjectData)
route.use('/skill', DataController.SkillData)
module.exports = route;