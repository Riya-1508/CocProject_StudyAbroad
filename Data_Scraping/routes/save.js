const axios = require('axios');
const { JSDOM } = require('jsdom');
const express = require('express');
const router = express.Router();
const College = require('../models/Colleges');
const { collection } = require('../models/Colleges');
const { get } = require('mongoose');
const ObjectId = require('mongodb').ObjectId;


router.get('/collegename',async(req,res) =>{
  
  
 
// async function getCollegeInfo() {
    async function getCollegeInfo(collegename,courseid)
    {
    const url1 = `https://collegedunia.com/canada/college/${collegename}/${courseid}`;
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
    let result = {};
result.name = "Humber College";
result.details = "Humber College, also known as the Humber College Institute of Technology & Advanced Learning, is a public Applied Arts and Technology College in Toronto, Ontario, Canada. Humber College courses are available at three Campuses- North Campus, Lakeshore Campus, and Downtown Campus. Collectively, the campuses offer 220+ programs across 40 academic areas. The highest degree available at Humber is a bachelor's degree, other than that, the institution offers majorly certificate and diploma courses. Amongst Indian students, Humber College’s postgraduate diploma and certificate courses are highly in-demand.The admission process at Humber College is quite straightforward; the majority of courses have two intakes- January and/or September. A minimum academic score of 70% is required for admission for all students. To prove english proficiency all Indian students are mandatory to submit a minimum IELTS score of 6.5 for UG and 6.0 for PG programs. Personal essays and reference letters are optional for a few courses, but if you are an international student then it’s highly recommended to submit these supplementary documents."
result.img = "https://tse1.mm.bing.net/th?id=OIP.nSHPIq9VlchbFj3eQsOHuwHaD3&pid=Api&P=0"
// result.title = $('.single-program-name').textContent;
// result.info = $('.jsx-1117311724').textContent;
// result.fees = $('.overflow-x-auto .jsx-2735629048').textContent;
// result.exams = $('.text-lg .content-section').textContent;
const entry = new College(result)

  entry.save().then(() => {
      console.log(result.fees)
  }).catch(err => {
      console.log(err,result.title,'saved')
  })
  }
  
  

 
 })
 
 router.get('/collegelist',async(req,res) =>{
  
  
 
  // async function getCollegeInfo() {
      
     
      
      let result = {};
  result.name = "Columbia Business School";
  result.details = "Columbia Business School is amongst the top 10 global business schools, as per U.S. News and World Report. The b-school offers admission to 7 master’s programs along with various career-centric research courses. MBA in Columbia Business School is one of the most coveted programs. Columbia Business School fee for the MBA program is 77,376 USD (~57.55 lakh INR). Columbia Business School acceptance rate is around 18.5% and exhibits a lightly selective admission policy. To get admission to CBS, students must produce a high GPA of 90% and a GMAT score of 700 or higher."
  result.img = "https://images.collegedunia.com/public/asset/img/homepage/banner/columbia1.jpg?h=1080&w=1920&mode=stretch"
  
  const entry = new College(result)
  
    entry.save().then(() => {
        console.log(result.name)
    }).catch(err => {
        console.log(err,result.title,'saved')
    })
    
    
    
  
   
   })
 router.get('/getcollege/:id', async (req, res) => {

 collection.findOne({"_id": new ObjectId(req.params.id)},(error,result)=>{
  if(error) {
    return res.status(500).send(error);
  }
  res.json(result);
 });
});
module.exports = router
