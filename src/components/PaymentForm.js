import FormWrapper from "./FormWrapper";

export function PaymentForm({ prices }) {
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
        </FormWrapper>

    )
}