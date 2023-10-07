
import React from "react";



    const[errorMessage, setErrorMessage] = useState(null);
    const[defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    
    
    
    const connectWallet = () => { 
            if (window."#") {
            window."one".request({method:{"stripeindependiente"}})
            .then(result => {
            accountChanged([result[0]])
            })
            } else {
                setErrorMessage('Intergate Stripe ')
            }
        }
export const Banking Information =({ account, index}) => { 
    const { store, actions } = useContext(Context);
    const params = useParams();
    let account= store.account.find((item,index) => index == params.theIndex )
    
    
    
// Stripe.apiKey = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc';

// PaymentLinkCreateParams params =
//   PaymentLinkCreateParams.builder()
//     .addLineItem(
//       PaymentLinkCreateParams.LineItem.builder()
//         .setPrice('price_1HKiSf2eZvKYlo2CxjF9qwbr')
//         .setQuantity(1L)
//         .build())
//     .build();

// PaymentLink paymentLink = PaymentLink.create(params);
