const postServices = require("../services/postServices")


const getAllPosts = async (req, res) => {
    const allPosts = await postServices.getAllPosts()
    res.status(200).json({status: "ok", data: allPosts})
}

const getOnePost = async (req, res) => {
    const { id } = req.params
    const onePost = await postServices.getOnePost(Number(id))
    res.status(200).json({status: "ok", data: onePost})
}

const createNewPost = async (req, res) => {
    const { title, content, categoryId, authorId, published } = req.body

    if(!title || !content || !authorId ) {
        res.status(400).json({status: "error", 
                  err: "Completa todos los Campos", 
                  reason:"Falta completar algun campo de texto"
        })
    } 
const idGenerado = Number(String(new Date().getTime()).slice(-7,-1))
    //console.log(idGenerado)
    const newPost = {
        id: idGenerado,
        title: title,
        content: content,
        categoryId: categoryId,
        authorId: authorId,
        published: published 
    }
        // Servicio de crear usuario
        const createdPost = await postServices.createNewPost(newPost)
        res.status(201).json({msg: "Posteo creado correctamente!!", data: createdPost})
    
}

const updatePost = async (req, res) => {
    const { id } = req.params
    const  data  = req.body
    console.log(data)
    await postServices.updatePost(Number(id), data)
    //Servicio para editar
    res.status(200).json({msg: "Posteo actualizado!"})
}

const deletePost = async (req, res) => {
    const { id } = req.params
    await postServices.deletePost(Number(id))
    // Servicio de eliminar usuario
    res.json({msg: "Posteo eliminado!"})
}


module.exports = {
    getAllPosts,
    getOnePost,
    createNewPost,
    updatePost,
    deletePost
}
