const axios = require('axios');
const { JSDOM } = require('jsdom');
const express = require('express');
const router = express.Router();
const College = require('../models/Colleges');
const { collection } = require('../models/Colleges');
const ObjectId = require('mongodb').ObjectId;


router.get('/collegename',async(req,res) =>{
  
  
 
// async function getCollegeInfo() {
    
    const url1 = `https://collegedunia.com/australia/college/595-queensland-university-of-technology-brisbane/programs?course_id=136987`;
  const { data: html } = await axios.get(url1,
  {
    headers: {
        Accept:'*/*', 
        
       Host: 'collegedunia.com',
        scheme: 'https',
        'accept-encoding': 'gzip, deflate, br',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        Pragma: 'no-cache',
        'cache-control': 'no-cache'
    }
    });
    
 
  const dom = new JSDOM(html);
  const $ = (selector) => dom.window.document.querySelector(selector);
  
//    title = $('.single-program-name').textContent;
//    info = $('.jsx-1117311724').textContent;
// //   const fees = $('.overflow-x-auto').textContent;
//    exams = $('.text-lg .content-section').textContent;

let result = {};
result.title = $('.single-program-name').textContent;
result.info = $('.jsx-1117311724').textContent;
result.fees = $('.overflow-x-auto').textContent;
result.exams = $('.text-lg .content-section').textContent;

const entry = new College(result)

entry.save().then(() => {
    console.log(result.title)
}).catch(err => {
    console.log(err,result.title,'saved')
})
 })
 router.post('/getcollege/:id', async (req, res) => {

 collection.findOne({"_id": new ObjectId(req.params.id)},(error,result)=>{
  if(error) {
    return res.status(500).send(error);
  }
  res.send(result);
 });
});
module.exports = router
