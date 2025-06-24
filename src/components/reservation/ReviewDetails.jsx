import "./ReviewDetails.css";

function ReviewDetails({ formData, onHandleFormData, onHandleCheckout }) {
    return (
        <div className="modal__review">
            <div>
                <h3>Review your Details</h3>
                <ul>
                    <li><div>Full name:</div> <div>{formData.name}</div></li>
                    <li><div>Phone number:</div> <div>{formData.phone}</div></li>
                    <li><div>Email:</div> <div>{formData.email}</div></li>
                    <li><div>Date to come:</div> <div>{formData.day}/{formData.month}/{formData.year}</div></li>
                    <li><div>Time to come:</div> <div>{formData.time}</div></li>
                    <li><div>Number of people:</div> <div>{formData.people}</div></li>
                    <li><div>Occasions:</div> <div>{formData.occasion}</div></li>
                </ul>
                <button className="button__ui" onClick={onHandleFormData}>Edit</button>
                <button className="button__ui" onClick={onHandleCheckout}>Go to Checkout</button>
            </div>
        </div>
    )
}

export default ReviewDetails;