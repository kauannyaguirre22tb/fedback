import { CardInicial } from "./assets/components/CardInicial"
import illustrationThankYou from "./assets/illustration-thank-you.svg"
import { useState } from "react"

export function App() {
  const [submited, setSubmited] = useState(false)
  const [rateNote, setRateNote] = useState(0)
  


  function handleChangeRateNote(value) {
    setRateNote(value)
  }
 
return (
  submited === false ? (
    <CardInicial setSubmited={setSubmited} rateNote={rateNote}/>
  ) : (
    <div className="bg-radial-gradient text-white rounded-2xl p-6 max-w-103 font-overpass text-center">
     <img className="mx-auto mb-6" src={illustrationThankYou} alt="illustration Thank You" />
     <p className="bg-dark-blue text-orange w-fit mx-auto py-1.24 px-3 rounded-3xl mb-6 ">You selected {rateNote} out of 5</p>

     <h1 className="text-2xl font-bold mb-2.5">Thank You!</h1>

     <p className="text-sm text-light-grey leading-1">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>

    </div>
  )
)
}