import React, { useState } from "react";
import { Button, Collapse, Modal } from "reactstrap";
import ModalEdit from "./ModalEdit";
// import { getListData, deleteBoard } from "../apis/CRUD";
import { useDispatch } from "react-redux";
import { getList, deleteBoard } from "../redux/Board";

const Items = ({ item }) => {
  const [toggle, setToggle] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const { id, title, content, insert_user, insert_date } = item;
  const dispatch = useDispatch();

  const deleteItem = async (e) => {
    e.stopPropagation();
    dispatch(deleteBoard(id));
    dispatch(getList());
  };
  const edit = (e) => {
    e.stopPropagation();
    setEditModal(true);
  };
  return (
    <>
      <tr key={id} onClick={() => setToggle((curr) => !curr)}>
        <th scope="row">{id}</th>
        <td>{title}</td>
        <td>{insert_user}</td>
        <td>{insert_date}</td>
        <td>
          <Button onClick={(e) => edit(e)}>수정</Button>
          <Modal isOpen={editModal}>
            <ModalEdit setEditModal={setEditModal} item={item} />
          </Modal>
          <Button onClick={(e) => deleteItem(e)}>삭제</Button>
        </td>
      </tr>
      <Collapse isOpen={toggle}>{content}</Collapse>
    </>
  );
};

export default Items;
