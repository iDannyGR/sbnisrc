const joi = require('joi')

const idReciber = joi.number().integer();
const idNote = joi.number().integer();

const createNoteReciberSchema = joi.object({
    idReciber: idReciber.required(),
    idNote: idNote.required()
});

const getNoteRecibershema = joi.object({
    idNote: idNote.required()
})

const deleteNoteRecibershema = joi.object({
    idReciber: idReciber.required(),
    idNote: idNote.required()
})

module.exports={createNoteReciberSchema, getNoteRecibershema,deleteNoteRecibershema }