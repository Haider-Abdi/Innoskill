import { EventFrom } from "./EventForm"
import { PaymentForm } from "./PaymentForm"
import { TeamForm } from "./TeamForm"
import { UserForm } from "./UserForm"
import { multi } from "./multi"

function App() {
  const{steps,currentStepIndex,step,FirstStep,back,next,LastStep}= multi([
    <div>Start</div>,
    <UserForm/>,
    <TeamForm/>,
    <EventFrom/>,
    <PaymentForm/>,
  ])
  
  return (
    <div 
      style={{
        position: "relative", 
        background: "#FAF9F6",
        border:"3px outset blue" ,
        padding: "2rem",
        margin: "1rem",
        borderRadius:"0.7rem",
        fontFamily:"Verdana",
      }}
    >
      <form>
        <div style={{position:"absolute",top:".5rem",right:".5rem"}}
        >
          {currentStepIndex + 1}/ {steps.length}

        </div>
        {step}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",

          }}
        >
          {!FirstStep && <button type="button" onClick={back}>Back</button>}
          <button type="button" onClick={next}>
            {LastStep ? "Finish":"Next"}
          </button>

        </div>

       
      </form>
    </div>
  )
}

export default App
