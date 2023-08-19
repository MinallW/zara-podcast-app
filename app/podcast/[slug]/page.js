
import PodcastInternal from '../../components/PodcastInternal'
import PodcastEpisodeList from '../../components/PodcastEpisodeList'

async function getPodcast(id) {
    const res = await fetch(`https://itunes.apple.com/lookup?id=${id}`,
        { next: { revalidate: 86400 } }) // 1 day cache

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function PodcastPage({ params }) {

    const podcastId = params.slug
    const { results } = await getPodcast(podcastId)
    const podcast = results[0]
    return (
        <>
            <div className='flex items-center justify-evenly m-20'>
                <PodcastInternal
                    author={podcast.artistName}
                    imageURL={podcast.artworkUrl600}
                    country={podcast.country}
                    title={podcast.trackName}
                />
                <PodcastEpisodeList trackCount={podcast.trackCount} podcastId={podcastId} />

            </div>
        </>
    )
}