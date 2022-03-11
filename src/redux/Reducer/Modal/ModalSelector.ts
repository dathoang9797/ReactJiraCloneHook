import { RootState } from '@redux/store';

export const selectStateModal = (state: RootState) => {
  return {
    visible: state.modalReducer.visible,
    ComponentContentDrawer: state.modalReducer.ComponentContentDrawer,
    callBackSubmit: state.modalReducer.callBackSubmit,
  };
};
