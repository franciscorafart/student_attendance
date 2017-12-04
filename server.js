const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db;

MongoClient.connect('mongodb://resilient:coders1234@ds129796.mlab.com:29796/studentlist', (err, database)=>{
  if (err) return console.log(err)
  db = database

  app.listen(process.env.PORT || 3000, ()=>{
      console.log('Listening on 3000')
  })
})

//Setup
app.set('view engine','ejs')//tell where to look for ejs
app.use(bodyParser.urlencoded({extended: true})) //this allows node to look for the form in the ejs/html
app.use(bodyParser.json())
app.use(express.static('public'))


app.get('/', (req,res)=>{

  db.collection('students').find().toArray((err,result) =>{
    if (err) return console.log(err)
    res.render('index.ejs', {students: result}) //pending
  })
})

app.post('/addstudent', (req, res)=>{
  db.collection('students').save({name:req.body.name, lastname:req.body.lastname, att: ""}, (err,result)=>{
    if (err) return console.log(err)
    console.log('Saved to database')
    res.redirect('/')
  })
})

app.put('/studAttended',(req,res)=>{
  db.collection('students')
  .findOneAndUpdate({name: req.body.name, lastname:req.body.lastname},{
    $set:{
      att:req.body.att
    }
  }, {
    sort: {_id:-1},
    upsert:true
  }, (err,result) =>{
    if(err) return res.send(err)
    res.send(result)
  })
})

app.delete('/delete',(req,res)=>{
  db.collection('students').findOneAndDelete({name:req.body.name,msg: req.body.msg}, (err,result)=>{
    if(err) return res.send(500,err)
    res.send('Student deleted')
  })
})
