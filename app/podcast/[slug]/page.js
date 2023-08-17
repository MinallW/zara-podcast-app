import Card from '@mui/joy/Card';
import PodcastInternal from './PodcastInternal'

async function getPodcast(id) {
    const res = await fetch(`https://itunes.apple.com/lookup?id=${id}`,
        { next: { revalidate: 86400 } }) // 1 day cache

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    
    return res.json()
}

export default async function PodcastPage({ params }) {
    const { results } = await getPodcast(params.slug)
    const podcast = results[0]
    console.log(podcast)
    return (
        <>
            <div className='flex items-center justify-around m-20'>
                <PodcastInternal
                    author={podcast.artistName}
                    imageURL={podcast.artworkUrl600}
                    country={podcast.country}
                    title={podcast.trackName}
                />
                <h1>Podcast {params.slug}</h1>

            </div>
        </>
    )
}