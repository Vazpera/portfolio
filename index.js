//Global Variables

let colors = [
    "#C3423F",
    "#E09546",
    "#FDE74C",
    "#9BC53D",
    "#5BC0EB",
    "#9952B7",
    "#f0f8ff",
  ];
  
  //Changing Word
  
  const left = document.getElementById("left");
  const right = document.getElementById("right");
  
  const handleMove = (e) => {
    const p = (e.clientX / window.innerWidth) * 100;
  
    right.style.width = `${p}%`;
  };
  
  document.onpointermove = handleMove;
  
  //Scroll
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  
  let hidden = document.getElementsByClassName("hidden");
  let hidList = [];
  for (let i = 0; i < hidden.length; i++) {
    hidList.push(hidden.item(i));
  }
  
  hidList.forEach((el) => {
    observer.observe(el);
  });
  
  // Second toy: Anime.js Animation
  
  let AnimOne = document.getElementById("anim-one"),
    count = 0;
  
  let animOneClick = (index, columns, rows) => {
    anime({
      targets: "#anim-one>.red-rSquare",
      keyframes: [
        {
          backgroundColor: colors[0],
          easing: "easeInOutSine",
          delay: anime.stagger(100, { from: index, grid: [rows, columns] }),
        },
        { backgroundColor: colors[1], easing: "easeInOutSine" },
        { backgroundColor: colors[2], easing: "easeInOutSine" },
        { backgroundColor: colors[3], easing: "easeInOutSine" },
        { backgroundColor: colors[4], easing: "easeInOutSine" },
        { backgroundColor: colors[5], easing: "easeInOutSine" },
        { backgroundColor: colors[0], easing: "easeInOutSine" },
      ],
    });
  };
  
  const animOneSquare = (index, columns, rows) => {
    const tile = document.createElement("div");
  
    tile.classList.add("red-rSquare");
  
    tile.onclick = (e) => animOneClick(index, columns, rows);
    return tile;
  };
  
  const animOneSquares = (quantity, columns, rows) => {
    Array.from(Array(quantity)).map((tile, index) => {
      AnimOne.appendChild(animOneSquare(index, columns, rows));
    });
  };
  
  const animOneGrid = () => {
    AnimOne.innerHTML = "";
  
    let size = 20;
  
    let columns = 20;
    let rows = 20;
  
    AnimOne.style.setProperty("--columns", columns);
    AnimOne.style.setProperty("--rows", rows);
  
    animOneSquares(columns * rows, columns, rows);
  };
  
  animOneGrid();
  
  // Second Animation
  
  const AnimTwo = document.getElementById("anim-two");
  
  const animTwoClick = (index, columns, rows) => {
    anime({
      targets: "#anim-two> .red-rSquare",
      keyframes: [
        {
          translateX: anime.stagger(10, {
            from: index,
            grid: [columns, rows],
            axis: "x",
          }),
          translateY: anime.stagger(10, {
            from: index,
            grid: [columns, rows],
            axis: "y",
          }),
          delay: anime.stagger(200, { from: index, grid: [columns, rows] }),
          easing: "easeInOutSine",
          duration: 1000,
        },
        {
          translateX: 0,
          translateY: 0,
          delay: 1000,
          easing: "easeInOutSine",
          duration: 1000,
        },
      ],
    });
  };
  
  const animTwoSquare = (index, columns, rows) => {
    const tile = document.createElement("div");
  
    tile.classList.add("red-rSquare");
  
    tile.onclick = (e) => animTwoClick(index, columns, rows);
    return tile;
  };
  
  const animTwoSquares = (quantity, columns, rows) => {
    Array.from(Array(quantity)).map((tile, index) => {
      AnimTwo.appendChild(animTwoSquare(index, columns, rows));
    });
  };
  
  const animTwoGrid = () => {
    AnimTwo.innerHTML = "";
  
    let size = 10;
  
    columns = 11;
    rows = 11;
  
    AnimTwo.style.setProperty("--columns", columns);
    AnimTwo.style.setProperty("--rows", rows);
  
    animTwoSquares(columns * rows, columns, rows);
  };
  
  animTwoGrid();
  
  //Anime Three
  
  const AnimThree = document.getElementById("anim-three");
  
  const AnimThreeClick = (index, columns, rows) => {
    anime({
      targets: "#anim-three>.red-rSquare",
      keyframes: [
        {
          scale: 0,
          delay: anime.stagger(100, { from: index, grid: [columns, rows] }),
          easing: "easeInOutSine",
          duration: 100,
        },
        {
          scale: 1,
          delay: 50,
          easing: "easeInOutSine",
          duration: 100,
        },
      ],
    });
  };
  
  const AnimThreeSquare = (index, columns, rows) => {
    const tile = document.createElement("div");
  
    tile.classList.add("red-rSquare");
  
    tile.onclick = (e) => AnimThreeClick(index, columns, rows);
    return tile;
  };
  
  const AnimThreeSquares = (quantity, columns, rows) => {
    Array.from(Array(quantity)).map((tile, index) => {
      AnimThree.appendChild(AnimThreeSquare(index, columns, rows));
    });
  };
  
  const AnimThreeGrid = () => {
    AnimThree.innerHTML = "";
  
    let size = 20;
  
    columns = 20;
    rows = 20;
  
    AnimThree.style.setProperty("--columns", columns);
    AnimThree.style.setProperty("--rows", rows);
  
    AnimThreeSquares(columns * rows, columns, rows);
  };
  
  AnimThreeGrid();
  
  //This help
  