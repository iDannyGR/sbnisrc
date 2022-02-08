const joi = require('joi')

const id = joi.number().integer();
const name = joi.string().min(3);
const lastName = joi.string().min(3);
const grade = joi.string();
const email = joi.string().email();
const position = joi.string();
const areaId = joi.number().integer();
const password = joi.string().min(8);

const createUserSchema = joi.object({
    name: name.required(),
    lastName : lastName,
    grade: grade,
    email: email.required(),
    position: position.required(),
    password: password.required(),
    areaId: areaId.required()
});

const updateUserSchema= joi.object({
    id: id.required(),
    name,
    lastName,
    grade,
    email,
    position,
    password,
    areaId
});

const getUserSchema = joi.object({
    id: id.required()
});

const deleteUserSchema = joi.object({
    id: id.required()
});

module.exports = {createUserSchema, updateUserSchema,getUserSchema, deleteUserSchema}
