# 웹 서버, WAS를 통한 DB CRUD

## Client

### @reduxjs/toolkit

- createSlice, createAsyncThunk 를 이용한 redux store 생성
- 기능
  - 목록 조회
  - 제목 검색
  - 내용 검색
  - 추가
  - 수정
  - 삭제

```js
// 생략
// create
export const addBoard = createAsyncThunk(
  "board/addBoard",
  async ({ title, content, insert_user }, { dispatch }) => {
    try {
      await axios.post("/board?type=insert", {
        title,
        content,
        insert_user,
      });
      dispatch(getList());
    } catch (error) {
      console.log(error);
    }
  }
);
// 생략

const boardSlice = createSlice({
  name: "board",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getList.fulfilled]: (state, { payload }) => {
      return payload;
    },
    [searchListTitle.fulfilled]: (state, { payload }) => {
      return payload;
    },
    [searchListContent.fulfilled]: (state, { payload }) => {
      return payload;
    },
  },
});

export const boardSilceReducer = boardSlice.reducer;
```

## Server

### express로 웹 서버 및 WAS 구성(간단.ver)

- 웹 서버

  - 정적 파일(html. css, 이미지)을 제공
  - 변함 없는 페이지 등에 적절

- WAS
  - 동적 데이터를 제공
    > DB 정보를 가져옴
    > 어느 사용자가 먼저 요청하였는지
    > 정상적인 접근인지
    > 사용량은 적절한지
    > 보안상 문제는 없는지
    > 트랜잭션(DB의 상태를 변화시키기 해서 수행하는 작업의 단위)의 처리여부 확인

### 패키지

- body-parser
  - post 방식의 req.body 데이터를 parsing 해줌
    > extended false : querystring 모듈
    > extended true : qs 모듈

```js
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());

// 4.16.0 이후 빌트인 되어 추가 설정 불필요
// const express = require('express');
// const app = express();
// app.use(express().json());
// app.use(express.urlencoded( {extended : false } ));
```

- cookie-parser
  - 쿠키 해더를 파싱
    > 쿠키 이름에 의해 키가 지정된 객체로 req.cookies를 채운다
    > secret 문자열은 다른 미들웨어에서 사용할 수 있도록 req.secret을 할당

```js
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.get("/", function (req, res) {
  // Cookies that have not been signed
  console.log("Cookies: ", req.cookies);

  // Cookies that have been signed
  console.log("Signed Cookies: ", req.signedCookies);
});
```

- mybatis-mapper

  > 관계형 데이터 베이스 프로그래밍을 좀더 쉽게 할 수 있게 도와주는 프레임워크

```js
const dbconnect_Module = require("./dbconnect_module");

// mybaits
req.body.mapper = "BoardMapper"; // 파일명 정의
req.body.crud = "select"; // select, insert, update, delete 중 하나
req.body.mapper_id = "selectBoardList"; // 파일의 select 엘리먼트의 id

router.use("/", dbconnect_Module); // 모듈로 요청 (이동)
next("route");
```

```js
// dbconnect_module.js

const db_config = require("../config/db-config.json");
var express = require("express");
var router = express.Router();
// mysql 패키지를 사용하겠다
const mysql = require("mysql");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// mybatis 부르는 방식
router.post("/", (req, res) => {
  const mybatisMapper = require("mybatis-mapper");
  const param = req.body;
  console.log(param);
  // mybatis mapper경로 설정
  // /moels/SwToolsMapper.xml
  const mapperXml = "./model/" + param.mapper + ".xml";
  console.log(param, mapperXml);
  mybatisMapper.createMapper([mapperXml]);
  // ...이하 생략
```
