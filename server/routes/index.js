const express = require('express');
const router =express.Router(); 


router.get('/',(request,response,next)=> {
    console.log(request);
    console.log(response);
    response.send('hello from the server');
});

module.exports = router;