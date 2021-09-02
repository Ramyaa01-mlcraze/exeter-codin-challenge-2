const {getStudentOpts, postStudentOpts, updateStudentOpts, deleteStudentOpts} = require('./response-models/studentsSchema')

function itemRoutes (fastify, options, done){
    fastify.get('/report', getStudentOpts)

    fastify.post('/add', postStudentOpts)
    
    fastify.post('/update', updateStudentOpts)

    fastify.delete('/delete', deleteStudentOpts)

    done()
}

module.exports = itemRoutes