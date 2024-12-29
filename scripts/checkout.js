import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/backend-practice.js';
new Promise(() => {
    console.log("promise h");
})
renderOrderSummary();
renderPaymentSummary();