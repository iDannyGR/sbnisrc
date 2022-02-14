const { Router } = require('express') ;
const { json } = require('express/lib/response');
const router = Router();
const validatorHandler = require('../middlewares/validator.handler') ;
const { createNoteSchema, updateNoteSchema, getNoteSchema, deleteNoteSchema, addUserReciberSchema } = require('../schemas/notes.schema') ;
const noteService = require('../services/noteService') ;
const service = new noteService;


router.get('/', async(req, res, next)=>{
    try {
        const notes = await service.find();
        res.json(notes);
    } catch (error) {
        next(error)
    }
});


router.get('/:id',validatorHandler(getNoteSchema, 'params'),
 async(req, res, next)=>{
    try {
            const {id}= req.params;
            const note= await service.findOne(id);
            res.json(note);
    } catch (error) {
        next(error);
    }
});

router.post('/', validatorHandler(createNoteSchema,'body'),
    async(req, res, next)=>{
        try {
            const body = req.body;
            const newNote = await service.create(body);
            res.status(201).json(newNote)
        } catch (error) {
            next(error);
        }
})

router.post('/add-employee',
validatorHandler(addUserReciberSchema, 'body'),
async(req, res, next)=>{
  try {
    const body = req.body;
    const addEmployee = await service.addEmployee(body);
    res.status(201).json(addEmployee);
  } catch (error) {
    next(error)
  }
})

router.patch('/',
    validatorHandler(getNoteSchema, 'params'),
    validatorHandler(updateNoteSchema, 'body'),
async(req, res, next)=>{
    try {
    const {id} = req.params;
    const body = req.body;
    const updateNote =await service.update(id, body);
    res.json(updateNote);
    } catch (error) {
        next(error);
    }
})

router.delete('/:id', validatorHandler(deleteNoteSchema, 'params'),
async(req, res, next)=>{
    try {
        const {id} = req.params;
        await service.delete(id);
        res.status(201).json({id});
    } catch (error) {
        next(error)
    }
})

module.exports = router
