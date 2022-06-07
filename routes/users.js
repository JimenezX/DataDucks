const {Router} = require('express');
const router = Router();

const User = require('../backend/Users/user')

router.get('/', async (req,res) =>{ 
 const users = await new User.find()
 res.json(users)
 })

router.post('/', async (req,res) => {
    const {name,lastName,mail,password} = req.body;
    const newUser = new User({name,lastName,mail,password});
   await newUser.save();
    res.send({message:'User Saved'})
 })

router.delete('/:id', async (req,res) => {
    const user = await User.findByIdAndDelete(req.params.id)
    console.log(user)
    res.json({message:'User Deleted'})
})


module.exports = router;

