import { ThreeDots } from  'react-loader-spinner'

export default function Loading() {
    return (
    <ThreeDots 
        height='45'
        width='80' 
        radius="9"
        color="#FFFFFF" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName="Loading"
        visible={true}
    />
    );
}