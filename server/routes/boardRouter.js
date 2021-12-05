const express = require("express");

const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());

// get 방식은 req.query
// post 방식은 req.body

router.post("/", (req, res, next) => {
  console.log("type", req.query.type);
  const type = req.query.type;
  if ("list" === type) {
    // 목록 조회
    // localhost:5001/board?type=list
    const dbconnect_Module = require("./dbconnect_module");

    // mybaits
    req.body.mapper = "BoardMapper"; // 파일명 정의
    req.body.crud = "select"; // select, insert, update, delete 중 하나
    req.body.mapper_id = "selectBoardList"; // 파일의 select 엘리먼트의 id

    router.use("/", dbconnect_Module); // 모듈로 요청 (이동)
    next("route");
  } else if ("insert" === type) {
    // 저장
    // localhost:5001/board?type=insert
    const dbconnect_Module = require("./dbconnect_module");

    // mybaits
    req.body.mapper = "BoardMapper"; // 파일명 정의
    req.body.crud = "insert"; // select, insert, update, delete 중 하나
    req.body.mapper_id = "insertBoard"; // 파일의 select 엘리먼트의 id

    router.use("/", dbconnect_Module); // 모듈로 요청 (이동)
    next("route");
  } else if ("update" === type) {
    // 수정
    // localhost:5001/board?type=update
    const dbconnect_Module = require("./dbconnect_module");

    // mybaits
    req.body.mapper = "BoardMapper"; // 파일명 정의
    req.body.crud = "update"; // select, insert, update, delete 중 하나
    req.body.mapper_id = "updateBoard"; // 파일의 select 엘리먼트의 id

    router.use("/", dbconnect_Module); // 모듈로 요청 (이동)
    next("route");
  } else if ("delete" === type) {
    // 삭제
    // localhost:5001/board?type=delete
    const dbconnect_Module = require("./dbconnect_module");

    // mybaits
    req.body.mapper = "BoardMapper"; // 파일명 정의
    req.body.crud = "delete"; // select, insert, update, delete 중 하나
    req.body.mapper_id = "deleteBoard"; // 파일의 select 엘리먼트의 id

    router.use("/", dbconnect_Module); // 모듈로 요청 (이동)
    next("route");
  }
});

module.exports = router;
