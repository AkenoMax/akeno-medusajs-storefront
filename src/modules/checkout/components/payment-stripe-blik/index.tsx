import {
  PaymentElement,
} from "@stripe/react-stripe-js"
import {
  StripePaymentElementOptions,
} from "@stripe/stripe-js"

import React, { useMemo } from "react"

const PaymentStripeBlik: React.FC = () => {
  const useOptions:
  | StripePaymentElementOptions
 = useMemo(() => {
  return {
  }
}, [])

  
    return (
      <div>
        <div className="flex flex-col relative w-full pb-6">
          <Payment options={useOptions} />
        </div>
      </div>
    )
  }
  
  const Payment = ({
    options,
  }: {
    options: StripePaymentElementOptions
  }) => {
    return (
      <div className="border-b border-gray-200 py-2 relative">
        <PaymentElement options={options}/>
      </div>
    )
  }

export default PaymentStripeBlik