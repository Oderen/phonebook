import { ThreeDots } from 'react-loader-spinner';

const Loader = ({ width = 120, height = 120, marginTop = 150, text = '' }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        width: '100vw',
        height: '100vh',

        marginTop: { marginTop },
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <ThreeDots
        width={width}
        heigth={height}
        radius="9"
        color="#003262"
        ariaLabel="three-dots-loading"
        wrapperClassName=""
        visible={true}
      />
      <h1
        style={{
          margin: 0,
          marginTop: 20,
        }}
      >
        {text}
      </h1>
    </div>
  );
};

export default Loader;
