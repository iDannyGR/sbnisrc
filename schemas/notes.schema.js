const joi = require('joi')

const id = joi.number().integer();
const idSendUser = joi.number().integer();
const type = joi.string();
const title = joi.string().min(3) ;
const note = joi.string();


const createNoteSchema =  joi.object({
    idSendUser:idSendUser.required(),
    type: type.required(),
    title,
    note: note.required()
})

const updateNoteSchema = joi.object({
    id:id.required,
    type,
    title,
    note
})

const getNoteSchema = joi.object({
    id:id.required()
})

const deleteNoteSchema = joi.object({
    id:id.required()
})


module.exports= {createNoteSchema,updateNoteSchema,getNoteSchema,deleteNoteSchema }