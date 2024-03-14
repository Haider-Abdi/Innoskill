"use client";

import { useState } from "react";
import FormWrapper from "./FormWrapper";

export function EventForm({
    vertical1,
    vertical2,
    vertical3,
    vertical4,
    vertical5,
    vertical6,
    vertical7,
    vertical8,
    updateFields,
    prices,
    setPrices
}) {

    const [v1, setv1] = useState(vertical1);
    const [v2, setv2] = useState(vertical2);
    const [v3, setv3] = useState(vertical3);
    const [v4, setv4] = useState(vertical4);
    const [v5, setv5] = useState(vertical5);
    const [v6, setv6] = useState(vertical6);
    const [v7, setv7] = useState(vertical7);
    const [v8, setv8] = useState(vertical8);

    const handleV1CheckboxChange = (index) => {
        // console.log(v1[index].eventName, v1[index].members)
        console.log(v1[index].members)
        const updatedData = [...v1];
        if (updatedData[index].members === null) {
            updatedData[index].members = 1;
        } else {
            updatedData[index].members = null;
        }
        setv1(() => updatedData);
        updateFields({vertical1: v1})
    }
    const handleV2CheckboxChange = (index) => {
        // console.log(v1[index].eventName, v1[index].members)
        console.log(v2[index].members)
        const updatedData = [...v2];
        if (updatedData[index].members === null) {
            updatedData[index].members = 1;
        } else {
            updatedData[index].members = null;
        }
        setv2(() => updatedData);
        updateFields({vertical2: v2})
    }
    const handleV3CheckboxChange = (index) => {
        // console.log(v1[index].eventName, v1[index].members)
        console.log(v3[index].members)
        const updatedData = [...v3];
        if (updatedData[index].members === null) {
            updatedData[index].members = 1;
        } else {
            updatedData[index].members = null;
        }
        setv3(() => updatedData);
        updateFields({vertical3: v3})
    }
    const handleV4CheckboxChange = (index) => {
        // console.log(v1[index].eventName, v1[index].members)
        console.log(v4[index].members)
        const updatedData = [...v4];
        if (updatedData[index].members === null) {
            updatedData[index].members = 1;
        } else {
            updatedData[index].members = null;
        }
        setv4(() => updatedData);
        updateFields({vertical4: v4})
    }
    const handleV5CheckboxChange = (index) => {
        // console.log(v1[index].eventName, v1[index].members)
        console.log(v5[index].members)
        const updatedData = [...v5];
        if (updatedData[index].members === null) {
            updatedData[index].members = 1;
        } else {
            updatedData[index].members = null;
        }
        setv5(() => updatedData);
        updateFields({vertical5: v5})
    }
    const handleV6CheckboxChange = (index) => {
        // console.log(v1[index].eventName, v1[index].members)
        console.log(v6[index].members)
        const updatedData = [...v6];
        if (updatedData[index].members === null) {
            updatedData[index].members = 1;
        } else {
            updatedData[index].members = null;
        }
        setv6(() => updatedData);
        updateFields({vertical6: v6})
    }
    const handleV7CheckboxChange = (index) => {
        // console.log(v1[index].eventName, v1[index].members)
        console.log(v7[index].members)
        const updatedData = [...v7];
        if (updatedData[index].members === null) {
            updatedData[index].members = 1;
        } else {
            updatedData[index].members = null;
        }
        setv7(() => updatedData);
        updateFields({v7: updatedData});
    }
    const handleV8CheckboxChange = (index) => {
        // console.log(v1[index].eventName, v1[index].members)
        console.log(v8[index].members)
        const updatedData = [...v8];
        if (updatedData[index].members === null) {
            updatedData[index].members = 1;
        } else {
            updatedData[index].members = null;
        }
        setv8(() => updatedData);
        updateFields({vertical8: v8})
    }

    return (
        <FormWrapper title="Events">
            <label className="container-event">Vertical1
                <h1 className="">Innoskill Engineering Drift and Design</h1>
                <div className="events">
                    {
                        v1.map((data, index) => (
                            <div className="event-item" key={data.eventName}>
                                <label>{data.eventName}</label>
                                <input type="checkbox" onChange={() => handleV1CheckboxChange(index)} />
                                <div>
                                    {
                                        data.members !== null &&
                                        <select value={data.members} onChange={(e) => {
                                            const updatedData = [...v1];
                                            updatedData[index].members = e.target.value;
                                            setv1(() => updatedData)
                                        }}>
                                            <option value={0} disabled={true}>Select Team Size</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </label>

            <label className="container-event">Vertical2
                <h1 className="">Innoskill Business and Management Conundrum</h1>
                <div className="events">
                    {
                        v2.map((data, index) => (
                            <div className="event-item" key={data.eventName}>
                                <label>{data.eventName}</label>
                                <input type="checkbox" onChange={() => handleV2CheckboxChange(index)} />
                                <div>
                                    {
                                        data.members !== null &&
                                        <select value={data.members} onChange={(e) => {
                                            const updatedData = [...v2];
                                            updatedData[index].members = e.target.value;
                                            setv2(() => updatedData)
                                        }}>
                                            <option value={0} disabled={true}>Select Team Size</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </label>

            <label className="container-event">
                <h1 className="">Innoskill Healthcare Mystery</h1>
                <div className="events">
                    {
                        v3.map((data, index) => (
                            <div className="event-item" key={data.eventName}>
                                <label>{data.eventName}</label>
                                <input type="checkbox" onChange={() => handleV3CheckboxChange(index)} />
                                <div>
                                    {
                                        data.members !== null &&
                                        <select value={data.members} onChange={(e) => {
                                            const updatedData = [...v3];
                                            updatedData[index].members = e.target.value;
                                            setv3(() => updatedData)
                                        }}>
                                            <option value={0} disabled={true}>Select Team Size</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </label>

            <label className="container-event">
                <h1 className="">Innoskill Sustainathon</h1>
                <div className="events">
                    {
                        v4.map((data, index) => (
                            <div className="event-item" key={data.eventName}>
                                <label>{data.eventName}</label>
                                <input type="checkbox" onChange={() => handleV4CheckboxChange(index)} />
                                <div>
                                    {
                                        data.members !== null &&
                                        <select value={data.members} onChange={(e) => {
                                            const updatedData = [...v4];
                                            updatedData[index].members = e.target.value;
                                            setv4(() => updatedData)
                                        }}>
                                            <option value={0} disabled={true}>Select Team Size</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </label>

            <label className="container-event">
                <h1 className="">Innoskill Culinary and Hospitality</h1>
                <div className="events">
                {
                        v5.map((data, index) => (
                            <div className="event-item" key={data.eventName}>
                                <label>{data.eventName}</label>
                                <input type="checkbox" onChange={() => handleV5CheckboxChange(index)} />
                                <div>
                                    {
                                        data.members !== null &&
                                        <select value={data.members} onChange={(e) => {
                                            const updatedData = [...v5];
                                            updatedData[index].members = e.target.value;
                                            setv5(() => updatedData)
                                        }}>
                                            <option value={0} disabled={true}>Select Team Size</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </label>

            <label className="container-event">
                <h1 className="">Innoskill Law Knot</h1>
                <div className="events">
                {
                        v6.map((data, index) => (
                            <div className="event-item" key={data.eventName}>
                                <label>{data.eventName}</label>
                                <input type="checkbox" onChange={() => handleV6CheckboxChange(index)} />
                                <div>
                                    {
                                        data.members !== null &&
                                        <select value={data.members} onChange={(e) => {
                                            const updatedData = [...v6];
                                            updatedData[index].members = e.target.value;
                                            setv6(() => updatedData)
                                        }}>
                                            <option value={0} disabled={true}>Select Team Size</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </label>

            <label className="container-event">
                <h1 className="">Innoskill Media and Literary Stumper</h1>
                <div className="events">
                {
                        v7.map((data, index) => (
                            <div className="event-item" key={data.eventName}>
                                <label>{data.eventName}</label>
                                <input type="checkbox" onChange={() => handleV7CheckboxChange(index)} />
                                <div>
                                    {
                                        data.members !== null &&
                                        <select value={data.members} onChange={(e) => {
                                            const updatedData = [...v7];
                                            updatedData[index].members = e.target.value;
                                            setv7(() => updatedData)
                                        }}>
                                            <option value={0} disabled={true}>Select Team Size</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </label>

            <label className="container-event">
                <h1 className="">Innoskill Social Spectrum</h1>
                <div className="events">
                {
                        v8.map((data, index) => (
                            <div className="event-item" key={data.eventName}>
                                <label>{data.eventName}</label>
                                <input type="checkbox" onChange={() => handleV8CheckboxChange(index)} />
                                <div>
                                    {
                                        data.members !== null &&
                                        <select value={data.members} onChange={(e) => {
                                            const updatedData = [...v8];
                                            updatedData[index].members = e.target.value;
                                            setv8(() => updatedData)
                                        }}>
                                            <option value={0} disabled={true}>Select Team Size</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </label>
            <div className="fixed bottom-10 right-10 border p-5 font-bold text-2xl bg-gray-800 rounded-lg text-white">
                Price:₹ {prices}
            </div>
        </FormWrapper>
    )
}