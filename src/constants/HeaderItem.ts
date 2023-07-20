import sova from "../../public/assets/images/Footer/sova.svg"
import whats from "../../public/assets/images/Footer/whats.svg"
import face from "../../public/assets/images/Footer/face.svg"
import insta from "../../public/assets/images/Footer/insta.svg"

export const Header__item: { id: number; items: string ; path : string}[] = [
  {
    id: 1,
    items: "header.home",
    path : "/"
  },
  {
    id: 2,
    items: "header.tours",
    path : "/tours"
  },
  {
    id: 3,
    items: "header.destinations",
    path : "/destinations"
  },
  {
    id: 4,
    items: "header.about",
    path : "/aboutUs"    
  },
  {
    id: 5,
    items: "header.share",
    path : "/shareTour"
  }
];

export const HeaderImages = [
  {image : sova , id : 1},
  {image : whats , id : 2},
  {image : face , id : 3},
  {image : insta , id : 4},

]
