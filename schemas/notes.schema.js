const joi = require('joi')

const id = joi.number().integer();
const userId = joi.number().integer();
const type = joi.string();
const title = joi.string().min(3) ;
const note = joi.string();
const reciberId = joi.number().integer();
const noteId = joi.number().integer();


const createNoteSchema =  joi.object({
  userId:userId.required(),
    type: type.required(),
    title,
    note: note.required()
})

const updateNoteSchema = joi.object({
    id:id.required(),
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

const addUserReciberSchema = joi.object({
  noteId: noteId.required(),
  reciberId: reciberId.required(),
})

module.exports= {createNoteSchema,updateNoteSchema,getNoteSchema,deleteNoteSchema, addUserReciberSchema }
