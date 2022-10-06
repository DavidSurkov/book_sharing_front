import { ChangeEventHandler, FC, useRef, useState } from 'react';
import { Button, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { posterTypes } from '../../../utils/constants/fileTypes';
import { StyledError } from 'ui/common-styles/common.styles';

type UploadPosterPropsType = {
  setPosterFile: (posterFile: File) => void;
  setPosterError: (posterError: boolean) => void;
  isPropsError: boolean;
};

const UploadPoster: FC<UploadPosterPropsType> = ({ setPosterFile, setPosterError, isPropsError = false }) => {
  const [newImage, setNewImage] = useState<string>();
  const inputPosterRef = useRef<HTMLInputElement>(null);

  const selectPosterHandler = () => {
    inputPosterRef && inputPosterRef.current?.click();
  };

  const onChangePosterHandler: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    if (target.files && target.files[0]) {
      const poster = target.files[0];
      setPosterError(false);
      if (poster.size > 5e6) {
        notification.error({ message: 'File is more then 5mb' });
        return;
      }
      if (!Object.values(posterTypes).includes(poster.type)) {
        notification.error({ message: 'Wrong poster format' });
        return;
      }
      convertToBase64(poster, (file64: string) => {
        setNewImage(file64);
      });
      setPosterFile(poster);
    }
  };

  const convertToBase64 = (poster: File, callBack: (value: string) => void) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const file64 = reader.result as string;
      callBack(file64);
    };
    reader.readAsDataURL(poster);
  };

  return (
    <div>
      <Button style={{ width: '150px' }} onClick={selectPosterHandler} icon={<UploadOutlined />}>
        Upload poster
      </Button>
      <input
        ref={inputPosterRef}
        onChange={onChangePosterHandler}
        hidden
        type="file"
        accept={`${posterTypes.jpeg}, ${posterTypes.jpg}, ${posterTypes.png}`}
      />
      {newImage && <img src={newImage} alt="poster image" />}
      {isPropsError && <StyledError>Poster is required!</StyledError>}
    </div>
  );
};

export default UploadPoster;
