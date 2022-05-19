import React from 'react'
import Header from './Header'

const View = () => {
var viewlist=[{"courseTitle":"Python Django Internship","courseDescription":"Internship programme","courseDuration":"3 months","courseVenue":"ONLINE","courseDate":"02/01/2023"},
{"courseTitle":"MERN Stack","courseDescription":"Internship programme","courseDuration":"6 months","courseVenue":"ONLINE","courseDate":"02/06/2022"}]


  return (
    <div>
      <Header/>
<br></br>
      <div className='container'>
<div className='row'>
  <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>

  <table className="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">course Title</th>
      <th scope="col">course Duration</th>
      <th scope="col">course Description</th>
      <th scope="col">course Venue</th>
      <th scope="col">course Date</th>
    </tr>
  </thead>
  <tbody>
    {viewlist.map((value,key)=>{
      return <tr>
      <th scope="row">{value.courseTitle}</th>
      <td>{value.courseDuration}</td>
      <td>{value.courseDescription}</td>
      <td>{value.courseVenue}</td>
      <td>{value.courseDate}</td>
    </tr>

    })}
    
    
  </tbody>
</table>
 
 

  </div>

</div>
      </div>

    </div>
  )
}

export default View