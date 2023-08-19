import Stack from '@mui/joy/Stack';
import { Typography } from '@mui/material';
import Card from '@mui/joy/Card';
import Table from '@mui/joy/Table';
import EpisodeLink from './PodcastEpisodeLink';

async function getPodcastEpisodes(id) {
    const res = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode&limit=20`,
        { next: { revalidate: 86400 } }) // 1 day cache

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

function formatTrackDuration(trackTimeMillis) {
    const totalSeconds = Math.floor(trackTimeMillis / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const remainingSeconds = totalSeconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    if (hours > 0) {
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds} hour`;
    } else {
        return `${formattedMinutes}:${formattedSeconds} min`;
    }
}


function formatDateToDDMMYYYY(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

export default async function PodcastEpisodeList({ trackCount, podcastId }) {
    const { results } = await getPodcastEpisodes(podcastId)

    return (
        <Stack spacing={2} sx={{ maxWidth: 1000 }}>
            <Card>
                <Typography fontSize={'lg'}>Episodes: {trackCount}</Typography>
            </Card>
            <Card>
                <Table aria-label="basic table">
                    <thead>
                        <tr>
                            <th style={{ width: '40%' }}>Title</th>
                            <th>Date</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <EpisodeLink
                                            link={element.trackName}
                                            podcastId={podcastId}
                                            podcastEpisodeId={element.trackId}
                                            episodeURL={element.episodeUrl}
                                            episodeName={element.trackName}
                                            episodeDescription={element.description}
                                        />
                                    </td>
                                    <td>{formatDateToDDMMYYYY(element.releaseDate)}</td>
                                    <td>{formatTrackDuration(element.trackTimeMillis)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Card>
        </Stack>

    )
}