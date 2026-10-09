import example1 from './assets/images/example1.jpeg';
import example2 from './assets/images/example2.jpeg';
import example3 from './assets/images/example3.jpeg';
import me from './assets/images/me.jpg';
import cat from './assets/images/cat.jpeg';

export const currentUser = {
  name: 'Yasin',
  username: '@myctr',
  avatar: me,
  following: 128,
  followers: 342,
};

const posts = [
  {
    id: 1,
    profilePic: example1,
    name: 'Ahmet Yılmaz',
    username: '@ahmt00',
    verified: true,
    tweet: 'Bugün hava çok güzel, sahilde yürüyüş yapmak için harika bir gün.',
    time: '5h',
    replyNumber: 53,
    retweetNumber: 23,
    likeNumber: 120,
    viewNumber: 4200,
  },
  {
    id: 2,
    profilePic: example2,
    name: 'Selin',
    username: '@sln98',
    verified: false,
    tweet: 'Ne kadar tatlı bir kedi :)',
    picture: cat,
    time: '10h',
    replyNumber: 180,
    retweetNumber: 120,
    likeNumber: 350,
    viewNumber: 18400,
  },
  {
    id: 3,
    profilePic: example3,
    name: 'Sudenur',
    username: '@sudeee',
    verified: true,
    tweet:
      'Yeni bir React Native projesine başladım, tasarım dili üzerine çalışıyorum.',
    time: '13h',
    replyNumber: 24,
    retweetNumber: 18,
    likeNumber: 96,
    viewNumber: 5300,
  },
  {
    id: 4,
    profilePic: me,
    name: 'Yasin',
    username: '@myctr',
    verified: false,
    tweet:
      'Bu proje öğrenme amaçlı bir klon. Tüm bileşenler React Native ile yazıldı.',
    time: '15h',
    replyNumber: 12,
    retweetNumber: 8,
    likeNumber: 47,
    viewNumber: 1900,
  },
  {
    id: 5,
    profilePic: example1,
    name: 'Ahmet Yılmaz',
    username: '@ahmt00',
    verified: true,
    tweet: 'Hafta sonu planı: kahve, kod ve biraz da müzik.',
    time: '18h',
    replyNumber: 9,
    retweetNumber: 5,
    likeNumber: 68,
    viewNumber: 2400,
  },
];

export const trends = [
  {
    id: 't1',
    category: 'Sports · Trending',
    title: 'Galatasaray',
    posts: '28K posts',
  },
  {
    id: 't2',
    category: 'Technology · Trending',
    title: 'React Native',
    posts: '12.4K posts',
  },
  {
    id: 't3',
    category: 'Trending in Türkiye',
    title: '#Yazılım',
    posts: '45.1K posts',
  },
  {
    id: 't4',
    category: 'News · Trending',
    title: 'Yapay Zeka',
    posts: '78K posts',
  },
  {
    id: 't5',
    category: 'Entertainment · Trending',
    title: 'Yeni Sezon',
    posts: '9.3K posts',
  },
];

export const news = [
  {
    id: 'n1',
    title: 'Yerli elektrikli araç üretiminde yeni yatırım kararı',
    meta: '2 days ago · News · 28K posts',
  },
  {
    id: 'n2',
    title: 'Açık kaynak yapay zeka modelleri kurumsal kullanımda büyüyor',
    meta: '4 days ago · Technology · 4.4K posts',
  },
  {
    id: 'n3',
    title: 'Bu hafta oyun dünyasında öne çıkan gelişmeler',
    meta: '5 days ago · Gaming · 12K posts',
  },
];

export const notifications = [
  {
    id: 'no1',
    icon: 'heart',
    color: '#F91880',
    title: 'Selin ve 12 kişi gönderini beğendi',
    time: '2m',
  },
  {
    id: 'no2',
    icon: 'person-add',
    color: '#1D9BF0',
    title: 'Ahmet Yılmaz seni takip etmeye başladı',
    time: '1h',
  },
  {
    id: 'no3',
    icon: 'chatbubble-ellipses',
    color: '#00BA7C',
    title: 'Sudenur gönderine yanıt verdi: "Harika görünüyor!"',
    time: '3h',
  },
  {
    id: 'no4',
    icon: 'megaphone',
    color: '#1D9BF0',
    title: 'Bu hafta senin için öne çıkan konular hazır',
    time: '1d',
  },
];

export const conversations = [
  {
    id: 'c1',
    name: 'Selin',
    username: '@sln98',
    avatar: example2,
    message: 'Projeyi ne zaman yayına alıyorsun?',
    time: '1h',
  },
  {
    id: 'c2',
    name: 'Ahmet Yılmaz',
    username: '@ahmt00',
    avatar: example1,
    message: 'Tasarım dosyalarını paylaşabilirim.',
    time: '5h',
  },
  {
    id: 'c3',
    name: 'Sudenur',
    username: '@sudeee',
    avatar: example3,
    message: 'Bu hafta görüşelim mi?',
    time: '2d',
  },
];

export default posts;
