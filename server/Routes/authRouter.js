const { logout } = require("../controllers/Logout");
const { loginVictim, meVictim } = require("../controllers/VictimLogin");
const { registerVictim } = require("../controllers/VictimRegister");

const router = require("express").Router();

// victim routes

// login
router.post("/login-victim", loginVictim);

//register
router.post("/register-victim", registerVictim);

//MeVictim
router.get("/me-victim", meVictim);

// volunteerRoutes
const {
  loginVolunteer,
  meVolunteer,
} = require("../controllers/VolunteerLogin");
const { registerVolunteer } = require("../controllers/VolunteerRegister");

// login
router.post("/login-volunteer", loginVolunteer);

//register
router.post("/register-volunteer", registerVolunteer);

//MeVolunteer
router.get("/me-volunteer", meVolunteer);

//logout
router.post("/logout", logout);

module.exports = router;
