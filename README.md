## 📌 프로젝트 실행 방법

라이브러리를 설치합니다.

```
npm install
```
프로젝트를 실행시킵니다.
```
npm start
```

![image](https://user-images.githubusercontent.com/48580444/180768178-2a9b9529-537c-4668-afca-2a3afdd4cc68.png)
<br/>메인 화면입니다.
<br/>
<br/>
![image](https://user-images.githubusercontent.com/48580444/180768309-8d93f514-69c5-41e2-8d27-88a0a02e503d.png)
<br/>단어 선택, 스크롤 이벤트를 할 수 있습니다.
<br/>
<br/>
![image](https://user-images.githubusercontent.com/48580444/180768492-7583ec93-cec2-43ed-8725-d2830a0b9a7e.png)
<br/>모달을 이용해 정렬 기준을 선택할 수 있습니다.
<br/>
<br/>
<br/>등등 번역, 단어의 위치 변경, 암기 완료, 학습 분류, 전체 보이기, 상태 유지 기능을 구현했습니다.


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

**※해당 프로젝트는 모바일  환경에 맞게 구현되었습니다.**<br/>
**제공된 URI에 CORS이슈가 발생하여, proxy서버로 이슈를 해결했습니다. **
