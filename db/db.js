const mongoose = require('mongoose')
const db = 'mongodb+srv://29oct:29oct@cluster0.sfng4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// const db = 'mongodb+srv://instaclone:instaclone@cluster0.kmfyz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// const db = "mongodb://localhost:27017/3"
mongoose.connect(db,{

useNewUrlParser:true,
// useUnifiedTopology:true,
// useCreateIndex : true,
// useFindAndModify :true

}).then(()=>{console.log('database establish');}).catch((e)=>{console.log(e);})


module.exports = mongoose
