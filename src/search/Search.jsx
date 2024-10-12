import React from 'react'

const Search = ({searchData,setOnchange}) => {
  return (
    <div className='w-100 bg-success'>
        <label htmlFor="text">Search</label>
        <input type="text" onChange={(e)=>setOnchange(e.currentTarget.value)} />
        <div className='bg-success w-100 row'>
        { 
            searchData?
            searchData?.map((book)=>(<>
            <div key={book.id} className=' col-sm-6 col-md-4 col-lg-2' >   
             <div>
                <img className='w-100' src={book.image} alt="" srcset="" />
                </div>   
            <p>{book.title}</p>
            </div>
            </>))
            :<div style={{height:100}} className='w-100  d-flex align-items-center justify-content-center'>No Matching Search </div>
        }
        </div>
    </div>
  )
}

export default Search