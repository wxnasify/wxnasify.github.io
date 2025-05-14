
  document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    const form = document.querySelector('.modal-content form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Спасибо! Мы скоро свяжемся с вами.');
        form.reset();
        document.getElementById('modal-content').classList.remove('visible');
        document.getElementById('modal-content').classList.add('hidden');
      });
    }
    
  });



  function openModal() {
  const modal = document.getElementById('contactModal');
  modal.classList.remove('hidden');
  modal.classList.remove('fade-out');
}

function closeModal() {
  const modal = document.getElementById('contactModal');
  modal.classList.add('fade-out');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300); // задержка под анимацию
}

function submitModalForm(event) {
  event.preventDefault();
  closeModal();

  const success = document.getElementById('modalSuccess');
  success.classList.remove('hidden');
  success.style.opacity = 1;

  setTimeout(() => {
    success.style.opacity = 0;
    setTimeout(() => {
      success.classList.add('hidden');
    }, 300);
  }, 3000);
}


  const swiper = new Swiper('.reviews-swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 40,
      }
    }
  });



const modal = document.getElementById("contactModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}