import React from "react"
import SingleShowShowcase from "@/app/components/SingleShowShowcase"
import Trailer from "@/app/components/Trailer"
import ShowDescription from "@/app/components/ShowDescription"
import CallToActionButtons from "@/app/components/CallToActionButtons"
import RelatedShows from "@/app/components/RelatedShows"

import { useSearchParams } from "next/navigation"

import "./single-show.css"

type TSingleShow = {
  categoryName: string
  showId: string
}

const SingleShowPage = ({ params }: { params: TSingleShow }) => {
  const showId = params?.showId
  return (
    <>
      <SingleShowShowcase showId={showId} />
      <Trailer />
      <ShowDescription showId={showId} />
      <CallToActionButtons />
      <RelatedShows />
    </>
  )
}

export default SingleShowPage
