import { Oval } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Oval
        height={120}
        width={120}
        color="#465EFD"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#528FDF"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </LoaderWrapper>
  );
};
