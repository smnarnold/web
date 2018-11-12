class Checklist {
  constructor() {
    this.dom = {
      cbRole: document.querySelectorAll('.js-set-role')
    };
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.dom.cbRole.forEach(cbRole => {
      cbRole.addEventListener('change', e => this.setRole(e));
    });
  }

  setRole(e) {
    let role = e.target.getAttribute('data-role');

    document.body.classList.toggle(`show-${role}`, e.target.checked);
  }
}

let checklist = new Checklist();
checklist.init();
