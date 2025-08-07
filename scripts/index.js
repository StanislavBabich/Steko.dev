document.addEventListener('DOMContentLoaded', () => {
  const animatedTitles = document.querySelectorAll('.title__animated');
  if (animatedTitles.length) {
    const titlesObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0 });
    animatedTitles.forEach(title => titlesObserver.observe(title));
  }

  const workProcessTitles = document.querySelectorAll('.work__process-title-animated');
  if (workProcessTitles.length) {
    const workProcessTitlesObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0 });
    workProcessTitles.forEach(title => workProcessTitlesObserver.observe(title));
  }

  const processArticles = document.querySelectorAll('.work__process__container-animated');
  if (processArticles.length) {
    const processObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0 });
    processArticles.forEach(article => processObserver.observe(article));
  }

  const reviewBlocks = document.querySelectorAll('.review__block-animated');
  if (reviewBlocks.length) {
    const blocksObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0 });
    reviewBlocks.forEach(block => blocksObserver.observe(block));
  }
});