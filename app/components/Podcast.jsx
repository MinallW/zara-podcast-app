import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';

function limitString(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    } else {
        return str.substring(0, maxLength) + "...";
    }
}

export default function Podcast({ title, author, imageURL, description }) {
    console.log(description)
    return (
        <Card variant="outlined" orientation='horizontal' sx={{ width: 400 }}>
            <CardOverflow>
                <AspectRatio ratio="1" sx={{ width: 200 }}>
                    <img
                        src={imageURL.label}
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
    )
}