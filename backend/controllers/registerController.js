import Register from '../models/register.js';

export const findAllRegisters = async(req, res) => {
    try {
        const registers = await Register.findAll();
        res.json(registers);
    } catch(error) {
        res.json({message: error.message});
    }
}

export const findRegisterById = async(req, res) => {
    try {
        const register = await Register.findByPk(req.params.id);
        res.json(register);
    } catch(error) {
        res.json({message: error.message});
    }
}

export const findRegisterByPhone = async(req, res) => {
    try {
        const register = await Register.findOne(req.params.phone);
        res.json(register);
    } catch(error) {
        res.json({message: error.message});
    }
}

export const findRegisterByEmail = async(req, res) => {
    try {
        const register = await Register.findOne(req.params.email);
        res.json(register);
    } catch(error) {
        res.json({message: error.message});
    }
}

export const findRegistersByLastname = async(req, res) => {
    try {
        const register = await Register.findAll(req.params.lastname);
        res.json(register);
    } catch(error) {
        res.json({message: error.message});
    }
}

export const createRegister = async(req, res) => {
    try {
        const register = await Register.create(req.body);
        res.json(register);
    } catch(error) {
        res.json({message: error.message});
    }
}

export const updateRegister = async(req, res) => {
    try {
        const register = await Register.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json(register);
    } catch(error) {
        res.json({message: error.message});
    }
}

export const deleteRegister = async(req, res) => {
    try {
        const register = await Register.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(register);
    } catch(error) {
        res.json({message: error.message});
    }
}