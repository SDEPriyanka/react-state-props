import React from 'react'


function Productdetails(props) {    
  return (
    <div>
        <div className=''>{props.prodcutTitle} </div>
       
         <div className="productlist">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>username</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
             
            {
                props.user.map((user,i) => {
                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>{user.username}</td>
                            <td>{user.website}</td>
                        </tr>
                    )
                
                 })
            }
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Productdetails