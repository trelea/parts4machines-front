import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import { Skeleton } from './ui/skeleton';

const Image = React.forwardRef(
  (
    props: DetailedHTMLProps<
      ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >,
    _
  ) => {
    const [_l, _sL] = React.useState<boolean>(false);

    React.useEffect(() => {
      setTimeout(() => _sL(true), 250);
    }, [_l]);

    return (
      <>
        {_l ? (
          <img {...props} />
        ) : (
          <Skeleton className='w-full aspect-square bg-secondary/50 rounded-xl'></Skeleton>
        )}
      </>
    );
  }
);

export default Image;
