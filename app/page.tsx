'use client'

import { useState, useEffect } from 'react'
import Podcast from './components/Podcast'
import Input from '@mui/joy/Input';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Home() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [filterValue, setFilterValue] = useState(''); // State for filtering

  useEffect(() => {
    fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
      { next: { revalidate: 86400 } })
      .then((res) => res.json())
      .then(({ feed }) => {
        console.log(feed.entry)
        setData(feed.entry)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>

  const filteredData = data.filter(podcast => {
    const title = podcast['im:name'].label.toLowerCase();
    const author = podcast['im:artist'].label.toLowerCase();
    const filter = filterValue.toLowerCase();

    return title.includes(filter) || author.includes(filter);
  });

  // Calculate the start and end index of items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // Extract the items to display for the current page
  const itemsToDisplay = filteredData.slice(startIndex, endIndex);

  return (
    <>
      <div className='flex items-center justify-around'>
        <Input
          size="lg"
          className='m-8 z-0'
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          placeholder="Filter by title or author"
        />
      </div>
      <main className="flex min-h-screen flex-wrap items-center justify-around p-24 gap-24">
        {itemsToDisplay.map((podcast, index) => {
          return (
            <Podcast
              key={index}
              id={podcast.id.attributes['im:id']}
              title={podcast['im:name']}
              author={podcast['im:artist']}
              imageURL={podcast['im:image'][2]}
              description={podcast['summary']}
            />
          )
        })}
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)} // Calculate total number of pages
          page={currentPage}
          variant="outlined"
          shape="rounded"
          onChange={(event, page) => setCurrentPage(page)} // Handle page change
        />      </main>
    </>

  )
}
