const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getAllPosts = async () => {
    const allPosts = await prisma.post.findMany({
        include: {
            author: {
                select:{
                    name: true,
                    id: true
                
                }
            },
            category: {
                select:{
                    id: true,
                    name: true
                }
            }
        }
    })
    return allPosts
}

const getOnePost = async (id) => {
    const onePost = await prisma.post.findUnique({
        where: {
            id: id
        },
        include: {
            author: {
                select:{
                    name: true,
                    id: true
                
                }
            },
            category: {
                select:{
                    id: true,
                    name: true
                }
            }
        }
    })
    return onePost
}

const createNewPost = async (newPost) => {
    const createdPost = await prisma.post.create({
        data:newPost
    })
    return createdPost
}

const deletePost = async (id) => {
   const deletedPost = await prisma.post.delete({
        where: {
          id: id
        },
      })
    return deletedPost
}

const updatePost = async (id, data) => {
    const updatedPost = await prisma.Post.update({
        where: {
          id: id,
        },
        data: data
      })
    return updatedPost
}

module.exports = {
    getAllPosts,
    createNewPost,
    deletePost,
    updatePost,
    getOnePost
}
