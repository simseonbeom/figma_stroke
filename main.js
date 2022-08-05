let tl = gsap.timeline();

tl.from('h2', { y: 30, opacity: 0, ease: 'power2.out', stagger: 1 });
tl.from('.wrapper > div', {
  duration: 1,
  opacity: 0,
  y: 30,
  stagger: {
    amount: 1,
  },
});

let clicked = true;

function targetFunc(e) {
  e.stopPropagation();
  let elem = e.target;

  while (!elem.getAttribute('data-name')) {
    elem = elem.parentNode;

    if (elem.nodeName === 'BODY' || elem.nodeName === 'HR') {
      elem = null;
      return;
    }
  }

  if (elem.matches('[data-clicked="true"]')) {
    gsap.to(elem, {
      opacity: 1,
      onComplete: () => {
        elem.dataset.clicked = !clicked;
      },
    });
  } else {
    gsap.to(elem, {
      opacity: 0.1,
      onComplete: () => {
        elem.dataset.clicked = clicked;
      },
    });
  }
}

document.body.addEventListener('click', targetFunc);
