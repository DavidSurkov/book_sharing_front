import React from 'react';
import { DatePicker, Form, Input, Select } from 'antd';
import UploadFile from '../UploadFile/UploadFile';
import styled from 'styled-components';
import { useAllGenreQuery } from '../../../dal/book/bookAPI';

const StyledGenreDAteWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledUploadWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const FormItem = () => {
  const { data } = useAllGenreQuery();

  const { TextArea } = Input;

  return (
    <Form>
      <Form.Item>
        <Input required placeholder="Book title" style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item>
        <Input required placeholder="Author" style={{ width: '100%' }} />
      </Form.Item>
      <StyledGenreDAteWrapper>
        <Form.Item>
          <Select style={{ width: '220px' }} defaultValue="Genre">
            {data &&
              data.map((i) => (
                <Select.Option key={i.id} value={i.name}>
                  {i.name}
                </Select.Option>
              ))}
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
      <StyledUploadWrapper>
        <UploadFile title={'Upload poster'} accept={'.jpg, .png, .svg'} />
        <UploadFile title={'Upload book'} accept={'.txt, .pdf, .fb2, .word, .epub'} />
      </StyledUploadWrapper>
    </Form>
  );
};

export default FormItem;
