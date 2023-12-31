import { ColorRing } from  'react-loader-spinner';


const Loader = () => {
    return (
        <ColorRing
            visible={true}
            height="90"
            width="90"
            ariaLabel="blocks-loading"
            wrapperStyle={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    );
};

export default Loader;