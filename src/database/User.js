const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getAllUsers = async () => {
    const allUsers = await prisma.user.findMany()
    return allUsers
}

const getOneUser = async (id) => {
    const oneUser = await prisma.user.findUnique({
        where: {
            id: id
        },
    })
    return oneUser
}

const createNewUser = async (newUser) => {
    const createdUser = await prisma.user.create({
        data: newUser
    })
    return createdUser
}

const deleteUser = async (id) => {
   const deletedUser = await prisma.user.delete({
        where: {
          id: id
        },
      })
    return deletedUser
}

const updateUser = async (id, data) => {
    const updatedUser = await prisma.user.update({
        where: {
          id: id,
        },
        data: data
      })
    return updatedUser
}

module.exports = {
    getAllUsers,
    createNewUser,
    deleteUser,
    updateUser,
    getOneUser
}
