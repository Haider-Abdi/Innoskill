const FormWrapper = ({ title, children }) => {
    return (
        <div>
            <h1 className="font-bold text-4xl">{title}</h1>
            <div className="">{children}</div>
        </div>
    )
}

export default FormWrapper
