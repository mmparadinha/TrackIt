import { ThreeDots } from  'react-loader-spinner';

export default function Loading() {
    return (
    <ThreeDots 
        height='35'
        width='60' 
        radius="7"
        color="#FFFFFF" 
        ariaLabel="three-dots-loading"
        visible={true}
    />
    );
};