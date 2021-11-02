const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    name : {
        type :String
        
        
    },
    gender : {
        type :String       

    },
    languages : {
        type :Array


    },
    username : {
        type :String     

    }, state : {
        type :String     

    }, occupation : {
        type :String     

    }, credit : {
        type :Number     

    },

    testerTasks: {
        type :Array     

    },
    
    annualincome: {
        type :Array     

    },

})

const model = mongoose.model("1",Schema)


module.exports = model

