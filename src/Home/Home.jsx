import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BannarCard from '../bannarCard/BannarCard'
import Search from '../search/Search'
const Home = () => {
    const [recentdata, setRecenData] = useState([])
    const [searchData, setSearchData] = useState([])
    const [onchange, setOnchange] = useState([])

    useEffect(() => {
         axios.get('https://www.dbooks.org/api/recent')
        .then(response => setRecenData(response.data.books))
        .catch(error => {console.log(error)}) 
    }, [])
    useEffect(() => {
         axios.get(`https://www.dbooks.org/api/search/${onchange}`)
        .then(response => setSearchData(response.data.books))
        .catch(error => {console.log(error)}) 
    }, [onchange])
    // console.log(data);
    
  return (
    <div className='w-100'>
        <BannarCard data={recentdata}/>
        <Search setOnchange={setOnchange} searchData={searchData} />
       
    </div>
  )
}

export default Home