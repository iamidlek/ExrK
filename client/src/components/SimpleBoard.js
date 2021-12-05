import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Input, Modal, Row, Table } from "reactstrap";
import Items from "./Items";
import ModalInside from "./ModalInside";
// import { getListData, searchListTitle, searchListContent } from "../apis/CRUD";
import { getList, searchListTitle, searchListContent } from "../redux/Board";
export default function SimpleBoard() {
  const [text, setText] = useState("");
  // const [list, setList] = useState([]);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const list = useSelector((state) => state);
  useEffect(() => {
    dispatch(getList());
    // getListData(setList);
  }, []);

  return (
    <Container>
      <Row style={{ padding: "30px" }}>
        <Col className="col-8">
          <Input value={text} onChange={(e) => setText(e.target.value)} />
        </Col>
        <Col className="col-2 d-flex justify-content-end">
          <Button
            color="primary"
            onClick={() => {
              dispatch(searchListTitle(text));
              setText("");
            }}
          >
            제목 검색
          </Button>
        </Col>
        <Col className="col-2">
          <Button
            color="success"
            onClick={() => {
              dispatch(searchListContent(text));
              setText("");
            }}
          >
            내용 검색
          </Button>
        </Col>
      </Row>
      <Modal isOpen={modal}>
        <ModalInside setModal={setModal} />
      </Modal>
      <Table>
        <thead>
          <tr>
            <th>순번</th>
            <th>제목</th>
            <th>입력자</th>
            <th>입력일</th>
            <th>기능</th>
          </tr>
        </thead>
        <tbody>{list && list.map((item) => <Items item={item} />)}</tbody>
      </Table>
      <Row style={{ padding: "30px" }}>
        <Col className="col-10"></Col>
        <Col style={{ paddingLeft: "30px" }}>
          <Button color="danger" onClick={() => setModal(true)}>
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
