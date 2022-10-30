# 라이너 프론트 엔드 엔지니어 사전과제
![Vector](https://user-images.githubusercontent.com/48500149/198866426-3e45e034-7ff7-4da8-9c38-6dcd44abdbf6.png)

## ⏳ 프로젝트 기간
### 2022년 10월 26일 - 2022년 10월 30일
## 사용한 기술스택및 라이브러리
### Stack
* Redux
  * Data 들을 전역으로 관리하기 위해 사용
* Styled-component
  * css 를 component 로써 재사용과 styling 을 위해 사용
* Javascript
  * React 와 함께 앱의 로직을 구현을 위해 사용
* ContextAPI
  * data 를 redux가 아닌 props drilling 를 피하기 위해 사용
### Libary
- react-intersection-observer
  * 무한 스크롤 구현시 브라우저 아래 스크롤를 감지 하기 위해 사용
- cross-env
  * API URL 를 숨기기위해 사용
- react-router-dom
  * 뒤로 가기나 search-bar 에서 다른 component로 navigate 하기 위해사용

## Project file tree
 * [components](https://github.com/byjgpark/Liner_Project/tree/main/src/components)
   * [Header.jsx]([./dir2/file21.ext](https://github.com/byjgpark/Liner_Project/blob/main/src/components/Header.jsx))
   * [ResultList.jsx]([./dir2/file21.ext](https://github.com/byjgpark/Liner_Project/blob/main/src/components/ResultList.jsx))
   * [SkeletonList.jsx]([./dir2/file21.ext](https://github.com/byjgpark/Liner_Project/blob/main/src/components/SkeletonList.jsx))
   * [useScrollPosition.jsx]([./dir2/file21.ext](https://github.com/byjgpark/Liner_Project/blob/main/src/components/useScrollPosition.js))
 * [elements]([./dir2](https://github.com/byjgpark/Liner_Project/tree/main/src/elements))
   * [ErrorModal.jsx]([./dir2/file21.ext](https://github.com/byjgpark/Liner_Project/blob/main/src/elements/ErrorModal.jsx))
   * [SearchBar.jsx]([./dir2/file22.ext](https://github.com/byjgpark/Liner_Project/blob/main/src/elements/SearchBar.jsx))
 * [pages]([./dir1](https://github.com/byjgpark/Liner_Project/tree/main/src/pages))
   * [Home.jsx]([./dir1/file11.ext](https://github.com/byjgpark/Liner_Project/blob/main/src/pages/Home.jsx))
   * [Result.jsx]([./dir1/file12.ext](https://github.com/byjgpark/Liner_Project/blob/main/src/pages/Result.jsx))
 * [redux]([./dir1](https://github.com/byjgpark/Liner_Project/tree/main/src/redux))
   * [config]([./dir1/file12.ext](https://github.com/byjgpark/Liner_Project/tree/main/src/redux/config))
     * [configStore.js]([./dir1/file12.ext](https://github.com/byjgpark/Liner_Project/blob/main/src/redux/config/configStore.js))
 * [modules]([./file_in_root.ext](https://github.com/byjgpark/Liner_Project/tree/main/src/redux/modules))
   * [bookmarkSlice.js]([./dir1/file12.ext](https://github.com/byjgpark/Liner_Project/blob/main/src/redux/modules/bookmarkSlice.js))
   * [searchSlice.js]([./dir1/file12.ext](https://github.com/byjgpark/Liner_Project/blob/main/src/redux/modules/searchSlice.js))
 * [shared]([./README.md](https://github.com/byjgpark/Liner_Project/tree/main/src/shared))
   * [context.js]([./dir1/file12.ext](https://github.com/byjgpark/Liner_Project/blob/main/src/shared/context.js))
   * [GlobalStyle.jsx]([./dir1/file12.ext](https://github.com/byjgpark/Liner_Project/blob/main/src/shared/GlobalStyle.jsx))
   * [request.js]([./dir1/file12.ext](https://github.com/byjgpark/Liner_Project/blob/main/src/shared/request.js))
 * [static]([./dir3](https://github.com/byjgpark/Liner_Project/tree/main/src/static/images))
 * [App.js]([./dir3](https://github.com/byjgpark/Liner_Project/blob/main/src/App.css))
 * [index.js]([./dir3](https://github.com/byjgpark/Liner_Project/blob/main/src/index.js))

 
 ### 간략한 파일구조 설명
 - components : 재사용이 적은 컴포넌트를 모아놨음
 - elments : 2 번이상으로 재사용이된 컴포넌트
 - pages : components & elments 들이 import 되어 실제 렌더되는 페이지들
 - redux : 리덕스 툴킷의 파일들
 - shared : context API & globalStyle & 그리고 Axio을 위한 instant 파일들
 - static : 렌더될 이미지들을 모아눔
 - .env : github 에서는 ignore 올라갔지만 security 문제로 API URL 를 숨기기위해 사용



