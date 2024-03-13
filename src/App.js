import React, { useState } from "react"
import { useMultiForm } from "./hooks/useMultiForm";
import { UserForm } from "./components/UserForm";
import { EventFrom } from "./components/EventForm";
import { TeamForm } from "./components/TeamForm";
import { PaymentForm } from "./components/PaymentForm";


const initalData = {
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

const App = () => {

    const [data, setData] = useState(initalData)
    const [prices, setPrices] = useState(0);

    const updateFields = (fields) => {
        setData((prev) => {
            return { ...prev, ...fields }
        })
    }

    const { steps, currentStepIndex, step, FirstStep, back, next, LastStep } = useMultiForm([
        <div>Start</div>,
        <UserForm {...data} updateFields={updateFields} />,
        <TeamForm {...data} updateFields={updateFields} />,
        <EventFrom {...data} updateFields={updateFields} prices={prices} setPrices={setPrices} />,
        <PaymentForm prices={prices} />,
    ])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!LastStep) return next();
        console.log(data);
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                {/* <img src={logo} alt="logo" width={400} /> */}
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
