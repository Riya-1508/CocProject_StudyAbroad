import { list } from 'postcss';
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import CollegeList from './All_Data/CollegeList';

function Searchbar() {
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
        {filteredList.map((item, index) => {
          return(
            <div className=''>
            <li className='bg-gray-200 flex justify-between text-black my-1 p-1 font-bold' key={index}>&#8658; {item}
            <div className='bg-gray-200 my-1 ml-5'><button className='bg-red-600 rounded-md text-white p-2 font-serif'><a href={`/Search/${item}`}>View More</a></button></div></li>
            </div>
          )
          })}
      </>
    )
  }

  const arraycollege= CollegeList.map((list) => (list.Names))
  console.log(arraycollege);
  const [filteredList, setFilteredList] = useState(arraycollege);
  const [click, setClick] = useState(false);
  const filterBySearch = (event) => {

    const query = event.target.value;

    var updatedList = [...arraycollege];
    setClick(true);
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
            {click? filter10() : ""}
          </ol>
        </div>
      </div>
    </>


  )
}

export default Searchbar


