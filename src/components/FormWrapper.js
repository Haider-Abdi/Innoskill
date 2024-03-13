const FormWrapper = ({ title, children }) => {
    return (
        <div>
            <h1 className="font-bold text-4xl">{title}</h1>
            {children}
        </div>
    )
}

export default FormWrapper
