import { Button, DatePicker, Form, Input, Modal, Select } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import UploadFile from '../UploadFile/UploadFile';

const ModalWindow: React.FC = () => {
  const [open, setOpen] = useState(false);

  const { TextArea } = Input;

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
  };

  const StyledGenreDAteWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `;

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add new book
      </Button>
      <Modal
        title="New book"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={500}
      >
        {/*<Input placeholder="Book title" style={{ width: '40%' }} />*/}
        {/*<br />*/}
        {/*<Input placeholder="Author" style={{ width: '40%' }} />*/}
        {/*<br />*/}
        {/*<Select style={{ width: '10%' }} defaultValue="Genre">*/}
        {/*  <Option value="Horror">Horror</Option>*/}
        {/*  <Option value="Fantasy">Fantasy</Option>*/}
        {/*</Select>*/}
        {/*<DatePicker style={{ width: '15%' }} />*/}
        {/*<TextArea showCount maxLength={100} style={{ height: 120 }} onChange={onChange} />*/}

        <Form>
          {/*<Upload listType="picture-card">*/}
          {/*  <div>*/}
          {/*    <PlusOutlined />*/}
          {/*    <div style={{ marginTop: 8 }}>Add image</div>*/}
          {/*  </div>*/}
          {/*</Upload>*/}

          {/*<Form.Item label="Book">*/}
          {/*  <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>*/}
          {/*    <Upload.Dragger name="files">*/}
          {/*      <p className="ant-upload-drag-icon">*/}
          {/*        <InboxOutlined />*/}
          {/*      </p>*/}
          {/*      <p className="ant-upload-text">Click or drag file to this area to upload</p>*/}
          {/*      <p className="ant-upload-hint">Support for a single or bulk upload.</p>*/}
          {/*    </Upload.Dragger>*/}
          {/*  </Form.Item>*/}
          {/*</Form.Item>*/}

          <Form.Item>
            <Input required placeholder="Book title" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item>
            <Input required placeholder="Author" style={{ width: '100%' }} />
          </Form.Item>
          <StyledGenreDAteWrapper>
            <Form.Item>
              <Select style={{ width: '220px' }} defaultValue="Genre">
                <Select.Option value="fantasy">Fantasy</Select.Option>
                <Select.Option value="horrors">Horrors</Select.Option>
                <Select.Option value="detectives and thrillers">Detectives and thrillers</Select.Option>
                <Select.Option value="business literature">Business literature</Select.Option>
                <Select.Option value="documentary literature">Documentary literature</Select.Option>
                <Select.Option value="home and family">Home and family</Select.Option>
                <Select.Option value="dramaturgy">Dramaturgy</Select.Option>
                <Select.Option value="art, art studies, design">Art, Art Studies, Design</Select.Option>
                <Select.Option value="computers and internet">Computers and Internet</Select.Option>
                <Select.Option value="literature for children">Literature for children</Select.Option>
                <Select.Option value="romance novels">Romance novels</Select.Option>
                <Select.Option value="science, education">Science, Education</Select.Option>
                <Select.Option value="poetry">Poetry</Select.Option>
                <Select.Option value="adventures">Adventures</Select.Option>
                <Select.Option value="prose">Prose</Select.Option>
                <Select.Option value="Religion, spirituality, esotericism">
                  Religion, spirituality, esotericism
                </Select.Option>
                <Select.Option value="reference literature">Reference literature</Select.Option>
                <Select.Option value="ancient">Ancient</Select.Option>
                <Select.Option value="technique">Technique</Select.Option>
                <Select.Option value="textbooks and manuals">Textbooks and manuals</Select.Option>
                <Select.Option value="folklore">Folklore</Select.Option>
                <Select.Option value="humor">Humor</Select.Option>
                <Select.Option value="other things">Other things</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <DatePicker picker="year" style={{ width: '220px' }} placeholder="Year of publication" />
            </Form.Item>
          </StyledGenreDAteWrapper>
          <Form.Item>
            <TextArea
              required
              placeholder={'Description'}
              style={{ width: '100%', resize: 'none' }}
              showCount
              maxLength={250}
              rows={3}
            />
          </Form.Item>
          <div style={{ display: 'flex' }}>
            <UploadFile title={'Upload poster'} accept={'.jpg, .png, .svg'} />
            <UploadFile title={'Upload book'} accept={'.txt, .pdf, .fb2, .word'} />
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default ModalWindow;
