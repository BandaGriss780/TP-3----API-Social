const User = require("../database/Post")


const getAllPosts = () => {
    const allPosts =  User.getAllPosts()
    return allPosts
}

const getOnePost = (id) => {
    const onePost = User.getOnePost(id)
    return onePost
}

const createNewPost = (newPost) => {
    const createdPost = User.createNewPost(newPost)
    return createdPost
}

const updatePost = (id, data) => {
    const posteoActualizado = User.updatePost(id, data)
    return posteoActualizado
}

const deletePost = (id) => {
    const deletedPost = User.deletePost(id)
    return deletedPost
}


module.exports = {
    getAllPosts,
    getOnePost,
    createNewPost,
    deletePost,
    updatePost
}