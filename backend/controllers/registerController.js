import Register from '../models/register.js';

export const findAllRegisters = async(req, res) => {
    try {
        const registers = await Register.findAll();
        res.json(registers);
    } catch(error) {
        res.json({message: error.message});
    }
}

export const findRegistersByEducation = async(req, res) => {
    try {
        const registers = await Register.findAll({where: {education: req.params.education}});
        res.json(registers);
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