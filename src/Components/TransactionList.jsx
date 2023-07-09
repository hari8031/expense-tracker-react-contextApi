import React ,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'
const TransactionList = () => {
  const context = useContext(GlobalContext)
  return (
    <div>
         <h3>History</h3>
      <ul id="list" className="list">
        {
          context.transaction.map((item)=>(
             <Transaction item={item} key={item.id}/>
          ))
        }
      </ul>
    </div>
  )
}

export default TransactionList