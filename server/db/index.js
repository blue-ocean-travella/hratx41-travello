//json file stored on the server;
//const locationData = require('./locationData.json');
//const userData = require("./user.json");
// console.log(locationData)
var mongo = require("mongodb");
const mongoose = require("mongoose");
const mongopath = "mongodb://localhost/Travella";

mongoose.connect(mongopath, { useNewUrlParser: true });

const connect = mongoose.connection;

connect.on("error", console.error.bind(console, "connection error:"));
connect.once("open", function() {
  console.log(connect, "this is your connect");
  console.log("hi");
});


var userSchema = mongoose.Schema({
  name: String,
  itinerary: []
});

var Users = mongoose.model("Users", userSchema);


let firstUser = new Users({
    name:"Lui",
    itinerary:[]
})
// Users.save((err)=>{

// })
/////////////////CRUDS//////////////////////////////

const deleteData = (obj, cb) => {
  Users.deleteOne(obj, function(err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
      cb(null, info);
      // console.log('db info', info)
    }
  });
};

const findData = (obj, cb) => {
  Users.findOne(obj, function(err, info) {
    if (err) {
      console.log(err);
    } else {
      // console.log(info);
      cb(null, info);
      // console.log('db info', info)
    }
  });
};

const updateData = (find,update, cb) => {
    
    Users.findOneAndUpdate(find,update,(err, info) => {
    if (err) {
      console.log(err);
    } else {
      cb(null, info);
    }
  });
};

const insertData = (object, cb) => {
  Users.insertMany(object, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      cb(null, info);
    }
  });
};

const saveData = (object,cb)=>{
    Users.create(object,(err,info)=>{
        if(err){
            console.log(err)
        }else{
            cb(null,info)
        }
    })
}

/////////////////CRUDS//////////////////////////////

module.exports = { Users, insertData,updateData,saveData };
