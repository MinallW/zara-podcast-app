import CircularProgress from '@mui/joy/CircularProgress';

export default function NavBarSpinner() {
    if (!true) {
        return (
            <CircularProgress color="neutral" />
        )
    } else {
        return (
            <CircularProgress color="neutral" value={100} />
        )
    }
}