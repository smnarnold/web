class Checklist {
  constructor() {
    this.dom = {
      cbRole: document.querySelectorAll('.js-set-role'),
      articles: document.querySelectorAll('.js-article'),
      sections: document.querySelectorAll('.section'),
      toggles: document.querySelectorAll('[data-toggle-ref]'),
      subs: document.querySelectorAll('input[type="submit"]'),
      generalCopy: document.querySelector('.general-copy')
    };
  }

  init() {
    this.dom.toggles.forEach(toggle => this.initElementToggled(toggle));
    this.bindEvents();
  }

  bindEvents() {
    this.dom.cbRole.forEach(cbRole =>
      cbRole.addEventListener('change', e => this.setRole(e))
    );
    this.dom.subs.forEach(sub =>
      sub.addEventListener('click', e => this.initForm(e))
    );
  }

  initForm(e) {
    e.preventDefault();
    let submit = e.target;
    let form = submit.closest('form');
    let copiedMsg = form.querySelector('.copied-msg');
    let output = form.output;

    let html = this.getArticles(form);
    this.copyStringToClipboard(html);
    output.value = html;
    copiedMsg.classList.add('flipin');
    copiedMsg.addEventListener('animationend', () =>
      copiedMsg.classList.remove('flipin')
    );
  }

  setRole(e) {
    let role = e.target.getAttribute('data-role');

    document.body.classList.toggle(`show-${role}`, e.target.checked);
  }

  getNode(selector, form) {
    if (selector.startsWith('.') || selector.startsWith('#')) {
      return form.querySelectorAll(selector);
    } else {
      return form[selector];
    }
  }

  initElementToggled(element) {
    let context = element.closest('form');
    let selector = element.getAttribute('data-toggle-ref');
    let inputsArr = this.getNode(selector, context);
    if (!inputsArr.length) inputsArr = [inputsArr]; // Force inputs to be an array even if there is only 1 value
    let type = inputsArr[0].type; // radio, checkbox, etc.

    switch(type) {
      case 'radio':
        this.initElementToggledByRadio(element, inputsArr);
        break;
      case 'checkbox':
        this.initElementToggledByCheckbox(element, inputsArr);
        break;
    }
  }

  getAcceptableRadiosValues(element) {
    let str = element.getAttribute('data-toggle-visible');
    let arr = str === null ? [] : str.split('||');

    return arr;
  }

  initElementToggledByRadio(element, radiosArr) {
    let acceptableRadiosValuesArr = this.getAcceptableRadiosValues(element);

    for (let x = 0; x < radiosArr.length; x++) {
      let radio = radiosArr[x];

      this.setElementToggledByRadioVisibility(element, radio, acceptableRadiosValuesArr);
      radio.addEventListener('change', () =>
        this.setElementToggledByRadioVisibility(element, radio, acceptableRadiosValuesArr)
      );
    }
  }

  setElementToggledByRadioVisibility(element, radio, acceptableRadiosValuesArr) {
    let shouldBeVisible = radio.checked && acceptableRadiosValuesArr.indexOf(radio.value) !== -1;
    element.style.display = shouldBeVisible ? '' : 'none';

    if (shouldBeVisible) {
      let childrenRadios = element.querySelectorAll('input:checked');

      /*if(childrenRadios.length) {
        let ref = document.querySelectorAll(`[data-toggle-ref="${childrenRadios[0].name}"]`);
        let newAcceptableRadiosValuesArr = this.getAcceptableRadiosValues(ref);
        this.setElementToggledByRadioVisibility(ref, childrenRadios[0], newAcceptableRadiosValuesArr);
        console.log(ref);
      }*/
    }
  }

  initElementToggledByCheckbox(element, checkboxesArr) {
    let min = element.getAttribute('data-toggle-min');

    if (min !== null) {
      this.setElementToggledByCheckboxMinVisibility(element, checkboxesArr, min);

      for (let x = 0; x < checkboxesArr.length; x++) {
        let checkbox = checkboxesArr[x];

        checkbox.addEventListener('change', () =>
          this.setElementToggledByCheckboxMinVisibility(element, checkboxesArr, min)
        );
      }
    } else {
      for (let x = 0; x < checkboxesArr.length; x++) {
        let checkbox = checkboxesArr[x];

        this.setElementToggledByCheckboxVisibility(element, checkbox);
        checkbox.addEventListener('change', () =>
          this.setElementToggledByCheckboxVisibility(element, checkbox)
        );
      }
    }
  }

  setElementToggledByCheckboxVisibility(element, checkbox) {
    element.style.display = checkbox.checked ? '' : 'none';
  }

  setElementToggledByCheckboxMinVisibility(element, checkboxesArr, min) {
    let nbrChecked = 0;

    for (let x = 0; x < checkboxesArr.length; x++) {
      if (checkboxesArr[x].checked) nbrChecked++;
    }

    let shouldBeVisible = nbrChecked >= parseInt(min);
    element.style.display = shouldBeVisible ? '' : 'none';
  }

  getArticles(form) {
    let html = '';
    let content = this.getSections(form);

    if (content !== '') {
      let title = form.querySelector('h2').innerText;
      html += `h2. ${title}\n`;
      html += content;
      html += '\n----';
    }

    return html;
  }

  getSections(article) {
    let html = '';
    let sections = article.querySelectorAll('.section');

    for (let x = 0; x < sections.length; x++) {
      let section = sections[x];
      let type = this.getSectionType(section);
      let content = '';

      if (type === 'ul' || type === 'ol') {
        content = this.getListContent(section, type);
      }

      if (content !== '') {
        let title = '';
        let h3 = section.querySelector('h3');
        if (h3 !== null) {
          title = h3.innerText;
          if (title !== '') {
            html += `h3. ${title}\n`;
          }
        }

        html += `${content}\n\n`;
      }
    }

    return html;
  }

  getSectionType(section) {
    let type = 'text';

    if (section.querySelector('ol')) {
      type = 'ol';
    } else if (section.querySelector('ul')) {
      type = 'ul';
    }

    return type;
  }

  getListContent(section, type) {
    let html = '';
    let items = section.querySelectorAll('li');
    let arr = [];

    for (let x = 0; x < items.length; x++) {
      let item = items[x];

      if (item.offsetParent !== null) {
        // L'élément est visible
        let text = this.getInput(item);
        if (text !== '') {
          arr.push(text);
        }
      }
    }

    if (arr.length > 1) {
      let prefix = type === 'ul' ? '*' : '#';
      html = prefix + ' ' + arr.join(`\n${prefix} `);
    } else if (arr.length === 1) {
      html = arr[0];
    }

    return html;
  }

  getInput(node) {
    let input = node.querySelector('input');
    let select = node.querySelector('select');
    let textarea = node.querySelector('textarea');
    let html = '';

    if (input !== null) {
      switch (input.type) {
        case 'url':
          html = this.getUrl(node, input);
          break;
        case 'date':
          html = this.getDate(node, input);
          break;
        case 'radio':
          html = this.getRadio(node, input);
          break;
        case 'checkbox':
          html = this.getCheckbox(node, input);
          break;
      }
    } else if (select !== null) {
      html = this.getSelect(node, select);
    } else if (textarea !== null) {
      html = this.getTextarea(node, textarea);
    }

    return html;
  }

  getTextarea(node, textarea) {
    let html = '';
    if (textarea.value !== '') {
      let prefix = this.getText(node);
      if (prefix !== '') prefix += ': ';
      html = `${prefix}${textarea.value}`;
    }
    return html;
  }

  getSelect(node, select) {
    let html = '';
    if (select.options[select.selectedIndex].value !== '') {
      html = `${this.getText(node)} ${
        select.options[select.selectedIndex].text
      }`;
    }
    return html;
  }

  getDate(node, input) {
    let html = '';
    if (input.value !== '') {
      let suffix = this.getText(node);
      if (suffix !== '') suffix = `: ${suffix}`;
      html = `*${input.value}*${suffix}`;
    }
    return html;
  }

  getUrl(node, input) {
    let html = '';
    if (input.value !== '') {
      let url = input.value;
      if (url.startsWith('http')) {
        url = `[${url}]`;
      }

      html = `*${this.getText(node)}*: ${url}`;
    }
    return html;
  }

  getRadio(node, input) {
    let html = '';
    let name = input.getAttribute('name');
    let form = input.closest('form');
    let value = this.getNode(name, form).value;
    if (value !== '') {
      let prefix = this.getText(node);
      if (prefix !== '') prefix += ': ';
      html = `${prefix}*${value}*`;
    }
    return html;
  }

  getCheckbox(node, input) {
    let html = '';
    if (input.checked) {
      html = this.getText(node);
    }
    return html;
  }

  getText(node) {
    let str = node.innerHTML;
    str = this.replaceImg(str);
    str = this.stripTags(str);
    str = str.trim(); // remove start and end whitespaces;
    str = str.replace(/\r?\n|\r/g, ''); // strip linebreaks;
    str = str.replace(/ +(?= )/g, ''); // strip multiple white spaces;

    return str;
  }

  replaceImg(str) {
    let newStr = str.replace(
      /<img src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/g,
      function(match, p1) {
        return `!${p1}!`;
      }
    );

    return newStr;
  }

  stripTags(str) {
    let el = document.createElement('div');
    el.innerHTML = str;
    el.querySelectorAll('.js-dont-output').forEach(e =>
      e.parentNode.removeChild(e)
    );
    str = el.innerText;
    return str;
  }

  copyStringToClipboard(str) {
    let el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    console.log(str);
  }
}

let checklist = new Checklist();
checklist.init();
