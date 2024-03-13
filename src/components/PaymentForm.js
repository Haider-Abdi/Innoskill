import FormWrapper from "./FormWrapper";
import UPI from "../assets/UPI.png"

export function PaymentForm({ prices }) {
    return (
        <FormWrapper title="Pay your registration fee here">
            <h3><br></br>
                Bank Name: IndusInd Bank<br></br>
                Account Name:  MANAV RACHNA INTERNATIONAL INSTITUTE OF RESEARCH AND STUDIES GST<br></br>
                Account No:  201004119068<br></br>
                IFSC Code:  INDB0000702</h3>
                <div className="fixed bottom-10 right-10 border p-5 font-bold text-2xl bg-gray-800 rounded-lg text-white">
                Price:₹ {prices}
            </div>
            <div className="flex flex-col justify-center items-center">
            <img src={UPI} alt="UPI QR CODE" width={500} />
            </div>
            
        </FormWrapper>

    )
}