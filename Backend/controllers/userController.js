const User = require('../models/userModel')

module.exports = {
    findOneById: async (req, res) => {
        const { id } = req.params;
        const user = await User.findById(id)
        return res.status(200).json(user)
    },
    findAll: async (req, res) => {
        const users = await User.find()
        return res.status(200).json(users)
    },
    create: async (req, res) => {
        const newUser = new User({ ...req.body })
        const insertedUser = await newUser.save()
        return res.status(201).json(insertedUser)
    },
    deleteUser: async (req, res) => {
        const { id } = req.params;
        const userToDelete = await User.findByIdAndDelete(id)
        return res.status(200).json(userToDelete)
    },
    // findAdministradores: async (req, res) => {
    //     const users = await User.find({ rol: "Administrador" }).exec();
    //     return res.status(200).json(users)
    // },
    // findEmpleados: async (req, res) => {
    //     const users = await User.find({ rol: "Empleados" }).exec();
    //     return res.status(200).json(users)
    // },
    // findClientes: async (req, res) => {
    //     const users = await User.find({ rol: "Clientes" }).exec();
    //     return res.status(200).json(users)
    // }
}