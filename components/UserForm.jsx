"use client";

import FormWrapper from "./FormWrapper";

export function UserForm({
    firstName,
    lastName,
    email,
    age,
    phone,
    option,
    uniName,
    semester,
    rollNo,
    teamName,
    updateFields
}) {
    return (
        <FormWrapper title="Enter Your Details">
            <div className="flex flex-col">
                <label>First Name</label>
                <input autoFocus required type="text" className="userFormInput" value={firstName} onChange={e => updateFields({ firstName: e.target.value })} />

                <label>Last Name</label>
                <input required type="text" className="userFormInput" value={lastName} onChange={e => updateFields({ lastName: e.target.value })} />

                <label>Email-ID</label>
                <input required type="email" className="userFormInput" value={email} onChange={e => updateFields({ email: e.target.value })} />

                <label>Age</label>
                <input required min={1} type="number" className="userFormInput" value={age} onChange={e => updateFields({ age: e.target.value })} />

                <label>Contact Number</label>
                <input required min={1} type="number" className="userFormInput" value={phone} onChange={e => updateFields({ phone: e.target.value })} />


                <label className="bg-white my-5">
                    <select value={option} onChange={(e) => updateFields({ option: e.target.value })}>
                        <option value={"School"}>School</option>
                        <option value={"University"}>University</option>
                    </select>
                </label>

                <label>University/School Name</label>
                <input required type="text" className="userFormInput" value={uniName} onChange={e => updateFields({ uniName: e.target.value })} />

                <label>Class/Semester</label>
                <input required type="text" className="userFormInput" value={semester} onChange={e => updateFields({ semester: e.target.value })} />

                <label>University/School Roll Number</label>
                <input required type="text" className="userFormInput" value={rollNo} onChange={e => updateFields({ rollNo: e.target.value })} />

                <label>Team Name</label>
                <input autoFocus required type="text" value={teamName} onChange={(e) => updateFields({ teamName: e.target.value })} className="userFormInput" />
            </div>
        </FormWrapper>
    )
}