const { Router } = require('express') ;
const router = Router();
const validatorHandler = require('../middlewares/validator.handler') ;
const { createAreaSchema, updateAreaSchema, getAreaSchema, deleteAreaSchema } = require('../schemas/area.schema') ;
const areaService = require('../services/areaService') ;
const service = new areaService;


router.get('/', async(req, res, next)=>{
    try {
        const area = await service.find();
        res.json(area);
    } catch (error) {
        next(error)
    }
});


router.get('/:id',validatorHandler(getAreaSchema, 'params'),
 async(req, res, next)=>{
    try {
            const {id}= req.params;
            const area= await service.findOne(id);
            res.json(area);
    } catch (error) {
        next(error);
    }
});

router.post('/', validatorHandler(createAreaSchema,'body'),
    async(req, res, next)=>{
        try {
            const body = req.body;
            const newArea = await service.create(body);
            res.status(201).json(newArea)
        } catch (error) {
            next(error);
        }
})

router.patch('/',
    validatorHandler(getAreaSchema, 'params'),
    validatorHandler(updateAreaSchema, 'body'),
async(req, res, next)=>{
    try {
    const {id} = req.params;
    const body = req.body;
    const updateArea =await service.update(id, body);
    res.json(updateArea);
    } catch (error) {
        next(error);
    }
})

router.delete('/:id', validatorHandler(deleteAreaSchema, 'params'),
async(req, res, next)=>{
    try {
        const {id} = req.params;
        await service.delete(id);
        res.status(201).json({id});
    } catch (error) {
        next(error)
    }
})

module.exports = router;
