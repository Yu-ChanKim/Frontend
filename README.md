# KH Frontend 수업(20201109)

 # 1. HTML 

  - HTML : HyperText Markup Language
  - HTTP : HyperText Transfer Protocol
    - HTML 전송
  

  URL(Uniform Resource Locator)

  http://127.0.0.1:5500/20201109/index.html
  
  - 127.0.0.1 - IP주소(혹은 도메인)
  - 5500 - 포트
  - /20201109/index.html - 리소스 경로

http 포트 - 기본 80
https 포트(보안) - 기본 443 (기본값이라 생략된다 - 요즘 default)

이데넛 - MITM(중간자 공격방법) (https 쓰는 이유)

 # 2. 주소창에 입력했을 때 찾아가는 과정

 1. 주소를 입력
 2. 로컬에 등록된 DMS IP 주소로 해당 도메인을 질의(query)함
 3. 해당 DNS에 정보가 캐싱된 경우는 바로 응답 받음
    3.1 없는 경우 상위 DNS에게 질의
 4. 응답 받은 IP 주소로 접속(브라우저가)
 5. 해당 서버에게 리소스 요청
 6. 해당 서버가 리소스 응답(html, js, image, audio, video)
 7. 브라우저는 html 문서 받아서 렌더링(받은 문서 그림그린다?)

 # 3. HTML

  - 태그 - 문서 기본 요소
    - <와 >로 감싸져있음. (<html>)
    - 권장 : 태그는 소문자로
    - 단일 태그 형태 : <태그/>
    - 일반 태그
        - <태그>내용</태그>
        - 여는 태그 : <태그>
        - 닫는 태그 : </태그>
    - 계층 구조로 되어있다(트리)
        - 포함관계 명확하게 할것
    - 태그는 속성을 갖고 있음
        - <태그 속성=값 속성=값></태그>

# 4. html 태그

lang 속성

- ko : 한국어
- en : 영어
- ja : 일본어
- zh : 중국어

크롤러

## 4.1. head 태그

<head>
    <meta dec>
</head>

SEO : Serarch Engine Optimization

- title 태그 - 제목 표시
- meta
  - 문자셋
  - 브라우저 호환성 표시
  - 검색 결과 설명 지정
  - 검색 결과 표시 문구 지정
  - 봇(로봇) 제어 - 검색엔진수집(크롤러?)

# 4.2. body

 실제로 렌더링 되는 정보들 영역

# 1. 텍스트  - 블록

## 1.1. hn(n값 1 ~6)

heading, 제목표시  -- 블럭과 인라인 범위 설정하는 법 익혀놓기

## 1.2. p 태그

paragraph, 문단  -- html에서 아무리 탭을 누르고 스페이스 눌러놔도 서버에 띄우면 스페이스 하나로 나온다.

- 스페이스 아무리 많이 입력해도 공백은 하나로 표시됨.
- 줄바꿈 없이 텍스트를 쭉 입력할 수 있음 (부모의 영역 넘어가면 줄 바꿈 일어남)

## 1.3. br 태그

break, 줄바꿈
 - 단일 태그임에 유의

## 1.4. hr 태그 - 수평줄

horizontal rule, 수평 줄

## 1.5. blockquote - 인용구

인용구  <마진(Margin) 값이 사방에 있음>

## 1.6. pre 

텍스트에서 공백을 그대로 출력 (p 태그와는 차이가 있다)


# 2. 텍스트 - 인라인 

## 2.1. strong, b - 굵게(bold) 처리

텍스트 굵게 표시

## 2.2. em, i - 이텔릭

강조할 때 글자 기울임 꼴(emphasize)

## 2.3. q - 인라인 인용구 (quote)

## 2.4. mark - 형광펜

## 2.6. span - 아무것도 안함
 지정해 놓은 뒤 나중에 스타일 지정하고 버튼 생성하고 할 때 스팬처리해서 작업한다.

## 2.7. ruby - 일본어 훈독? 해줄 때
 일본어나 한자 위에 설명 넣어줄 때 <ruby>한자<rt>한자에대한 설명</rt></ruby>


# 3. 목록
 <뎁스(depth)- 트리의 깊이, 길이 - 들여써지는 정도>
- 순서 없는 목록(unordered list)
- 순서 있는 목록(ordered list)
  
# 3.1. 순서 없는 목록

ul, li

'''html
<ul>
    <li>리스트</li>
    <ul>
        <li>리스트2</li>
    </ul>
</ul>

## 3.2. 순서 있는 목록
ol
'''html
<ol>

</ol>

## 3.3. 설명 있는 목록

dl (description list)
dt - 제목
dd - 설명


# 4. 표

만드는 방법 2가지 (사실 이것보다는 요즘은 레이아웃 써서 만드는 방법 더 선호)

- table
- tr (table row)
- td (tag define)
- th (tag header)
  

# 5. 이미지

jpeg,svg,png,gif 등등

img 태그 (단일태그)

```html
<img src="이미지url(또는 파일의 경로)"/>
```

src - 이미지 url, 파일 경로
alt - 대체 문구(alternative)
width - 너비
height - 높이


# 6. a 태그

<a href="링크">링크이름</a>

속성

- href : 주소
- target : 링크가 표시될 방법
- download : 링크의 리소스를 다운로드

target 속성
- _blank
- self: 기본 값

사이트확인
http://127.0.0.1:5500/20201109/index.html


html/css 바로 돌리면서 확인해보는 사이트

https://liveweave.com/
https://htmledit.squarefree.com/


랜덤 글씨 뽑을 수 있는 사이트
https://lipsum.com/

html 코드 사용법 설명 블로그
https://aboooks.tistory.com/258