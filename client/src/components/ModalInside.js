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
// import { getListData, addBoard } from "../apis/CRUD";
import { getList, addBoard } from "../redux/Board";
import { useDispatch } from "react-redux";

export default function ModalInside({ setModal }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  const addPost = () => {
    if (title === "" || content === "" || user === "") {
      return;
    }
    dispatch(addBoard({ title, content, insert_user: user }));
    dispatch(getList());
    setModal((curr) => !curr);
  };
  return (
    <>
      <ModalHeader>추가하기</ModalHeader>
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
          <FormGroup>
            <Label for="insert_user">insert_user</Label>
            <Input
              id="insert_user"
              name="insert_user"
              placeholder="사용자명을 입력하세요"
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" type="submit" onClick={() => addPost()}>
          insert
        </Button>
        <Button onClick={() => setModal(false)}>Cancel</Button>
      </ModalFooter>
    </>
  );
}
