import FormWrapper from "./FormWrapper";


type UserData = {
    firstName: string,
    lastName: string,
    email: string,
    age: number,
    phone: number,
    uniName: string,
    semester: string,
    rollNo: string,
}

type UserFormProps = UserData & {
    updateFields: (fields: any) => void
}


export function UserForm({
    firstName,
    lastName,
    email,
    age,
    phone,
    uniName,
    semester,
    rollNo,
    updateFields
}: UserFormProps) {
    return (
        <FormWrapper title="Enter Your Details">
            <div className="flex flex-col">
                <label>First Name</label>
                <input autoFocus required type="text" className="userFormInput" value={firstName} onChange={e => updateFields({firstName: e.target.value})}/>

                <label>Last Name</label>
                <input required type="text" className="userFormInput" value={lastName} onChange={e => updateFields({lastName: e.target.value})}/>

                <label>Email-ID</label>
                <input required type="email" className="userFormInput" value={email} onChange={e => updateFields({email: e.target.value})}/>

                <label>Age</label>
                <input required min={1} type="number" className="userFormInput" value ={age} onChange={e => updateFields({age: e.target.value})} />

                <label>Contact Number</label>
                <input required min={1} type="number" className="userFormInput" value = {phone} onChange={e => updateFields({phone: e.target.value})}/>

                <label>University/School Name</label>
                <input required type="text" className="userFormInput" value = {uniName} onChange={e => updateFields({uniName: e.target.value})}/>

                <label>Class/Semester</label>
                <input required type="text" className="userFormInput" value = {semester} onChange={e => updateFields({semester: e.target.value})} />

                <label>University/School Roll Number</label>
                <input required type="text" className="userFormInput" value = {rollNo} onChange={e => updateFields({rollNo: e.target.value})}/>
            </div>
        </FormWrapper>
    )
}