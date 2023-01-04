import { Button } from '@mui/material';
import { ShoppingCartOutlined} from '@mui/icons-material';
function ShoppingBasketComponent() {
    return (
        <div>
            <Button sx={{ color: 'white' }}>
                <div style={{ whiteSpace: "break-spaces", maxWidth: 70, lineHeight: 1, textAlign: 'left' }}>
                    Returns <strong>& Orders</strong>
                </div>
            </Button>
            <Button sx={{ color: 'white' }} variant='text'>
                <ShoppingCartOutlined fontSize='large' /> <div style={{ whiteSpace: "break-spaces", maxWidth: 50, lineHeight: 1 }}>Shopping- <strong>Basket</strong></div>
            </Button>
        </div>
    )
};

export default ShoppingBasketComponent;
