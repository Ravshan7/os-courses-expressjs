const { Router } = require('express')
const Course = require('../module/course')

const router = Router()


router.get('/', (req, res) => {
    res.render('add', {
        title: 'Добавить курс',
        isAdd: true
    })
})

router.post('/', async (req, res) => {

    const {title, price, img } = req.body
    const addPost = new Course(title, price, img)
    await addPost.save()


    res.redirect('/courses')
})

module.exports = router