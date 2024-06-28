import { NextResponse } from "next/server"
import { generateSafcomAccessToken } from "@/safcomAccessToken"

const processRequestUrl = `https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest?`
const callBackURL = `${process.env.HOME_HTTPS_URL}/api/safcallback`
//console.log(callBackURL)
const passkey = "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919"
const BusinessShortCode = "174379"
const date = new Date()
const Timestamp = date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + ("0" + date.getHours()).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2)

const Password = btoa(`${BusinessShortCode}${passkey}${Timestamp}`)
const PartyB = "174379"

export async function POST(req: Request) {
  const requestData = await req.json()

  const access_token = await generateSafcomAccessToken()

  let { Amount, PhoneNumber, AccountReference } = requestData

  let headers = new Headers()
  headers.append("Content-Type", "application/json")
  headers.append("Authorization", "Bearer " + access_token)

  try {
    const paymentRes = await fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
      method: "POST",
      headers,
      body: JSON.stringify({
        BusinessShortCode: 174379,
        Password: Password,
        Timestamp: Timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: 1,
        PartyA: 254712990778,
        PartyB: 174379,
        PhoneNumber: 254712990778,
        CallBackURL: callBackURL,
        AccountReference: AccountReference,
        TransactionDesc: "Payment of X"
      })
    })

    const paymentResData = await paymentRes.json()
    return NextResponse.json({ paymentResData }, { status: 201 })
  } catch (e) {
    console.log(e)
  }
  //return NextResponse.json({ message: "just testing" }, { status: 201 })
}
