const { Router, urlencoded } = require('express');
const router = Router();
const mainController = require('../controllers/main-controller');
const validation = require('../validation/login')
const userGuard = require('../middlewares/user-guard');



router.get('/', userGuard, mainController.home)

router.get('/login', mainController.showLogin)
router.post(
    '/login', 
    urlencoded({
    extended: false
    }),
    validation,
    mainController.login
);



module.exports = router;