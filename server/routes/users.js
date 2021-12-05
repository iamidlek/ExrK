var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/json", function (req, res, next) {
  res.send({ message: "This is Json Data" });
});

router.post("/post", function (req, res, next) {
  res.send({ message: "This is Json Data call post" });
});

router.post("/sendJson", function (req, res, next) {
  console.log(req.query, req.body);
  res.send("성공");
});

// req 는 ? 뒤의 쿼리문
// res는 보내줄 데이터
// next() 다음 라우터로 이동시켜줌
// req res 정보 다가져감

// users/abcd 면
// router.get('/abcd', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
