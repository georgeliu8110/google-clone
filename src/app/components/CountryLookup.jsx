'use client'

import { useState, useEffect } from 'react'

export default function CountryLookup() {

  const [country, setCountry] = useState('')

  useEffect(() => {
    const getcountry = async () => {
      const res = await fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
      const data = await res.json()
      console.log(data)
      setCountry(`${data.city}, ${data.region}, ${data.country}`)
    }
    getcountry()
  }, [])

  return (
    <div>
      <h1>{country}</h1>
    </div>
  );
}