'use client'

import { useState, useEffect } from 'react'
import Podcast from './components/Podcast'
import Input from '@mui/joy/Input';

export default function Home() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
      .then((res) => res.json())
      .then(({feed}) => {
        console.log(feed.entry)
        setData(feed.entry)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      <div className='flex items-center justify-around'>
        <Input size="lg" className='m-8 z-0' />
      </div>
      <main className="flex min-h-screen flex-wrap items-center justify-around p-24 gap-24">
        {data.map((podcast, index) => {
          return (
            <Podcast key={index}/>
          )
        })}
      </main>
    </>

  )
}
