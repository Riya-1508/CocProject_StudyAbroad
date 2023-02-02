import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
function Searchbar() {


  const data =

    ["University of Toronto", "McGill University", "University of Mont real", "University of Alberta", "University of Ot tawa", "University of Calgary", "University of Waterloo", "Conestoga College", "York University", "Humber college", "McMaster University", "Queen's University", "Dalhousie University", "University of Sherbrooke", "Thompson Rivers University", "Centennial College", "University of Winnipeg",
      "North Island College", "College of New Caledonia", "Simon Frasier University", "The University of Melbourne", "The University of  Queensland", "Australian National University", "Monash University", "The University of Sydney", "University of New South Wales", "University of Adelaide", "University of Western Australia", "University of Canberra", "Macquarie University", "Western Sydney University", "University of Tasmania", "Swinburne University of Technology", "Victoria University", "Curtin University", ".Deakin University", "RMIT University", "University of Wollongong", "University of Cambridge", "University of Edinburgh", "University of Leeds", "University of Oxford", "University College London", "Imperial College London", "University of Bedfordshire", "Leeds Beckett University", "King's College London", "University of Glasgow", "•	University of East London"
      , "University College London", "Warwick Business School", "Alliance Manchester Business School", "Said Business school", "University of Bristol",
      "Berlin Institute of Technology",
      "University of Stuttgart",
      "University of Kiel",
      "University of Cologne",
      "Karlsruhe Institute of Technology",
      "Technical University of Braunschweig",
      "Berlin Institute of Technology",
      "University of Stuttgart",
      "University of Kiel",
      "University of Cologne",
      "Karlsruhe Institute of Technology",
      "Technical University of Braunschweig",
      "Frankfurt School of Finance & Management",
      "University of Cambridge", "University of Bonn", "Humboldt University of Berlin", "Harvard University",
      "Massachusetts Institute of Technology",
      "Stanford University",
      "Carnegie University",
      "Georgia Institute of Technology",
      "California Institute of Technology",
      "Princeton University",
      "Yale University", "Duke University",
      "Columbia University",
      "Johns Hopkins University",
      "University of Pennsylvania",
      "University of Michigan", "Northeastern University",
      "Colorado State University", "Montana State University",
      "Arizona State University",
      "Concord University",
      "Queen's College",
      "Long Island University", "Haas School of Business",
      "Kellogg School of Management"
    ];

  const data1 = ["University of Toronto", "McGill University","University of Waterloo", "Conestoga College", "York University","Queen's University", "Dalhousie University", "University of Sherbrooke", "`More College...  `"]

  const data10 = () => {
    return (
      <>
        {data1.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </>
    )
  }

  const filter10 = () => {
    return (
      <>
        {filteredList.map((item, index) => (
          // <Link to={`/${item}`} key={index}>{item}</Link>
          <li key={index}>{item}</li>
        ))}
      </>
    )
  }
  const [filteredList, setFilteredList] = new useState(data);
  const [click, setClick] = useState(false);
  const filterBySearch = (event) => {

    const query = event.target.value;

    var updatedList = [...data];
    setClick(!click);
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilteredList(updatedList);
  };
  return (
    <>
      <div className="Searchbar">
        <form>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search.." required onChange={filterBySearch}/>
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 left-auto">Search</button>
          </div>
        </form>
        <div>
          <ol>
            {click? filter10() : data10()}
            {/* {click ? <h2>Hello</h2> : <h1>Bye</h1>} */}
            {/* <div><h1>Hello</h1></div> */}
            {/* {filteredList.map((item, index) => (
              <li key={index}>{item}</li>
            ))} */}
          </ol>
        </div>
      </div>
    </>


  )
}

export default Searchbar


