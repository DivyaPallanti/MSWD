import React from 'react'

const PersonDetails=({sort})=>{

    return(
           <div>
            <table>
                <tbody>
                   <tr>
                      <td>{sort.content} </td>
                      <td>{sort.number}</td>
                   </tr>
               </tbody>
           </table>
           </div>

    )

}

export default PersonDetails