function skillsMember() {
  const skills = document.querySelectorAll('.skills .skill');
  const skillContent = document.querySelectorAll('.skills-content .skills-content__item');
  const skillContentAll = document.querySelector('.skills-content');
  const skillContentAllWidth = skillContentAll.offsetWidth;
  const skillContentAllHeight = skillContentAll.offsetHeight;
  const skillContentAllTop = skillContentAll.offsetTop;
  const skillContentAllLeft = skillContentAll.offsetLeft;
  const skillContentAllRight = skillContentAllLeft + skillContentAllWidth;
  const skillContentAllBottom = skillContentAllTop + skillContentAllHeight;

  for (let i = 0; i < skills.length; i++) {
    skills[i].addEventListener('click', () => {
      for (let j = 0; j < skills.length; j++) {
        skills[j].classList.remove('active');
      }
      skills[i].classList.add('active');

      const dataSkill = skills[i].getAttribute('data-skill');
      for (let k = 0; k < skillContent.length; k++) {
        skillContent[k].classList.remove('active');
        if (skillContent[k].getAttribute('data-skill') == dataSkill) {
          skillContent[k].classList.add('active');
          const skillContentWidth = skillContent[k].offsetWidth;
          const skillContentHeight = skillContent[k].offsetHeight;
          const skillContentTop = skillContent[k].offsetTop;
          const skillContentLeft = skillContent[k].offsetLeft;
          const skillContentRight = skillContentLeft + skillContentWidth;
          const skillContentBottom = skillContentTop + skillContentHeight;

          if (skillContentRight > skillContentAllRight) {
            skillContent[k].classList.add('active-right');
          } else if (skillContentLeft < skillContentAllLeft) {
            skillContent[k].classList.add('active-left');
          } else if (skillContentBottom > skillContentAllBottom) {
            skillContent[k].classList.add('active-bottom');
          } else if (skillContentTop < skillContentAllTop) {
            skillContent[k].classList.add('active-top');
          }
        }
      }
    });
  }
}