import guitar1 from '../assets/images/guitar-bass.jpg'
import guitar2 from '../assets/images/guitar-z300.jpg'
import guitar3 from '../assets/images/guitar-lx.jpg'
import guitar4 from '../assets/images/guitar-t300.jpg'
import guitar5 from '../assets/images/guitar-super.jpg'
import guitar6 from '../assets/images/guitar-plus.jpg'



export default class GuitarshopService {
  data = [
    {
      id: 1,
      image: guitar1,
      raiting: 4,
      popularity: 15,
      name: "Честер Bass",
      price: '17 500',
    },
    {
      id: 2,
      image: guitar2,
      raiting: 5,
      popularity: 9,
      name: "СURT Z300",
      price: '29 500',
    },
    {
      id: 3,
      image: guitar3,
      raiting: 4,
      popularity: 21,
      name: "Roman LX",
      price: '6 800',
    },
    {
      id: 4,
      image: guitar4,
      raiting: 4,
      popularity: 15,
      name: "СURT T300",
      price: '30 000',
    },
    {
      id: 5,
      image: guitar5,
      raiting: 4,
      popularity: 5,
      name: "Dania Super",
      price: '3 500',
    },
    {
      id: 6,
      image: guitar1,
      raiting: 4,
      popularity: 17,
      name: "Честер WX",
      price: '15 300',
    },
    {
      id: 7,
      image: guitar3,
      raiting: 4.5,
      popularity: 5,
      name: "Dania VX",
      price: '2 200',
    },
    {
      id: 8,
      image: guitar6,
      raiting: 4,
      popularity: 27,
      name: "Честер Plus",
      price: '30 000',
    },
    {
      id: 9,
      image: guitar5,
      raiting: 4,
      popularity: 3,
      name: "Виолана 300",
      price: '1 700',
    },
  ];

  getGuitars() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  }
}
