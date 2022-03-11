import React, { useState } from 'react';
import { Drawer, Button, Select, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '@redux/hook';
import { selectStateModal } from '@redux/Reducer/Modal/ModalSelector';
import { toggleModalAction } from '@redux/Reducer/Modal/ModalSlice';

const ModalCyberbugs = () => {
  //const [visible, setVisible] = useState(false);
  const { ComponentContentDrawer, visible, callBackSubmit } =
    useAppSelector(selectStateModal);
  const dispatch = useAppDispatch();

  const showDrawer = () => {
    dispatch(toggleModalAction(true));
  };

  const onClose = () => {
    dispatch(toggleModalAction(false));
  };

  return (
    <>
      <Button type='primary' onClick={showDrawer} icon={<PlusOutlined />}>
        New account
      </Button>
      <Drawer
        title='Create a new account'
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={callBackSubmit} type='primary'>
              Submit
            </Button>
          </Space>
        }
      >
        {ComponentContentDrawer}
      </Drawer>
    </>
  );
};

export default ModalCyberbugs;
