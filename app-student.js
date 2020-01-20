const mongoose = require('mongoose');
// const dbName = 'student-crud'
const url = `mongodb://localhost/student-crud`
mongoose.connect(url,{useUnifiedTopology: true,useNewUrlParser: true })

const db = mongoose.connection


const done = function(){
    console.log('Close the connection to DB')
    db.close()
}


// import student model
// ??
const Student = require('./models/student')


///     CRUD    ///

//>>>
// create 
const create = (firstName,lastName,grade,age,city) => {
    const studentParams = {
        firstName : firstName,
        lastName : lastName,
        grade : grade,
        age : age,
        city : city
    }

    Student.create(studentParams)
    .then(student => {
        console.log(student)
    })
    .catch(error => console.log(error))
    .then(done)
}
// create('ahmed','aldahlawi',59,44,'Riyadh')
//<<< 


// index
//>>>
const index = function(){
    Student.find()
    .then(students => {
        console.log(students)
    })
    .catch(console.error)
    .then(done)
}
// index()
//<<<


//show 
//>>>
const show = (id) => {
    Student.findById(id)
    .then(student => {
        console.log(student)
    })
    .catch(console.error)
    .then(done)
}
// show('5e254de6eddcbc74f087e41b')
//<<<



// destroy 
//>>>
const destroy = (id) => {
    Student.findById(id)
    .then(student => {
        return student.remove()
    })
    .catch(console.error)
    .then(done)
    // another way to do remove 
    // Student.findByIdAndRemove(id)
    // .catch(console.error)
    // .then(done)
}
// destroy('5e254de6eddcbc74f087e41b')
// index()
//<<<

// update 
//>>>
const update = (id,field,value) => {
    Student.findById(id)
    .then(student => {
        student[field] = value
        return student.save()
    })
    .catch(console.error)
    .then(done)
}
//<<<
// update('5e254e039f36ff74fff1b659','firstName','Maha')
index()