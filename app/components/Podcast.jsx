"use client"

import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';
import Link from 'next/link'
import { useAppDispatch } from "@/redux/hooks";
import { select } from "@/redux/features/podcastSlice";
import { toggle } from '@/redux/features/loadingSlice';

function limitString(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    } else {
        return str.substring(0, maxLength) + "...";
    }
}

export default function Podcast({ id, title, author, artworkURL, description }) {
    const dispatch = useAppDispatch();

    return (
        <Link href={`/podcast/${id}`} onClick={() => {
            dispatch(select({
                title: title.label,
                description: description.label,
                author: author.label,
                artworkURL: artworkURL.label,
                episodeURL: ''
            }))
            dispatch(toggle())
        }}>
            <Card variant="outlined" orientation='horizontal' sx={{ width: 400 }}>
                <CardOverflow>
                    <AspectRatio ratio="1" sx={{ width: 200 }}>
                        <img
                            src={artworkURL.label}
                            loading="lazy"
                            alt="Podcast OfficialImage"
                        />
                    </AspectRatio>
                </CardOverflow>
                <CardContent sx={{ overflow: 'hidden' }}>
                    <Typography level="title-md" variant="outlined">{title.label}</Typography>
                    <Typography level="body-sm" sx={{ mt: 0.5 }}>{limitString(description.label, 140)}</Typography>
                    <Divider />
                    <Typography level="body-xs" color='neutral' sx={{ mt: 0.5, textAlign: 'right' }}>By: {author.label}</Typography>
                </CardContent>
            </Card>
        </Link>

    )
}
