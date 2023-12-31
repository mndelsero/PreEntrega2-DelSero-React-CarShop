import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { pedirItemPorId } from './helpers/PedirDatos'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
const [item, setItem]=useState(null)
const id=useParams().id
console.log(id)


useEffect(() => {
 
    pedirItemPorId(Number(id))
    .then((res)=>setItem(res))
}, [id])


  return (
    <div className='detail-page'>
      {item && <ItemDetail item={item}/>}
      
    </div>
  )
}

export default ItemDetailContainer
