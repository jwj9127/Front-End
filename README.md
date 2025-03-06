## 📛프로젝트명 - 힐랙스(HEALAX)

#### 컴퓨터를 주로 하는 사람들의 삶의 질을 올려줄 수 있는 힐링 비서

<br/>

## 🚧프로젝트 소개

IT 기술을 활용하여 현대인의 건강 (wellness) 문제를 해결할 수 있는 서비스
<br/>
Heal의 치유하다는 뜻과 Realax의 휴식을 취하다는 뜻을 합친 합성어 healax
<br/>
컴퓨터 관련 업무를 하며 스트레스나 압박을 받는 사람을 위해 백색소음, 편안한 음악으로 <br/>
마음의 안정을 얻게 해준다. 자세한 설명은 [여기](https://github.com/user-attachments/files/19094776/healax.pdf)를 참고하시면 됩니다.

## 👩🏻‍💻 프로젝트 참여 인원

#### Frontend - 3명
#### Backend - 3명

## ✨ 기술 스택

- 기획디자인 : <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
- 프론트엔드 : <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=html5&logoColor=white">

- 백엔드 : <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> <img src="https://img.shields.io/badge/spring Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/JPA-6DB33F?style=for-the-badge&logo=JPA&logoColor=white"/>

- ETC : <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">

## 💡 서비스 핵심 기능

**`회원가입 / 로그인 페이지`**
  - 회원가입 / 아이디 중복 확인 / 로그인이 가능합니다.

**`마이 페이지`**

  - 캐릭터를 선택할 수 있습니다.
  - 레벨을 확인할 수 있습니다.

**`메인 페이지`**
  - 배경화면을 취향에 맞게 선택할 수 있습니다.
  - 배경화면에 따라 스티커를 붙여 배경화면을 꾸밀 수 있습니다.
  - 배경음악 / ASMR을 취향에 맞게 선택 후 플레이할 수 있습니다.
  - 캘린더 기능을 지원합니다.
  - TODOLIST 기능을 지원합니다.

**`뮤직 플레이어 페이지`**
  - 유튜브 API를 활용한 음악 플레이어를 사용할 수 있습니다.
  - lofi , piano 카테고리 중 하나를 선택하여 음악을 들을 수 있습니다.

## 🍆 본인이 구현한 기능

- 회원가입 / 로그인 페이지 등 모든 페이지 퍼블리싱
- 메인 페이지 - 배경화면 : 배경화면에 적용할 사진을 클릭하면 서버와 API 통신 이후 현재 배경화면에 해당 사진을 적용하는 기능 구현
- 메인 페이지 - 스티커 전환 : 현 배경화면에 적용할 스티커를 클릭하면 서버와 API 통신 이후 x,y position으로 css를 설정하여 스티커를 추가하는 기능 구현
- 메인 페이지 - 배경음악 : 페이지 로그인 시 기본 음악이 흘러나오며 상호작용하여 API 통신 후 재생 / 정지를 할 수 있는 기능 구현
- 메인 페이지 - ASMR 재생 : ASMR을 클릭하여 API 통신 후 재생 / 정지 할 수 있는 기능 구현
- 메인 페이지 - 캘린더 : 날짜를 선택하여 일정을 작성 / 수정 / 삭제 할 수 있는 기능과 현재 일정을 조회해주는 기능 구현
- 메인 페이지 - TODOLIST : TODOLIST를 추가 / 수정 / 삭제 / 완료 할 수 있는 기능 구현
- 뮤직 플레이어 페이지 - 유튜브 API와 react-player를 활용하여 프로젝트에 맞게 메서드를 커스터마이징하여 기능 구현

## 🚩 트러블 슈팅

### 1. 문제 - 오디오 겹침 문제
#### 상황
- 메인페이지와 ASMR 컴포넌트를 따로 구분하여 오디오가 두 곳에서 나오는 현상 발생

#### 해결 방법
- 오디오 사운드를 하나의 props로 처리하여 배경음악 소리를 90%정도 줄여 두 사운드가 조화롭게 이루어질 수 있게 해결

#### 배운 점 
- props로 hooks 상태를 처리하는 것도 하나의 좋은 방법이라는 걸 알게 되었습니다.

<br/>
<br/>
<br/>

## 🏴󠁰󠁡󠁥󠁭󠁿 이후 리팩토링 겸 AI 경진대회를 위해 재 작업 🏴󠁰󠁡󠁥󠁭󠁿

<br/>

## 차이점

  - 불필요한 기능을 삭제하였습니다. ( 스티커 기능 삭제 )
  - 이미지를 저장하는 방식을 바꿨습니다. ( DB -> GCP )
  - React 라이브러리에서 Next.js 프레임워크로 개발 환경을 변경했습니다.
  - TypeScript, Redux를 도입하였습니다.
  - OpenAI API를 사용하여 키워드를 통해 재생 목록 추가 기능을 도입하였습니다.
  - Git Convention을 도입하였습니다.

<br/>

## 👩🏻‍💻 프로젝트 참여 인원

#### Frontend - 1명
#### Backend - 2명

## ✨ 기술 스택

- 기획디자인 : <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
- 프론트엔드 : <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"/> ![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)


- 백엔드 : <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> <img src="https://img.shields.io/badge/spring Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/JPA-6DB33F?style=for-the-badge&logo=JPA&logoColor=white"/> ![GCP](https://img.shields.io/badge/GCP-Google%20Cloud%20Platform-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white) ![API](https://img.shields.io/badge/API-blue?style=for-the-badge&logo=swagger&logoColor=white)


- ETC : <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">

## 💡 추가된 기능

**`뮤직 플레이어 페이지`**
  - 유튜브 url을 입력하면 서버와 API 통신 이후 영상을 재생 목록에 추가하는 기능 구현
  - AI 입력창에 키워드 ( 재미있는 영상 / 재치있는 영상 / 활발한 영상 등 ) 를 입력하면 서버와 API 통신 이후 재생 목록을 추천 받는 기능 구현
  - 메인 페이지 내의 모든 기능을 컴포넌트화하여 기능을 분리하여 페이지의 메인 코드가 60% 삭감
  - Redux 전역 상태 라이브러리를 사용하여 API를 미들웨어로 분류하여 서버와 통신하였고 전역 상태를 이용하여 로그인 페이지 전환 등 토글 기능을 구현
  - Type을 추가하여 서버와 통신할 DTO의 Type을 명시함 ( 컴파일 시점에서 오류를 수정하여 런타임 오류 수정 시간 80% 감소 )

## 🚩 개선된 부분

### 1. 개선점 - 안정성 보장
#### 설명
- TypeScript를 도입하여 원래라면 런타임에서 발생할 오류를 컴파일 시점에서 수정하였습니다.

#### 느낀 점 
- 런타임 오류를 컴파일 시점에서 잡을 수 있다는 건 런타임 후 오류 수정하는 시간을 줄일 수 있기에 좋은 기능이라고 느낌

### 2. 개선점 - 로직 분류
#### 설명
- Redux를 이용하여 API 미들웨어를 관리하였습니다.

#### 느낀 점 
- 기존 렌더링 로직과 API 분리는 코드의 가독성을 뛰어나게 해주었고, Redux를 이용하여 애플리케이션 상태를 종합적으로 관리할 수 있다는 점에 대해서 props와 비교하며 고민할 수 있는 시간을 가질 수 있었습니다.

<br/>
<br/>
<br/>
