import { ReactNode } from "react"

type FormWrapperPropTypes = {
    title: string,
    children: ReactNode
}

const FormWrapper = ({ title, children }: FormWrapperPropTypes) => {
    return (
        <div>
            <h1 className="font-bold text-4xl">{title}</h1>
            {children}
        </div>
    )
}

export default FormWrapper
