window.addEventListener('load', () => {
  document.body.classList.remove('before-load');
});
document.querySelector('.loading').addEventListener('transitionend', (e) => {
  document.body.removeChild(e.currentTarget);
});

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circleII");

const colors = [
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY; 
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 0 + "px";
    circle.style.top = y - 0 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}
animateCircles();

// Check if the device is a desktop
function isDesktop() {
  // Regular expression to match common desktop user agents
  const desktopRegex = /Windows NT|Macintosh/;
  return desktopRegex.test(navigator.userAgent);
}

document.addEventListener("DOMContentLoaded", function () {
  const services = [
    {
      info: "Video Production",
      name: "Video Production",
      tag: "Video Production",
      imageSrc: "./assets/img1.jpg"
    },
    {
      info: "Graphic Design",
      name: "Graphic Design",
      tag: "Graphic Design",
      imageSrc: "./assets/img2.jpg"
    },
    {
      info: "Digital Marketing",
      name: "Digital Marketing",
      tag: "Digital Marketing",
      imageSrc: "./assets/img3.jpg"
    },
    {
      info: "Video Production",
      name: "Video Production",
      tag: "Video Production",
      imageSrc: "./assets/img4.jpg"
    },
    {
      info: "Graphic Design",
      name: "Graphic Design",
      tag: "Graphic Design",
      imageSrc: "./assets/img5.jpg"
    },
    {
      info: "Digital Marketing",
      name: "Digital Marketing",
      tag: "Digital Marketing",
      imageSrc: "./assets/img6.jpg"
    },
    {
      info: "Video Production",
      name: "Video Production",
      tag: "Video Production",
      imageSrc: "./assets/img7.jpg"
    },
    {
      info: "Graphic Design",
      name: "Graphic Design",
      tag: "Graphic Design",
      imageSrc: "./assets/img8.jpg"
    },
    {
      info: "Digital Marketing",
      name: "Digital Marketing",
      tag: "Digital Marketing",
      imageSrc: "./assets/img9.jpg"
    }
    // Add as many services as you want here
  ];

  const menu = document.querySelector(".menu");

  // Function to create and add new menu items
  const addMenuItems = () => {
    services.forEach((service, index) => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-item");

      menuItem.innerHTML = `
        <div class="info"><p>${service.info}</p></div>
        <div class="name"><p>${service.name}</p></div>
        <div class="tag"><p>${service.tag}</p></div>
      `;

      menu.appendChild(menuItem);

      // Duplicate content for animation purposes
      const copyElements = menuItem.querySelectorAll(".info, .name, .tag");
      copyElements.forEach((div) => {
        const copy = div.querySelector("p");
        if (copy) {
          const duplicateCopy = document.createElement("p");
          duplicateCopy.textContent = copy.textContent;
          div.appendChild(duplicateCopy);
        }
      });

      // Add hover and animation functionality
      menuItem.addEventListener("mouseover", () => {
        mouseOverAnimation(menuItem);
        appendImages(service.imageSrc);
      });

      menuItem.addEventListener("mouseout", () => {
        mouseOutAnimation(menuItem);
      });
    });
  };

  const appendImages = (src) => {
    const preview1 = document.querySelector(".preview-img-1");
    const preview2 = document.querySelector(".preview-img-2");

    const img1 = document.createElement("img");
    const img2 = document.createElement("img");

    img1.src = src;
    img1.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
    img2.src = src;
    img2.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";

    preview1.appendChild(img1);
    preview2.appendChild(img2);

    gsap.to([img1, img2], {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      duration: 1,
      ease: "power3.out",
      onComplete: function () {
        removeExtraImages(preview1);
        removeExtraImages(preview2);
      },
    });
  };

  const mouseOverAnimation = (elem) => {
    gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
      top: "-100%",
      duration: 0.3,
    });
    gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
      top: "0%",
      duration: 0.3,
    });
  };

  const mouseOutAnimation = (elem) => {
    gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
      top: "0%",
      duration: 0.3,
    });
    gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
      top: "100%",
      duration: 0.3,
    });
  };

  // Initialize menu items
  addMenuItems();

  // Move the preview box with the mouse
  document.addEventListener("mousemove", function (e) {
    const preview = document.querySelector(".preview");
    gsap.to(preview, {
      x: e.clientX + 300,
      y: e.clientY,
      duration: 1,
      ease: "power3.out",
    });
  });

  document.querySelector(".menu").addEventListener("mouseout", function () {
    gsap.to(".preview-img img", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1,
      ease: "power3.out",
    });
  });

  function removeExtraImages(container) {
    while (container.children.length > 10) {
      container.removeChild(container.firstChild);
    }
  }
  
});
