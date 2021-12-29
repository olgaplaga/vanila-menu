//https://github.com/john-smilga/javascript-basic-projects/tree/master/08-menu/final
//https://www.youtube.com/watch?v=3PHXvlpOkf4&t=8185s

const menu = [
  {
    id: 1,
    title: "Phad-see-ew",
    price: 5.0,
    category: "breakfast",
    img: "./img/padseeew.jpeg",
    desc: "Wok-fried Flat Noodles with Kale, Carrot and Oyster Sauce choice of: Chicken or Pork",
  },
  {
    id: 2,
    title: "Phad Ga-Prao",
    price: 6.0,
    category: "breakfast",
    img: "./img/pad-kra-pao.jpeg",
    desc: "Stir-fried Pork or Chicken or Seafood with Holy Basil Leaves and Fresh Chili",
  },
  {
    id: 3,
    title: "Phad Phak Boong Fai Daeng",
    price: 8.0,
    category: "breakfast",
    img: "./img/pad-pak-bung-fai.jpeg",
    desc: "Wok-fried Morning Glory with Garlic, Fresh Chili and Oyster Sauce",
  },
  {
    id: 4,
    title: "Khaw Phad",
    price: 6.0,
    category: "breakfast",
    img: "./img/Thai-Fried-Rice.jpeg",
    desc: "Fried Rice Served with Fried Egg, choice of: Chicken or Pork",
  },
  {
    id: 5,
    title: "Pad Thai",
    price: 10.0,
    category: "lunch",
    img: "./img/phadtai.jpeg",
    desc: "The most famous Thai noodles stir-fried with chicken, shrimp, egg, bean sprouts, ground peanuts and scallions",
  },
  {
    id: 6,
    title: "Pad See You",
    price: 12.0,
    category: "lunch",
    img: "./img/passeeyou.jpeg",
    desc: "Thai style fl at noodle stir-fried with chicken, shrimp, egg, broccoli and carrots",
  },
  {
    id: 7,
    title: "Lad Na",
    price: 15.0,
    category: "lunch",
    img: "./img/ladna.jpeg",
    desc: "Stir-fried fl at noodle with egg and topped with Thai gravy sauce - with Chinese broccoli, carrots, mushrooms and broccoli.",
  },
  {
    id: 8,
    title: "Pho Beef Noodle",
    price: 10.0,
    category: "lunch",
    img: "./img/phobeef.jpeg",
    desc: "Rice noodles with beef, bean sprouts, basil leaves and garnish with scallions and cilantro in beef broth.",
  },
  {
    id: 9,
    title: "Thai Iced Coffee",
    price: 3.0,
    category: "drinks",
    img: "./img/iced-coffee-2.png",
    desc: "Fresh coffe with ice.",
  },
  {
    id: 10,
    title: "Thai Iced Tea",
    price: 3.5,
    category: "drinks",
    img: "./img/icedtea.jpeg",
    desc: "Special Thai tea with ice.",
  },
  {
    id: 11,
    title: "Apple Juice",
    price: 2.0,
    category: "drinks",
    img: "./img/Apple-Juice-Square.jpeg",
    desc: "Fresh Apple Juice.",
  },
];

const sectionCenter = document.querySelector(".section-center ");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("load", showMenu(menu));

function showMenu(menuItems) {
  let displayItem = menuItems.map((item) => {
    return `
        <article class="menu-item">
          <img src="${item.img}" class="photo" alt="${item.title}" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <div class="price">$${item.price}</div>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayItem = displayItem.join(" ");
  console.log(displayItem);
  sectionCenter.innerHTML = displayItem;
  const category = menu.reduce(
    (value, item) => {
      if (!value.includes(item.category)) {
        value.push(item.category);
      }
      return value;
    },
    ["all"]
  );

  const categoryBtn = category
    .map((category) => {
      return `<button class="filter-btn"  type="button" data-id="${category}">${category}</button>`;
    })
    .join("");

  //insert HTML
  btnContainer.innerHTML = categoryBtn;
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    return btn.addEventListener("click", onClickButton);
  });
}

function onClickButton(event) {
  const category = event.currentTarget.dataset.id;
  const menuCategory = menu.filter((item) => {
    if (item.category === category) {
      return item;
    }
  });
  if (category === "all") {
    return showMenu(menu);
  } else {
    return showMenu(menuCategory);
  }
}
