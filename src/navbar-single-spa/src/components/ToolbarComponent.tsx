import { Button, Box, Container } from '@mui/material';
import { Menu, ArrowDropDown } from '@mui/icons-material';
function ToolbarComponent() {
    return (
        <Box sx={{
            backgroundColor: 'secondary.light',
            color: 'white',
            py: 1,
        }}>
            <Container maxWidth={false}>
                <Button style={{ color: 'white' }}>
                    <Menu sx={{ mr: 1 }} /> All
                </Button>
                <Button style={{ color: 'white' }}>Prime Video</Button>
                <Button style={{ color: 'white' }}>Gift Cards</Button>
                <Button style={{ color: 'white' }}>Home Improvement</Button>
                <Button style={{ color: 'white' }}>Shopper Toolkit</Button>
                <Button style={{ color: 'white' }}>Buy Again</Button>
                <Button style={{ color: 'white' }}>Gift Ideas</Button>
                <Button style={{ color: 'white' }}>Vouchers</Button>
                <Button style={{ color: 'white' }}>Drugstore & Body Care</Button>
                <Button style={{ color: 'white' }}>Sports & Outdoors</Button>
                <Button style={{ color: 'white' }}>Toys & Games</Button>
                <Button style={{ color: 'white' }}>Home & Kitchen</Button>
                <Button style={{ color: 'white' }} endIcon={<ArrowDropDown/>}>Prime</Button>
                <Button style={{ color: 'white' }}>Beauty & Personal Care</Button>
            </Container>
        </Box>
    )
}

export default ToolbarComponent;