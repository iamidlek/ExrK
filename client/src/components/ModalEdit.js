import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
// import { getListData, editBoard } from "../apis/CRUD";
import { useDispatch } from "react-redux";
import { getList, editBoard } from "../redux/Board";

export default function ModalEdit({ item, setEditModal }) {
  const [title, setTitle] = useState(item.title);
  const [content, setContent] = useState(item.content);

  const dispatch = useDispatch();

  const editPost = async () => {
    dispatch(editBoard({ id: item.id, title, content }));
    dispatch(getList());
    setEditModal((curr) => !curr);
  };
  return (
    <>
      <ModalHeader>변경하기</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="title">title</Label>
            <Input
              id="title"
              name="title"
              placeholder="제목을 입력하세요"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="content">content</Label>
            <Input
              id="content"
              name="content"
              placeholder="내용을 입력하세요"
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" type="submit" onClick={() => editPost()}>
          Edit
        </Button>
        <Button onClick={() => setEditModal(false)}>Cancel</Button>
      </ModalFooter>
    </>
  );
}
