import React, { useState } from "react"
import { useMultiForm } from "./hooks/useMultiForm";
import { UserForm } from "./components/UserForm";
import { EventFrom } from "./components/EventForm";
// import { TeamForm } from "./components/TeamForm";
import { PaymentForm } from "./components/PaymentForm";
import mrlogo from "./assets/mrlogo.png";
// import background from "./assets/background.jpg";


const initalData = {
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    phone: 0,
    option: "",
    uniName: "",
    semester: "",
    rollNo: "",
    teamName: "",
    vertical1: [],
    vertical2: [],
    vertical3: [],
    vertical4: [],
    vertical5: [],
    vertical6: [],
    vertical7: [],
    vertical8: [],
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
        <div className="font-bold text-2xl">Register Here</div>,
        <UserForm {...data} updateFields={updateFields} />,
        // <TeamForm {...data} updateFields={updateFields} />,
        <EventFrom {...data} updateFields={updateFields} prices={prices} setPrices={setPrices} />,
        <PaymentForm prices={prices} />,
    ])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!LastStep) return next();
        console.log(data);
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <img src={mrlogo} alt="MRIIRS Logo" width={500} />
                <h1 className ="font-bold text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white">7th Edition</h1>
                <h1 className="font-bold text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] outline-8 text-white">InnoSkill 2024</h1>
                <h1 className="font-bold text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white">3rd-4th April,2024</h1>
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
