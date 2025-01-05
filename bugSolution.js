```javascript
//Correct use of $inc operator with upsert option
db.collection('myCollection').updateOne({"_id":1},{$inc:{counter:1}}, {upsert:true});
```