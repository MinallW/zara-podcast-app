import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Image from 'next/image'

export default function Podcast() {
    return (
        <Card variant="outlined" sx={{ width: 320 }}>
            <CardOverflow>
                <img
                    src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                    srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                    loading="lazy"
                    alt=""
                />
            </CardOverflow>
            <CardContent>
                <Typography level="title-md">Podcast Title</Typography>
                <Typography level="body-sm">Author: Some author of the podcast</Typography>
            </CardContent>
        </Card>
    )
}