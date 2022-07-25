## 📌 프로젝트 실행 방법

라이브러리를 설치합니다.

```
npm install
```
프로젝트를 실행시킵니다.
```
npm start
```


## :books: 사용한 기술과 선택한 이유
**redux-toolkit**<br/>
정렬, 모드, 카드펼침여부 등의 전역 상태를 관리하기 위해 사용했습니다. 처음에는 recoil을 이용해 진행했으나, 생각보다 고려해야할 전역 상태가 많았고, 익숙하지 않은 recoil로 진행하기에는 어려움이 있었습니다. 따라서 보다 익숙한 redux-toolkit으로 리팩토링 하였습니다.

**redux-logger**<br/>
개발환경에서 redux의 상태를 지속적으로 확인해주기 위해 사용했습니다.

**react-router-dom**<br/>
페이지 이동 시 상태가 유지됨을 확인해주기 위해 사용했습니다.

**react-icons**<br/>
요구하는 화면에 최대한 맞는 아이콘을 사용하기 위해 사용했습니다.

**axios**<br/>
보다 간결한 http 통신을 하기 위해 사용했습니다.


