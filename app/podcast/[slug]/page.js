async function getPodcast(id) {
    const res = await fetch(`https://itunes.apple.com/lookup?id=${id}`)

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
            <h1>Podcast {params.slug}</h1>
        </>
    )
}