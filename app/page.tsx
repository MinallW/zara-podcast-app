'use client'

import { useState, useEffect } from 'react'
import Podcast from './components/Podcast'
import Input from '@mui/joy/Input';

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      <div className='flex items-center justify-around'>
        <Input size="lg" className='mt-8 mb-[-250px] z-0' />
      </div>
      <main className="flex min-h-screen flex-wrap items-center justify-around p-24">
        <Podcast />
        <Podcast />
        <Podcast />
      </main>
    </>

  )
}
