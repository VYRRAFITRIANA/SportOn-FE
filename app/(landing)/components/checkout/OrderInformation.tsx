import CardWithHeader from "../UI/card-with-header";






const OrderInformation = () => {
    return (

        <CardWithHeader title="Order Information">
             <div className="p-5">
             <div className="input-group">
                <div className="mb-5">
                <label htmlFor="full_name">Full Name</label>
                <input type="text" placeholder="type your full name" id="full_name" />
                </div>
            </div>
            <div className="input-group">
                <div className="mb-5">
                <label htmlFor="Whatsapp_Number">Whatsapp Number</label>
                <input type="text" placeholder="+62xxx" id="Whatsapp_Number" />
                </div>
            </div>
                <div className="input-group">
                <div className="mb-5">
                <label htmlFor="Shipping_address">Shipping Address</label>
                <textarea placeholder="Enter your shipping address" id="Shipping_address" rows={7} />
                </div>
            </div>
            </div>
        </CardWithHeader>
        
    );
}

export default OrderInformation;