const joi = require('joi');

const id = joi.number().integer();
const name = joi.string().min(3);

const createAreaSchema = joi.object({
    name: name.required(),
});

const updateAreaSchema= joi.object({
    id: id.required(),
    name,
})

const getAreaSchema = joi.object({
    id: id.required()
});

const deleteAreaSchema = joi.object({
    id: id.required()
});

module.exports = {createAreaSchema, updateAreaSchema,getAreaSchema, deleteAreaSchema}
