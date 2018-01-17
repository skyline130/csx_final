var express = require('express');
var router = express.Router();
// const bodyParser = require('body-parser')
const app = express()

const MongoClient = require('mongodb').MongoClient
const objectID = require('mongodb').ObjectID; // 用來建構MongoDBID物件
// mongodb://ip:port/dbname
var url = 'mongodb://140.112.28.194:27017/CSX2003_02_01';

app.set('port', (process.env.PORT || 1377))

/* GET Mongo data. */
/*http://localhost:3000/query/query*/
router.get('/query', function(req, res, next) {
    // * 什麼人都可以，只允許google www.google.com
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    var response = {}

    MongoClient.connect(url, function(err, db) {
        if (err) {
            response.result = false
            response.message = "資料庫連接失敗，" + err.message
            res.json(response)
            return
        }
        db.collection('database').find().sort({ rank: 1 }).toArray(function(err, masu) {
            if (err) {
                console.log('資料查詢失敗')
                return
            }
            console.log('資料查詢成功', masu.length)
            var pipi = []
            for (var i = 0; i < masu.length; i++) {
                pipi.push({
                    orientation: masu[i].orientation,
                    seccions_name: masu[i].seccions_name,
                    date: masu[i].date,
                    site: masu[i].site,
                    remain: masu[i].remain,
                    rank: masu[i].rank,
                    detail: masu[i].detail
                })
                console.dir(masu[i].site)
            }
            response.data = pipi
            res.json(response)
        })
    })
});
module.exports = router;


/* GET Mongo data. */
/*http://localhost:3000/query/query2*/
router.get('/query2', function(req, res, next) {
    // * 什麼人都可以，只允許google www.google.com
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    var koko = {}

    MongoClient.connect(url, function(err, db) {
        if (err) {
            koko.result = false
            koko.message = "資料庫連接失敗，" + err.message
            res.json(koko)
            return
        }
        db.collection('database2').find().sort({ rank: 1 }).toArray(function(err, milo) {
            if (err) {
                console.log('資料查詢失敗')
                return
            }
            console.log('資料查詢成功', milo.length)
            var egg = []
            for (var i = 0; i < milo.length; i++) {
                egg.push({
                    date: milo[i].date,
                    range: milo[i].range,
                    department: milo[i].department,
                    amount: milo[i].amount,
                })
                console.dir(milo[i].department)
            }
            koko.data = egg
            res.json(koko)
        })
    })
});
module.exports = router;

app.listen(app.get('port'), function(){
    console.log('Server running at http://127.0.0.1:' + a00.get('port'))
})
