class Checklist {
  constructor() {
    this.dom = {
      cbRole: document.querySelectorAll('.js-set-role'),
      articles: document.querySelectorAll('.js-jira'),
      sections: document.querySelectorAll('.section'),
      toggles: document.querySelectorAll('[data-toggle-ref]'),
      togglesT: document.querySelectorAll('[data-toggle-refs]'),
      submit: document.forms.jira.submit,
      output: document.forms.jira.output
    };
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.dom.cbRole.forEach(cbRole => {
      cbRole.addEventListener('change', e => this.setRole(e));
    });
    this.dom.toggles.forEach(toggle => this.initToggle(toggle));
    this.dom.submit.addEventListener('click', e => this.setJira(e));
  }

  setRole(e) {
    let role = e.target.getAttribute('data-role');

    document.body.classList.toggle(`show-${role}`, e.target.checked);
  }

  getNode(selector) {
    if (selector.startsWith('.') || selector.startsWith('#')) {
      return document.forms.jira.querySelectorAll(selector);
    } else {
      return document.forms.jira[selector];
    }
  }

  initToggle(toggle) {
    let inputName = toggle.getAttribute('data-toggle-ref');
    let inputs = this.getNode(inputName);
    let isArr = inputs.length;
    if (!isArr) inputs = [inputs];
    let type = inputs[0].type;

    if (type === 'radio') {
      let value = toggle.getAttribute('data-toggle-visible');

      if (value !== null) {
        value = value.split('||');
      }

      for (let x = 0; x < inputs.length; x++) {
        let input = inputs[x];

        this.setToggleRadio(toggle, input, value);
        input.addEventListener('change', () =>
          this.setToggleRadio(toggle, input, value)
        );
      }
    } else if (type === 'checkbox') {
      let min = toggle.getAttribute('data-toggle-min');

      if (min !== null) {
        this.setToggleMinCheckbox(toggle, inputs, min);

        for (let x = 0; x < inputs.length; x++) {
          let input = inputs[x];
          input.addEventListener('change', () =>
            this.setToggleMinCheckbox(toggle, inputs, min)
          );
        }
      } else {
        for (let x = 0; x < inputs.length; x++) {
          let input = inputs[x];

          this.setToggleCheckbox(toggle, input);
          input.addEventListener('change', () =>
            this.setToggleCheckbox(toggle, input)
          );
        }
      }
    }
  }

  setToggleRadio(toggle, input, value) {
    if (input.checked && value.indexOf(input.value) !== -1) {
      toggle.style.display = '';
      toggle.classList.remove('js-dont-output');
    } else {
      toggle.style.display = 'none';
      toggle.classList.add('js-dont-output');
    }
  }

  setToggleMinCheckbox(toggle, inputs, min) {
    let nbrChecked = 0;

    for (let x = 0; x < inputs.length; x++) {
      if (inputs[x].checked) nbrChecked++;
    }

    if (nbrChecked >= parseInt(min)) {
      toggle.style.display = '';
      toggle.classList.remove('js-dont-output');
    } else {
      toggle.style.display = 'none';
      toggle.classList.add('js-dont-output');
    }
  }

  setToggleCheckbox(toggle, input) {
    if (input.checked) {
      toggle.style.display = '';
      toggle.classList.remove('js-dont-output');
    } else {
      toggle.style.display = 'none';
      toggle.classList.add('js-dont-output');
    }
  }

  setJira(e) {
    e.preventDefault();
    let html = this.getArticles();
    this.copyStringToClipboard(html);
    this.dom.output.value = html;
  }

  getArticles() {
    let html = '';

    for (let x = 0; x < this.dom.articles.length; x++) {
      let article = this.dom.articles[x];
      let content = this.getSections(article);

      if (content !== '') {
        let title = article.querySelector('h2').innerText;
        html += `h2. ${title}\n`;
        html += content;
        html += '\n----';
      }
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
        let title = section.querySelector('h3').innerText;
        if (title !== '') {
          html += `h3. ${title}\n`;
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
    let value = document.forms.jira[name].value;
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
