const webtoons = [
  {
    id: 1,
    title: '신의탑',
    genre: '판타지',
    contribute: {
      writer: 'SIU',
      illustrator: 'SIU',
      authorship: 'SIU',
      company: 'naver'
    }
  },
  {
    id: 2,
    title: '전지적 독자 시점',
    genre: '판타지',
    contribute: {
      writer: '싱숑',
      illustrator: '슬리피-C',
      authorship: '싱숑',
      company: 'naver'
    }
  },
  {
    id: 3,
    title: '천재 타자가 강속구를 숨김',
    genre: '일상물',
    contribute: {
      writer: '황지성',
      illustrator: '스튜디오MW',
      authorship: '이블라인',
      company: 'naver'
    }
  },
  {
    id: 4,
    title: '흑막 여주가 날 새엄마로 만들려고 해',
    contribute: {
      genre: '아침드라마',
      writer: ['이산시', '이지형'],
      illustrator: '하리힌',
      authorship: '목감기',
      company: 'naver'
    }
  },
  {
    id: 5,
    title: '벼락승진',
    genre: '일상물',
    contribute: {
      writer: '이모세',
      illustrator: '이모세',
      authorship: '이모세',
      company: 'kakao'
    }
  },
  {
    id: 6,
    title: '나혼자만 레벨업',
    genre: '일상물',
    contribute: {
      writer: '현군',
      illustrator: '장성락',
      authorship: '추공',
      company: 'kakao'
    }
  },
  {
    id: 7,
    title: '악녀 시어머니를 그만뒀더니, 다들 내게 집착한다',
    genre: '스릴러',
    contribute: {
      writer: '소망',
      illustrator: '소망',
      authorship: 'Rana',
      company: 'kakao'
    }
  }
];
// 문제 7. 작가중에 이상하게 이름이 올라가있는 사람을 지워주고 자연스럽게 수정해주세요 해당 작품만 보여주세요
// console.log(change_list);
const list = webtoons[3];
console.log(list);
list.contribute.writer = '이산시';
console.log(list);
