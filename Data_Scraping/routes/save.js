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
    const url1 = `https://collegedunia.com/usa/college/${collegename}/${courseid}`;
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
result.name = "Yale University";
result.details = "Yale University is an Ivy-League School ranked #1 Best Value School by US News & World Report. For an Indian student, Yale University's fees is approximately 60 lakhs per annum. The university supports its students by offering them scholarships worth 38 lakhs which reduces the overall cost of attendance to 22 lakhs. The affordable fees for Yale University courses is the reason for 22% international student presence at the campus. The international students represent over 120 diverse nationalities and countries. Compared to undergraduate courses, international student enrollments are slightly higher for Yale University graduate courses. Law and Management disciplines at Yale have the highest enrollment of 21%, and 28% respectively. Being an Ivy league college, Yale administers a competitive selection process. The university’s acceptance rate is only 6.3% for the recent admissions. Yale University admission requirements for master courses included GPA above 3.5 (83%-86%) and 100 in TOEFL-IBT. For courses like MBA, Yale asks for GMAT score above 720. "
result.img = "https://images.collegedunia.com/public/asset/img/homepage/banner/yale.jpg?h=1080&w=1920&mode=stretch"
result.title = $('.single-program-name').textContent;
result.info = $('.jsx-1117311724').textContent;
result.fees = $('.overflow-x-auto .jsx-2735629048').textContent;
result.exams = $('.text-lg .content-section').textContent;
const entry = new College(result)

  entry.save().then(() => {
      console.log(result.fees)
  }).catch(err => {
      console.log(err,result.title,'saved')
  })
  }
  
  
//    title = $('.single-program-name').textContent;
//    info = $('.jsx-1117311724').textContent;
// //   const fees = $('.overflow-x-auto').textContent;
//    exams = $('.text-lg .content-section').textContent;
// getCollegeInfo('1873-princeton-university-princeton','programs?course_id=27841');
 getCollegeInfo('1873-princeton-university-princeton','programs?course_id=27837');
// getCollegeInfo('1873-princeton-university-princeton','master-of-science-in-engineering-mse-operations-research-and-financial-engineering-57667');
// getCollegeInfo('1873-princeton-university-princeton','programs?course_id=215073');

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
