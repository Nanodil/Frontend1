import React from 'react'
import { Table } from 'react-bootstrap'

export default function TableMemes(props) {
    return (

<Table  className="mt-5 mx-auto" style={{width: '600px'}} stripped bordered>
<tbody>


{props.memes.length === 0 ?'No hay memes guardados': props.memes.map(({titulo, imagen}, i)=> (

<tr key={i}> 
     
     <td><img src={imagen} alt= "" style={{width:'5rem'}} /> </td>
     <td>{titulo} </td>
 
     </tr>
 ))}
 

</tbody>




</Table>
    )
}


