const express = require('express')

const router = express.Router()

router.post('/userform', async (req, res) => {
    try {
        const { username, date, email, mobileno } = req.body
        const pattern = /[0-9]/

        if (mobileno.length == 10 && pattern.test(mobileno)) {
            return res.status(200).json()
        }
    }

    catch (err) {
        console.log(err);
    }

})

module.exports = router