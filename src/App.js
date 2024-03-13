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
    age: "",
    phone: "",
    option: "",
    uniName: "",
    semester: "",
    rollNo: "",
    teamName: "",
    vertical1: [
        { eventName: "Theme Based Model Demo (Srijan)", members: null },
        { eventName: "Best out of Waste (Nav Shrijan)", members: null },
        { eventName: "Code Debugging", members: null },
        { eventName: "LAN Gaming", members: null },
        { eventName: "BioGenius", members: null },
        { eventName: "Vista Vibes- Video Blog", members: null },
        { eventName: "Technical Memes", members: null },
        { eventName: "Build a Circuit", members: null },
        { eventName: "Workshop on 3D Printing", members: null },
        { eventName: "Workshop on Laser Cutting and Design", members: null },
        { eventName: "EV Quiz Challenge", members: null },
    ],
    vertical2: [
        { eventName: "Pro Launch 2024", members: null },
        { eventName: "Ideattrakt", members: null },
        { eventName: "Poster Making", members: null },
        { eventName: "Finance Ki Pathshala", members: null },
    ],
    vertical3: [
        { eventName: "Workshop on Somatotyping", members: null },
        { eventName: "WellTech Innovate Challenge", members: null },
        { eventName: "Best out of food waste challenge", members: null },
        { eventName: "YuvaFlex Fusion Challenge", members: null },
        { eventName: "Pseudo Recipe Competition", members: null },
        { eventName: "Rescue Rangers Workshop", members: null },
    ],
    vertical4: [
        { eventName: "Sustainathon", members: null },
        { eventName: "Eco-reel", members: null },
        { eventName: "My community My Ad", members: null },
        { eventName: "Know your C-footprint", members: null },
    ],
    vertical5: [
        { eventName: "Workshop on Coffee: Journey of coffee 'Bean to cup' supported by Lavazza", members: null },
        { eventName: "Millet Cook off Challenge", members: null },
    ],
    vertical6: [
        { eventName: "Parliamentary Debate", members: null },
        { eventName: "Manifesto", members: null },
        { eventName: "Policy & Preamble Quiz", members: null },
        { eventName: "Reformative Policy Drafting", members: null },
    ],
    vertical7: [
        { eventName: "Techno- Vogue 'Technology Fashion Walk'", members: null },
        { eventName: "Spell Bee Competition 'Who will be the Spell Bee Champion'", members: null },
        { eventName: "Innovoice 'RJ Hunt'", members: null },
        { eventName: "SnapFlickShowdown: 'Reel Making Competition'", members: null },
    ],
    vertical8: [
        { eventName: "Shark tank 2.O (AWAKE THE ENTERPRENEUR WITHIN YOU)", members: null },
        { eventName: "PRAJAKIYA - The Rules of People 'Global Warming and Environment Conservation'", members: null },
        { eventName: "Move To The Groove 'Exploring the inner self through creative movement'", members: null },
        { eventName: "Screen Masters", members: null },
    ],
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
        // <div className="font-bold text-2xl">Register Here</div>,
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
                <h1 className="font-bold text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white">7th Edition</h1>
                <h1 className="font-bold text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] outline-8 text-white">InnoSkill 2024</h1>
                <h1 className="font-bold text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white">3rd-4th April,2024</h1>
            </div>
            <div className="p-10">
                <form className="p-10 flex flex-col items-center bg-gray-300 rounded-xl" onSubmit={handleSubmit}>
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
