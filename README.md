### blog 프로젝트

```
yarn create next-app blog --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

1. Link 최적화

- a 태그만 사용할 때보다 효용도가 높음 (전체 로드 x 필요한 js파일만 로드)
- 뷰포트 내에서 노출될 때 로드가 가능(build하여 확인가능)
- 클라이언트 링크로 연결할때만 사용

```
<Link href="/"><a>이동하기</a></Link>
```

2. layout/robots.txt/images

```
import Image from 'next/image'
<img src="images/react.png" alt="react"/>
<Image src="/images/react.png" width={200} height={200} react="react"/>
//파일명 webp : 가벼운용량, 레이지로드(Link와 동일한 기능)
```

<img width="1501" alt="스크린샷 2023-06-11 오후 5 21 07" src="https://github.com/fangmin266/gitlevelup/assets/123913446/56d447a2-7739-4024-b4fa-cb4636a67c49">

nestjs에서 제공하는 head 컴퍼너트에 title, image, description등 og tag , icon, third party script 추가 가능

3. SSG(build time) / SSR(request time)
   정적페이지
   getStaticProps - SSG (marketing, blog, product list, help documnentation)

   동적페이지
   getServerSideProps - SSR
   ISR, CSR

4. pre-rendering, data-fetching

```
yarn add gray-matter (md 파일 파싱)
yarn add remark remark-html (md 파일 해석)
```

static한 props의 경우 fs에서 읽어오기 가능,
csr의 경우 api fetch하여 클라이언트 사이드에서 적용 가능

5. dynamic routes
   getStaticPath => getStaticProps의 경로지정함수 (fallback)
