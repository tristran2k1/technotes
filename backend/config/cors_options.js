const allowOrigins = require('./allowed_origin')

const corsOpts = {
    origin: (origin, callback) => {
        if(allowOrigins.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOpts
