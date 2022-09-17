import { Button, Modal } from 'antd';
import { FC, useState } from 'react';
import FormItem from '../Form/FormItem';

const ModalWindow: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add new book
      </Button>
      <Modal
        title="Add new book"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={500}
      >
        <FormItem />
      </Modal>
    </>
  );
};

export default ModalWindow;
