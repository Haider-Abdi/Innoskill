import FormWrapper from "./FormWrapper";
import UPI from "./assets/UPI.png"

type PaymentFormTypes = {
    prices: number,
}

export function PaymentForm({ prices }: PaymentFormTypes) {
    return (
        <FormWrapper title="Pay your registration fee here">
            <h3><br></br>
                Bank Name: IndusInd Bank<br></br>
                Account Name:  MANAV RACHNA INTERNATIONAL INSTITUTE OF RESEARCH AND STUDIES GST<br></br>
                Account No:  201004119068<br></br>
                IFSC Code:  INDB0000702</h3>
            <div className="fixed bottom-10 right-10 border p-5 font-bold text-2xl">
                Price: {prices}
            </div>
            <div className="flex flex-col justify-center items-center">
            <img src={UPI} alt="logo" width={400} />
            </div>
        </FormWrapper >
    )
}