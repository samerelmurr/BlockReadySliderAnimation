let customerReview = [
    {
      "id": 1,
      "name": "Nathaniel Marquez 1",
      "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
      "image": "./img/pic.png",
      "rating": 5,
      "linkedin": "https://www.linkedin.com/",
      "occupation": "CEO at Apple"
    },
    {
      "id": 2,
      "name": "Nathaniel Marquez 2",
      "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
      "image": "./img/pic.png",
      "rating": 5,
      "linkedin": "https://www.linkedin.com/",
      "occupation": "CEO at Apple"
    },
    {
      "id": 3,
      "name": "Nathaniel Marquez 3",
      "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
      "image": "./img/pic.png",
      "rating": 5,
      "linkedin": "https://www.linkedin.com/",
      "occupation": "CEO at Apple"
    },
    {
      "id": 4,
      "name": "Nathaniel Marquez 4",
      "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
      "image": "./img/pic.png",
      "rating": 5,
      "linkedin": "https://www.linkedin.com/",
      "occupation": "CEO at Apple"
    },
    {
      "id": 5,
      "name": "Nathaniel Marquez 5",
      "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
      "image": "./img/pic.png",
      "rating": 5,
      "linkedin": "https://www.linkedin.com/",
      "occupation": "CEO at Apple"
    },
    {
      "id": 6,
      "name": "Nathaniel Marquez 6",
      "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
      "image": "./img/pic.png",
      "rating": 5,
      "linkedin": "https://www.linkedin.com/",
      "occupation": "CEO at Apple"
    },
    {
      "id": 7,
      "name": "Nathaniel Marquez 7",
      "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
      "image": "./img/pic.png",
      "rating": 5,
      "linkedin": "https://www.linkedin.com/",
      "occupation": "CEO at Apple"
    },
    {
      "id": 8,
      "name": "Nathaniel Marquez 8",
      "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
      "image": "./img/pic.png",
      "rating": 5,
      "linkedin": "https://www.linkedin.com/",
      "occupation": "CEO at Apple"
    },
    {
      "id": 9,
      "name": "Nathaniel Marquez 9",
      "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
      "image": "./img/pic.png",
      "rating": 5,
      "linkedin": "https://www.linkedin.com/",
      "occupation": "CEO at Apple"
    },
    {
      "id": 10,
      "name": "Nathaniel Marquez 10",
      "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
      "image": "./img/pic.png",
      "rating": 5,
      "linkedin": "https://www.linkedin.com/",
      "occupation": "CEO at Apple"
    },
    {
      "id": 11,
      "name": "Nathaniel Marquez 11",
      "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
      "image": "./img/pic.png",
      "rating": 5,
      "linkedin": "https://www.linkedin.com/",
      "occupation": "CEO at Apple"
    },
    {
      "id": 12,
      "name": "Nathaniel Marquez 12",
      "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
      "image": "./img/pic.png",
      "rating": 5,
      "linkedin": "https://www.linkedin.com/",
      "occupation": "CEO at Apple"
    },
    {
      "id": 13,
      "name": "Nathaniel Marquez 13",
      "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
      "image": "./img/pic.png",
      "rating": 5,
      "linkedin": "https://www.linkedin.com/",
      "occupation": "CEO at Apple"
    },
    {
      "id": 14,
      "name": "Nathaniel Marquez 14",
      "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
      "image": "./img/pic.png",
      "rating": 5,
      "linkedin": "https://www.linkedin.com/",
      "occupation": "CEO at Apple"
    },
    {
      "id": 15,
      "name": "Nathaniel Marquez 15",
      "review": "I am only just starting to learn and to be honest, I don't even know the basics but this course just answered every single question that I had",
      "image": "./img/pic.png",
      "rating": 5,
      "linkedin": "https://www.linkedin.com/",
      "occupation": "CEO at Apple"
    }
  ];

  function displayCustomerReview(customerReview) {

    // if(window.innerWidth > 500) {
      customerReviewItems = customerReview.map((item) => {
        return `<div class="swiper-slide">
                    <div class="swiper-slide-inner">
                        <div class="review-image_container">
                            <img class="user_avatar" src="${item.image}" alt="review-image">
                        </div>
                        <div class="review-text_container">
                            <div class="review-name">
                                <p>
                                    ${item.name}
                                </p>
                                <img class="review-name_icon" src="img/li-iocn.png" alt="">
                            </div>
                            <div class="review-designation">
                                <p>
                                ${item.occupation}
                                </p>
                            </div>
                            <div class="review-text">
                                <p>
                                ${item.review}
                                </p>
                            </div>
                            <div class="review-rating">
                                <img class="rating-review_img" src="img/star-rating.png" alt="star-rating">
                                <img class="rating-review_img" src="img/star-rating.png" alt="star-rating">
                                <img class="rating-review_img" src="img/star-rating.png" alt="star-rating">
                                <img class="rating-review_img" src="img/star-rating.png" alt="star-rating">
                                <img class="rating-review_img" src="img/star-rating_lite.png" alt="star-rating">
                            </div>
                            <div class="review-trustpilot">
                                <img class="trustpilot-logo" src="img/Trustpilot_Logo.png" alt="Trustpilot Logo">
                            </div>
                        </div>
                        </div>
                    </div>
                </div>`;
      });
    // } else {
    //   customerReviewItems = customerReview.map((item) => {
    //     return `<div class="slider__container__slides__slide">
    //                 <div class="content">
    //                   <div class="content_header">
    //                     <img id="pic" src="${item.image}" draggable="false"  alt="pic" />
    //                     <h1 class="name">${item.name}</h1>
    //                     <img src="./images/linkedin.png" draggable="false" alt="linkedin"  />
    //                   </div>
    //                   <h4 class="occupation">${item.occupation}</h4>
    //                   <p class="review">${item.review}</p>
    //                   <div class="content_rating">
    //                     <img src="./images/star.png" draggable="false" alt="star" />
    //                     <img src="./images/star.png" draggable="false" alt="star" />
    //                     <img src="./images/star.png" draggable="false" alt="star" />
    //                     <img src="./images/star.png" draggable="false"  alt="star" />
    //                     <img src="./images/star.png" draggable="false" alt="star" />
    //                   </div>
    //                   <div class="content_certificate">
    //                       <img src="./images/trust-logo.png" draggable="false" alt="trust-logo" />
    //                   </div>
    //                 </div>
    //             </div>`;
    //   });
    // }
    customerReviewItems = customerReviewItems.join("");
    document.querySelector(".swiper-wrapper").innerHTML = customerReviewItems;
};

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 40,
    centeredSlides: true,
    loop: true,
    speed: 5000,
    grabCursor: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 40
        },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween:35,
      },
      1380:{
        slidesPerView: 4,
        spaceBetween:40,
      }
    }
});

function loadAnimation() {
    displayCustomerReview(customerReview);
    carousel();
}

(async () => {
for (const customerReview of [...document.querySelectorAll(".swiper-wrapper")]) {
    // Wait for all images to load before initializing the slideshow
    for (const review of [...customerReview.children]) {
    await new Promise(resolve => {
        if (review.complete) resolve();
        else review.onload = resolve;
    });
    }

    loadAnimation();
}
})();

