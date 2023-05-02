const router = require('express').Router()
const Bread = require('../models/bread')

//GET all bread
router.get('/',(req, res)=>{
    res.render('index',{
        breads: Bread
    })
})

//GET speific bread
router.get('/:index', (req, res) =>{
    const { index } = req.params
    res.render('show', {
        bread: Bread[index]
    })
    //send(Bread[index])
})

router.post('/', (req,res) => {
    if(req.body.hasGluten === 'on'){
        req.body.hasGluten = true
    } else {
        req.body.hasGluten =false
    }
    Bread.push(req.body)
    res.send(Bread)
})

module.exports = router