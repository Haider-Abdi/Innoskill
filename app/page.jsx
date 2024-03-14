"use client";

import React, { useState } from "react"
import { useMultiForm } from "@/hooks/useMultiForm";
import { UserForm } from "@/components/UserForm";
import { EventForm } from "@/components/EventForm";
import { PaymentForm } from "@/components/PaymentForm";
import mrlogo from "@/assets/mrlogo.png";
import Image from "next/image";
import { Roboto_Slab } from "next/font/google"


const roboto = Roboto_Slab({ subsets: ["latin"] });

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

export default function Home() {

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
    <EventForm {...data} updateFields={updateFields} prices={prices} setPrices={setPrices} />,
    <PaymentForm prices={prices} />,
  ])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!LastStep) return next();
    console.log(data)

    fetch(`/api/send`, {
      method: "POST",
      body: JSON.stringify(data)
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })

  }

  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <Image src={mrlogo} alt="MRIIRS Logo" width={500} />
        <div className="text-center my-5">
          <h1 className="font-bold text-4xl text-gray-700">7th Edition</h1>
          <span className={roboto.className}>
            <h1 className="font-extrabold text-6xl bg-gradient-to-r from-red-700 to bg-yellow-500 bg-clip-text text-transparent outline-8 uppercase">InnoSkill 2024</h1>
          </span>
          <h1 className="font-bold text-4xl text-gray-700">3rd-4th April</h1>
        </div>
      </div>
      <div className="p-10 flex justify-center">
        <form className="p-10 flex flex-col items-center bg-gradient-to-tr from-blue-950 to-yellow-950 text-white  rounded-xl w-1/2" onSubmit={handleSubmit}>
          {/* <div>
              {currentStepIndex + 1}/ {steps.length}
            </div> */}
          {step}
          <div className="p-3 rounded-xl">
            {!FirstStep && <button type="button" className="navbutton" onClick={back}>Back</button>}
            <button type="button" className="navbutton" onClick={handleSubmit}>
              {LastStep ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}