type SAFCOMTypes = {
  amount: number
  phone: number
  videoCode: string
}

export const tryOutFetchTransaction = async (paymentDetails: SAFCOMTypes) => {
  const paymentRes = await fetch(`${process.env.HOME_URL}/api/safPayments/`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      Amount: paymentDetails.amount,
      PhoneNumber: paymentDetails.phone,
      AccountReference: paymentDetails.videoCode
    })
  })

  const data = await paymentRes.json()
  console.log(data)
}
