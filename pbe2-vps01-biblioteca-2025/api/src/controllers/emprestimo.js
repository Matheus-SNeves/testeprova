const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const emprestimo = await prisma.emprestimo.create({
            data: req.body
        });
    } catch (e) {
        res.status(400).json(e).end()
    }
}

const read = async (req, res) => {
    const emprestimo = await prisma.emprestimo.findMany();
    res.json(emprestimo).end();
}

const readOne = async (req, res) => {
    const emprestimo = await prisma.emprestimo.findMany({
        where : { id: Number(req.params.id)},
        include: {
            aluno: true,
            livro: true
        }
    });
    res.json(emprestimo).end();
}

const update = async (req, res) => {
    try {
        const emprestimo = await prisma.emprestimo.update({
            data: req.body,
            where: {
                id: {id: Number(req.params.id)}
            }
        });
    } catch (e) { 
        res.status(400).json(e).end() 
    }

}

const remove = async (req, res) => {
    try {
        const emprestimo = await prisma.emprestimo.delete({
            data: req.body,
            where: {
                id: {id: Number(req.params.id)}
            }
        });
    } catch (e) { 
        res.status(400).json(e).end() 
    }

}

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
}