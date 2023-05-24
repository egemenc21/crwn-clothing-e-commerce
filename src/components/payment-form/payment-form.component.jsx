import {PaymentElement,useStripe,useElements} from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import {PaymentFormContainer, FormContainer} from "./payment-form.styles";
import {BUTTON_TYPE_CLASSES} from "../button/button.component";
const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements()
    const paymentHandler = async(e)=>{
        e.preventDefault();
        if(!stripe || !elements) return;
    }
  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment: </h2>
        {/* <PaymentElement /> */}
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>PAY NOW</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};
export default PaymentForm;
