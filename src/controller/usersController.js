const userService = require("../services/userServices")


const getAllUsers = async (req, res) => {
    const allUsers = await userService.getAllUsers()
    res.status(200).json({status: "ok", data: allUsers})
}

const getOneUser = async (req, res) => {
    const { id } = req.params
    const oneUser = await userService.getOneUser(Number(id))
    res.status(200).json({status: "ok", data: oneUser})
}

const createNewUser = async (req, res) => {
    const { name, age, email, country } = req.body

    if(!name || !email || !age || !country) {
        res.status(400).json({status: "error", 
                  err: "Completa todos los Campos", 
                  reason:"Falta completar algun campo de texto"
        })
    } 
const idGenerado = Number(String(new Date().getTime()).slice(-7,-1))
    //console.log(idGenerado)
    const newUser = {
        id: idGenerado,
        name: name,
        age: age,
        email: email,
        country: country
    }
        // Servicio de crear usuario
        const createdUser = await userService.createNewUser(newUser)
        res.status(201).json({msg: "Usuario creado correctamente!!", data: createdUser})
    
}

const updateUser = async (req, res) => {
    const { id } = req.params
    const  data  = req.body
    console.log(data)
    await userService.updateUser(Number(id), data)
    //Servicio para editar
    res.status(200).json({msg: "Usuario actualizado!"})
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    await userService.deleteUser(Number(id))
    // Servicio de eliminar usuario
    res.json({msg: "Usuario eliminado!"})
}


module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser
}
