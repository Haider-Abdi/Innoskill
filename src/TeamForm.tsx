export function TeamForm(){
    return(
        <>
          <label>Team Name</label>
          <input autoFocus required type = "text" />
          <label>No. of Members</label>  
          <input required min={1} type = "number" />
          <label>Member 2 details</label>
            <label>First Name</label>
            <input type = "text" />
            <label>Last Name</label>
            <input type = "text" />
            <label>Age</label>
            <input min={1} type = "number" />
            <label>Contact Number</label>
            <input min={1} type = "number" />
            <label>Class/Semester</label>
            <input type = "text" />
            <label>University/School Roll Number</label>
            <input type = "text" />
          <label>Member 3 details</label>
            <label>First Name</label>
            <input type = "text" />
            <label>Last Name</label>
            <input type = "text" />
            <label>Age</label>
            <input min={1} type = "number" />
            <label>Contact Number</label>
            <input min={1} type = "number" />
            <label>Class/Semester</label>
            <input type = "text" />
            <label>University/School Roll Number</label>
            <input type = "text" />
          <label>Member 4 details</label>
            <label>First Name</label>
            <input type = "text" />
            <label>Last Name</label>
            <input type = "text" />
            <label>Age</label>
            <input min={1} type = "number" />
            <label>Contact Number</label>
            <input min={1} type = "number" />
            <label>Class/Semester</label>
            <input type = "text" />
            <label>University/School Roll Number</label>
            <input type = "text" />  
        </>
    )
}