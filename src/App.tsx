import { FormEvent, useState } from "react"
import { EventFrom } from "./EventForm"
import { PaymentForm } from "./PaymentForm"
import { TeamForm } from "./TeamForm"
import { UserForm } from "./UserForm"
import { multi } from "./multi"
import logo  from "./assets/logo.jpeg"

type FormData = {
  firstName: string,
  lastName: string,
  email: string,
  age: number,
  phone: number,
  uniName: string,
  semester: string,
  rollNo: string,
  teamName: string,
  members: number,
  firstNameMem2: string,
  lastNameMem2: string,
  ageMem2: number,
  phoneMem2: number,
  semesterMem2: string,
  uniNameMem2: string
  firstNameMem3: string,
  lastNameMem3: string,
  ageMem3: number,
  phoneMem3: number,
  semesterMem3: string,
  uniNameMem3: string
  firstNameMem4: string,
  lastNameMem4: string,
  ageMem4: number,
  phoneMem4: number,
  semesterMem4: string,
  uniNameMem4: string,
  event: string[]
}

const initalData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  age: 0,
  phone: 0,
  uniName: "",
  semester: "",
  rollNo: "",
  teamName: "",
  members: 0,
  firstNameMem2: "",
  lastNameMem2: "",
  ageMem2: 0,
  phoneMem2: 0,
  semesterMem2: "",
  uniNameMem2: "",
  firstNameMem3: "",
  lastNameMem3: "",
  ageMem3: 0,
  phoneMem3: 0,
  semesterMem3: "",
  uniNameMem3: "",
  firstNameMem4: "",
  lastNameMem4: "",
  ageMem4: 0,
  phoneMem4: 0,
  semesterMem4: "",
  uniNameMem4: "",
  event: [""]
}

function App() {

  const [data, setData] = useState(initalData);
  const [prices, setPrices] = useState<number>(0);

  const updateFields = (fields: any) => {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }


  const { steps, currentStepIndex, step, FirstStep, back, next, LastStep } = multi([
    <div>Start</div>,
    <UserForm {...data} updateFields={updateFields} />,
    <TeamForm {...data} updateFields={updateFields} />,
    <EventFrom {...data} updateFields={updateFields} prices={prices} setPrices={setPrices} />,
    <PaymentForm prices={prices} />,
  ])

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault();
    if (!LastStep) return next();
    console.log(data);
    // const googleScriptsUrl = "https://script.google.com/macros/s/AKfycbwWz7eqgjSxUI0bSUHHmuCM7jE5YIf-zje3x0o4V_0MAuGrL_DfJnXSnTA1CLDLoS0GOA/exec"

    // fetch (googleScriptsUrl, {
    //   redirect: "follow",
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // }).then((response) => {
    //   console.log(response);
    // }).catch((error) => {
    //   console.log(error);
    // })
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="logo" width={400}/>
        <h1 className="font-bold text-4xl">InnoSkill 2024</h1>
      </div>
      <div className="p-10">
        <form className="p-10 shadow-lg flex flex-col items-center bg-slate-100" onSubmit={handleSubmit}>
          {/* <div>
            {currentStepIndex + 1}/ {steps.length}
          </div> */}
          {step}
          <div>
            {!FirstStep && <button type="button" className="navbutton" onClick={back}>Back</button>}
            <button type="button" className="navbutton" onClick={handleSubmit}>
              {LastStep ? "Finish" : "Next"}

            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
