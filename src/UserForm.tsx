export function UserForm(){
    return(
        <>
            <label>First Name</label>
            <input autoFocus required type = "text" />
            <label>Last Name</label>
            <input required type = "text" />
            <label>Email-ID</label>
            <input required type = "email" />
            <label>Age</label>
            <input required min={1} type = "number" />
            <label>Contact Number</label>
            <input required min={1} type = "number" />
            <label>University/School Name</label>
            <input required type = "text" />
            <label>Class/Semester</label>
            <input required type = "text" />
            <label>University/School Roll Number</label>
            <input required type = "text" />





        </>
    )
}