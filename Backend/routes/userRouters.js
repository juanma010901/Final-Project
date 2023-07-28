const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const User = require('../models/userModel');

router.get('/', userController.findAll);
router.get('/:id', userController.findOneById);
router.post('/', userController.create);
router.delete('/:id', userController.deleteUser);
// router.get('/administradores', userController.findAdministradores);
// router.get('/empleados', userController.findEmpleados);
// router.get('/clientes', userController.findClientes);

module.exports = router;
