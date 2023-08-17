import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';

export default function PodcastInternal({ author, imageURL, country, title }) {
    return (
        <Card variant="outlined" sx={{ width: 400, height: 500 }}>
            <div className='flex justify-center'>
                <img
                    src={imageURL}
                    loading="lazy"
                    alt=""
                    height={200}
                    width={300}
                />
            </div>

            <CardContent>
                <Typography fontSize="lg" fontWeight="lg">
                    {title}
                </Typography>
                <Typography fontSize="sm" fontWeight={'sm'}>
                    by {author}
                </Typography>
                <Divider sx={{ m: 2 }} />
                <Typography fontSize="lg" >
                    Description:
                </Typography>
                <Typography fontSize="sm" >
                    Description here
                </Typography>
            </CardContent>
        </Card>
    );
}