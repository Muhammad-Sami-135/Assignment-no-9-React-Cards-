import { useState } from 'react'
import { Data } from './Components/Data/Data'
import { Card } from './Components/Cards/Card'
import Styles from "./Components/Cards/Card.module.css"

function App() {
  return (
    <>
      <h1 className={Styles.Card}>Cards</h1>
      {
        Data.map((e, i) => {
          return (
            <Card key={i} category={e.category} imgSrc={e.image} id={e.id} title={e.title} description={e.description} price={e.price} />
          )
        })
      }
    </>
  )
}

export default App
