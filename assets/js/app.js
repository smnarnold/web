/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Checklist =
/*#__PURE__*/
function () {
  function Checklist() {
    _classCallCheck(this, Checklist);

    this.dom = {
      cbRole: document.querySelectorAll('.js-set-role'),
      articles: document.querySelectorAll('.js-article'),
      sections: document.querySelectorAll('.section'),
      toggles: document.querySelectorAll('[data-toggle-ref]'),
      subs: document.querySelectorAll('input[type="submit"]'),
      generalCopy: document.querySelector('.general-copy')
    };
  }

  _createClass(Checklist, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.dom.toggles.forEach(function (toggle) {
        return _this.initElementToggled(toggle);
      });
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;

      this.dom.cbRole.forEach(function (cbRole) {
        return cbRole.addEventListener('change', function (e) {
          return _this2.setRole(e);
        });
      });
      this.dom.subs.forEach(function (sub) {
        return sub.addEventListener('click', function (e) {
          return _this2.initForm(e);
        });
      });
    }
  }, {
    key: "initForm",
    value: function initForm(e) {
      e.preventDefault();
      var submit = e.target;
      var form = submit.closest('form');
      var copiedMsg = form.querySelector('.copied-msg');
      var output = form.output;
      var html = this.getArticles(form);
      this.copyStringToClipboard(html);
      output.value = html;
      copiedMsg.classList.add('flipin');
      copiedMsg.addEventListener('animationend', function () {
        return copiedMsg.classList.remove('flipin');
      });
    }
  }, {
    key: "setRole",
    value: function setRole(e) {
      var role = e.target.getAttribute('data-role');
      document.body.classList.toggle("show-".concat(role), e.target.checked);
    }
  }, {
    key: "getNode",
    value: function getNode(selector, form) {
      if (selector.startsWith('.') || selector.startsWith('#')) {
        return form.querySelectorAll(selector);
      } else {
        return form[selector];
      }
    }
  }, {
    key: "initElementToggled",
    value: function initElementToggled(element) {
      var context = element.closest('form');
      var selector = element.getAttribute('data-toggle-ref');
      var inputsArr = this.getNode(selector, context);
      if (!inputsArr.length) inputsArr = [inputsArr]; // Force inputs to be an array even if there is only 1 value

      var type = inputsArr[0].type; // radio, checkbox, etc.

      switch (type) {
        case 'radio':
          this.initElementToggledByRadio(element, inputsArr);
          break;

        case 'checkbox':
          this.initElementToggledByCheckbox(element, inputsArr);
          break;
      }
    }
  }, {
    key: "getAcceptableRadiosValues",
    value: function getAcceptableRadiosValues(element) {
      var str = element.getAttribute('data-toggle-visible');
      var arr = str === null ? [] : str.split('||');
      return arr;
    }
  }, {
    key: "initElementToggledByRadio",
    value: function initElementToggledByRadio(element, radiosArr) {
      var _this3 = this;

      var acceptableRadiosValuesArr = this.getAcceptableRadiosValues(element);

      var _loop = function _loop(x) {
        var radio = radiosArr[x];

        _this3.setElementToggledByRadioVisibility(element, radio, acceptableRadiosValuesArr);

        radio.addEventListener('change', function () {
          return _this3.setElementToggledByRadioVisibility(element, radio, acceptableRadiosValuesArr);
        });
      };

      for (var x = 0; x < radiosArr.length; x++) {
        _loop(x);
      }
    }
  }, {
    key: "setElementToggledByRadioVisibility",
    value: function setElementToggledByRadioVisibility(element, radio, acceptableRadiosValuesArr) {
      var shouldBeVisible = radio.checked && acceptableRadiosValuesArr.indexOf(radio.value) !== -1;
      element.style.display = shouldBeVisible ? '' : 'none';

      if (shouldBeVisible) {
        var childrenRadios = element.querySelectorAll('input:checked');
        /*if(childrenRadios.length) {
          let ref = document.querySelectorAll(`[data-toggle-ref="${childrenRadios[0].name}"]`);
          let newAcceptableRadiosValuesArr = this.getAcceptableRadiosValues(ref);
          this.setElementToggledByRadioVisibility(ref, childrenRadios[0], newAcceptableRadiosValuesArr);
          console.log(ref);
        }*/
      }
    }
  }, {
    key: "initElementToggledByCheckbox",
    value: function initElementToggledByCheckbox(element, checkboxesArr) {
      var _this4 = this;

      var min = element.getAttribute('data-toggle-min');

      if (min !== null) {
        this.setElementToggledByCheckboxMinVisibility(element, checkboxesArr, min);

        for (var x = 0; x < checkboxesArr.length; x++) {
          var checkbox = checkboxesArr[x];
          checkbox.addEventListener('change', function () {
            return _this4.setElementToggledByCheckboxMinVisibility(element, checkboxesArr, min);
          });
        }
      } else {
        var _loop2 = function _loop2(_x) {
          var checkbox = checkboxesArr[_x];

          _this4.setElementToggledByCheckboxVisibility(element, checkbox);

          checkbox.addEventListener('change', function () {
            return _this4.setElementToggledByCheckboxVisibility(element, checkbox);
          });
        };

        for (var _x = 0; _x < checkboxesArr.length; _x++) {
          _loop2(_x);
        }
      }
    }
  }, {
    key: "setElementToggledByCheckboxVisibility",
    value: function setElementToggledByCheckboxVisibility(element, checkbox) {
      element.style.display = checkbox.checked ? '' : 'none';
    }
  }, {
    key: "setElementToggledByCheckboxMinVisibility",
    value: function setElementToggledByCheckboxMinVisibility(element, checkboxesArr, min) {
      var nbrChecked = 0;

      for (var x = 0; x < checkboxesArr.length; x++) {
        if (checkboxesArr[x].checked) nbrChecked++;
      }

      var shouldBeVisible = nbrChecked >= parseInt(min);
      element.style.display = shouldBeVisible ? '' : 'none';
    }
  }, {
    key: "getArticles",
    value: function getArticles(form) {
      var html = '';
      var content = this.getSections(form);

      if (content !== '') {
        var title = form.querySelector('h2').innerText;
        html += "h2. ".concat(title, "\n");
        html += content;
        html += '\n----';
      }

      return html;
    }
  }, {
    key: "getSections",
    value: function getSections(article) {
      var html = '';
      var sections = article.querySelectorAll('.section');

      for (var x = 0; x < sections.length; x++) {
        var section = sections[x];
        var type = this.getSectionType(section);
        var content = '';

        if (type === 'ul' || type === 'ol') {
          content = this.getListContent(section, type);
        }

        if (content !== '') {
          var title = '';
          var h3 = section.querySelector('h3');

          if (h3 !== null) {
            title = h3.innerText;

            if (title !== '') {
              html += "h3. ".concat(title, "\n");
            }
          }

          html += "".concat(content, "\n\n");
        }
      }

      return html;
    }
  }, {
    key: "getSectionType",
    value: function getSectionType(section) {
      var type = 'text';

      if (section.querySelector('ol')) {
        type = 'ol';
      } else if (section.querySelector('ul')) {
        type = 'ul';
      }

      return type;
    }
  }, {
    key: "getListContent",
    value: function getListContent(section, type) {
      var html = '';
      var items = section.querySelectorAll('li');
      var arr = [];

      for (var x = 0; x < items.length; x++) {
        var item = items[x];

        if (item.offsetParent !== null) {
          // L'élément est visible
          var text = this.getInput(item);

          if (text !== '') {
            arr.push(text);
          }
        }
      }

      if (arr.length > 1) {
        var prefix = type === 'ul' ? '*' : '#';
        html = prefix + ' ' + arr.join("\n".concat(prefix, " "));
      } else if (arr.length === 1) {
        html = arr[0];
      }

      return html;
    }
  }, {
    key: "getInput",
    value: function getInput(node) {
      var input = node.querySelector('input');
      var select = node.querySelector('select');
      var textarea = node.querySelector('textarea');
      var html = '';

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
  }, {
    key: "getTextarea",
    value: function getTextarea(node, textarea) {
      var html = '';

      if (textarea.value !== '') {
        var prefix = this.getText(node);
        if (prefix !== '') prefix += ': ';
        html = "".concat(prefix).concat(textarea.value);
      }

      return html;
    }
  }, {
    key: "getSelect",
    value: function getSelect(node, select) {
      var html = '';

      if (select.options[select.selectedIndex].value !== '') {
        html = "".concat(this.getText(node), " ").concat(select.options[select.selectedIndex].text);
      }

      return html;
    }
  }, {
    key: "getDate",
    value: function getDate(node, input) {
      var html = '';

      if (input.value !== '') {
        var suffix = this.getText(node);
        if (suffix !== '') suffix = ": ".concat(suffix);
        html = "*".concat(input.value, "*").concat(suffix);
      }

      return html;
    }
  }, {
    key: "getUrl",
    value: function getUrl(node, input) {
      var html = '';

      if (input.value !== '') {
        var url = input.value;

        if (url.startsWith('http')) {
          url = "[".concat(url, "]");
        }

        html = "*".concat(this.getText(node), "*: ").concat(url);
      }

      return html;
    }
  }, {
    key: "getRadio",
    value: function getRadio(node, input) {
      var html = '';
      var name = input.getAttribute('name');
      var form = input.closest('form');
      var value = this.getNode(name, form).value;

      if (value !== '') {
        var prefix = this.getText(node);
        if (prefix !== '') prefix += ': ';
        html = "".concat(prefix, "*").concat(value, "*");
      }

      return html;
    }
  }, {
    key: "getCheckbox",
    value: function getCheckbox(node, input) {
      var html = '';

      if (input.checked) {
        html = this.getText(node);
      }

      return html;
    }
  }, {
    key: "getText",
    value: function getText(node) {
      var str = node.innerHTML;
      str = this.replaceImg(str);
      str = this.stripTags(str);
      str = str.trim(); // remove start and end whitespaces;

      str = str.replace(/\r?\n|\r/g, ''); // strip linebreaks;

      str = str.replace(/ +(?= )/g, ''); // strip multiple white spaces;

      return str;
    }
  }, {
    key: "replaceImg",
    value: function replaceImg(str) {
      var newStr = str.replace(/<img src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/g, function (match, p1) {
        return "!".concat(p1, "!");
      });
      return newStr;
    }
  }, {
    key: "stripTags",
    value: function stripTags(str) {
      var el = document.createElement('div');
      el.innerHTML = str;
      el.querySelectorAll('.js-dont-output').forEach(function (e) {
        return e.parentNode.removeChild(e);
      });
      str = el.innerText;
      return str;
    }
  }, {
    key: "copyStringToClipboard",
    value: function copyStringToClipboard(str) {
      var el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style = {
        position: 'absolute',
        left: '-9999px'
      };
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      console.log(str);
    }
  }]);

  return Checklist;
}();

var checklist = new Checklist();
checklist.init();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJDaGVja2xpc3QiLCJkb20iLCJjYlJvbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhcnRpY2xlcyIsInNlY3Rpb25zIiwidG9nZ2xlcyIsInN1YnMiLCJnZW5lcmFsQ29weSIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JFYWNoIiwidG9nZ2xlIiwiaW5pdEVsZW1lbnRUb2dnbGVkIiwiYmluZEV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2V0Um9sZSIsInN1YiIsImluaXRGb3JtIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXQiLCJ0YXJnZXQiLCJmb3JtIiwiY2xvc2VzdCIsImNvcGllZE1zZyIsIm91dHB1dCIsImh0bWwiLCJnZXRBcnRpY2xlcyIsImNvcHlTdHJpbmdUb0NsaXBib2FyZCIsInZhbHVlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwicm9sZSIsImdldEF0dHJpYnV0ZSIsImJvZHkiLCJjaGVja2VkIiwic2VsZWN0b3IiLCJzdGFydHNXaXRoIiwiZWxlbWVudCIsImNvbnRleHQiLCJpbnB1dHNBcnIiLCJnZXROb2RlIiwibGVuZ3RoIiwidHlwZSIsImluaXRFbGVtZW50VG9nZ2xlZEJ5UmFkaW8iLCJpbml0RWxlbWVudFRvZ2dsZWRCeUNoZWNrYm94Iiwic3RyIiwiYXJyIiwic3BsaXQiLCJyYWRpb3NBcnIiLCJhY2NlcHRhYmxlUmFkaW9zVmFsdWVzQXJyIiwiZ2V0QWNjZXB0YWJsZVJhZGlvc1ZhbHVlcyIsIngiLCJyYWRpbyIsInNldEVsZW1lbnRUb2dnbGVkQnlSYWRpb1Zpc2liaWxpdHkiLCJzaG91bGRCZVZpc2libGUiLCJpbmRleE9mIiwic3R5bGUiLCJkaXNwbGF5IiwiY2hpbGRyZW5SYWRpb3MiLCJjaGVja2JveGVzQXJyIiwibWluIiwic2V0RWxlbWVudFRvZ2dsZWRCeUNoZWNrYm94TWluVmlzaWJpbGl0eSIsImNoZWNrYm94Iiwic2V0RWxlbWVudFRvZ2dsZWRCeUNoZWNrYm94VmlzaWJpbGl0eSIsIm5ickNoZWNrZWQiLCJwYXJzZUludCIsImNvbnRlbnQiLCJnZXRTZWN0aW9ucyIsInRpdGxlIiwiaW5uZXJUZXh0IiwiYXJ0aWNsZSIsInNlY3Rpb24iLCJnZXRTZWN0aW9uVHlwZSIsImdldExpc3RDb250ZW50IiwiaDMiLCJpdGVtcyIsIml0ZW0iLCJvZmZzZXRQYXJlbnQiLCJ0ZXh0IiwiZ2V0SW5wdXQiLCJwdXNoIiwicHJlZml4Iiwiam9pbiIsIm5vZGUiLCJpbnB1dCIsInNlbGVjdCIsInRleHRhcmVhIiwiZ2V0VXJsIiwiZ2V0RGF0ZSIsImdldFJhZGlvIiwiZ2V0Q2hlY2tib3giLCJnZXRTZWxlY3QiLCJnZXRUZXh0YXJlYSIsImdldFRleHQiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInN1ZmZpeCIsInVybCIsIm5hbWUiLCJpbm5lckhUTUwiLCJyZXBsYWNlSW1nIiwic3RyaXBUYWdzIiwidHJpbSIsInJlcGxhY2UiLCJuZXdTdHIiLCJtYXRjaCIsInAxIiwiZWwiLCJjcmVhdGVFbGVtZW50IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwic2V0QXR0cmlidXRlIiwicG9zaXRpb24iLCJsZWZ0IiwiYXBwZW5kQ2hpbGQiLCJleGVjQ29tbWFuZCIsImNvbnNvbGUiLCJsb2ciLCJjaGVja2xpc3QiLCJpbml0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxj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UyxHQUFHLElBQUl6SCxTQUFKLEVBQWhCO0FBQ0F5SCxTQUFTLENBQUNDLElBQVYsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9hcHAuanNcIik7XG4iLCJjbGFzcyBDaGVja2xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbSA9IHtcbiAgICAgIGNiUm9sZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNldC1yb2xlJyksXG4gICAgICBhcnRpY2xlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWFydGljbGUnKSxcbiAgICAgIHNlY3Rpb25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbicpLFxuICAgICAgdG9nZ2xlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9nZ2xlLXJlZl0nKSxcbiAgICAgIHN1YnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKSxcbiAgICAgIGdlbmVyYWxDb3B5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2VuZXJhbC1jb3B5JylcbiAgICB9O1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRvbS50b2dnbGVzLmZvckVhY2godG9nZ2xlID0+IHRoaXMuaW5pdEVsZW1lbnRUb2dnbGVkKHRvZ2dsZSkpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICB9XG5cbiAgYmluZEV2ZW50cygpIHtcbiAgICB0aGlzLmRvbS5jYlJvbGUuZm9yRWFjaChjYlJvbGUgPT5cbiAgICAgIGNiUm9sZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHRoaXMuc2V0Um9sZShlKSlcbiAgICApO1xuICAgIHRoaXMuZG9tLnN1YnMuZm9yRWFjaChzdWIgPT5cbiAgICAgIHN1Yi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5pbml0Rm9ybShlKSlcbiAgICApO1xuICB9XG5cbiAgaW5pdEZvcm0oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgc3VibWl0ID0gZS50YXJnZXQ7XG4gICAgbGV0IGZvcm0gPSBzdWJtaXQuY2xvc2VzdCgnZm9ybScpO1xuICAgIGxldCBjb3BpZWRNc2cgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jb3BpZWQtbXNnJyk7XG4gICAgbGV0IG91dHB1dCA9IGZvcm0ub3V0cHV0O1xuXG4gICAgbGV0IGh0bWwgPSB0aGlzLmdldEFydGljbGVzKGZvcm0pO1xuICAgIHRoaXMuY29weVN0cmluZ1RvQ2xpcGJvYXJkKGh0bWwpO1xuICAgIG91dHB1dC52YWx1ZSA9IGh0bWw7XG4gICAgY29waWVkTXNnLmNsYXNzTGlzdC5hZGQoJ2ZsaXBpbicpO1xuICAgIGNvcGllZE1zZy5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PlxuICAgICAgY29waWVkTXNnLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXBpbicpXG4gICAgKTtcbiAgfVxuXG4gIHNldFJvbGUoZSkge1xuICAgIGxldCByb2xlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXJvbGUnKTtcblxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShgc2hvdy0ke3JvbGV9YCwgZS50YXJnZXQuY2hlY2tlZCk7XG4gIH1cblxuICBnZXROb2RlKHNlbGVjdG9yLCBmb3JtKSB7XG4gICAgaWYgKHNlbGVjdG9yLnN0YXJ0c1dpdGgoJy4nKSB8fCBzZWxlY3Rvci5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIHJldHVybiBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZm9ybVtzZWxlY3Rvcl07XG4gICAgfVxuICB9XG5cbiAgaW5pdEVsZW1lbnRUb2dnbGVkKGVsZW1lbnQpIHtcbiAgICBsZXQgY29udGV4dCA9IGVsZW1lbnQuY2xvc2VzdCgnZm9ybScpO1xuICAgIGxldCBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZS1yZWYnKTtcbiAgICBsZXQgaW5wdXRzQXJyID0gdGhpcy5nZXROb2RlKHNlbGVjdG9yLCBjb250ZXh0KTtcbiAgICBpZiAoIWlucHV0c0Fyci5sZW5ndGgpIGlucHV0c0FyciA9IFtpbnB1dHNBcnJdOyAvLyBGb3JjZSBpbnB1dHMgdG8gYmUgYW4gYXJyYXkgZXZlbiBpZiB0aGVyZSBpcyBvbmx5IDEgdmFsdWVcbiAgICBsZXQgdHlwZSA9IGlucHV0c0FyclswXS50eXBlOyAvLyByYWRpbywgY2hlY2tib3gsIGV0Yy5cblxuICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgIHRoaXMuaW5pdEVsZW1lbnRUb2dnbGVkQnlSYWRpbyhlbGVtZW50LCBpbnB1dHNBcnIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgdGhpcy5pbml0RWxlbWVudFRvZ2dsZWRCeUNoZWNrYm94KGVsZW1lbnQsIGlucHV0c0Fycik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGdldEFjY2VwdGFibGVSYWRpb3NWYWx1ZXMoZWxlbWVudCkge1xuICAgIGxldCBzdHIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUtdmlzaWJsZScpO1xuICAgIGxldCBhcnIgPSBzdHIgPT09IG51bGwgPyBbXSA6IHN0ci5zcGxpdCgnfHwnKTtcblxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICBpbml0RWxlbWVudFRvZ2dsZWRCeVJhZGlvKGVsZW1lbnQsIHJhZGlvc0Fycikge1xuICAgIGxldCBhY2NlcHRhYmxlUmFkaW9zVmFsdWVzQXJyID0gdGhpcy5nZXRBY2NlcHRhYmxlUmFkaW9zVmFsdWVzKGVsZW1lbnQpO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCByYWRpb3NBcnIubGVuZ3RoOyB4KyspIHtcbiAgICAgIGxldCByYWRpbyA9IHJhZGlvc0Fyclt4XTtcblxuICAgICAgdGhpcy5zZXRFbGVtZW50VG9nZ2xlZEJ5UmFkaW9WaXNpYmlsaXR5KGVsZW1lbnQsIHJhZGlvLCBhY2NlcHRhYmxlUmFkaW9zVmFsdWVzQXJyKTtcbiAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudFRvZ2dsZWRCeVJhZGlvVmlzaWJpbGl0eShlbGVtZW50LCByYWRpbywgYWNjZXB0YWJsZVJhZGlvc1ZhbHVlc0FycilcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgc2V0RWxlbWVudFRvZ2dsZWRCeVJhZGlvVmlzaWJpbGl0eShlbGVtZW50LCByYWRpbywgYWNjZXB0YWJsZVJhZGlvc1ZhbHVlc0Fycikge1xuICAgIGxldCBzaG91bGRCZVZpc2libGUgPSByYWRpby5jaGVja2VkICYmIGFjY2VwdGFibGVSYWRpb3NWYWx1ZXNBcnIuaW5kZXhPZihyYWRpby52YWx1ZSkgIT09IC0xO1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHNob3VsZEJlVmlzaWJsZSA/ICcnIDogJ25vbmUnO1xuXG4gICAgaWYgKHNob3VsZEJlVmlzaWJsZSkge1xuICAgICAgbGV0IGNoaWxkcmVuUmFkaW9zID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dDpjaGVja2VkJyk7XG5cbiAgICAgIC8qaWYoY2hpbGRyZW5SYWRpb3MubGVuZ3RoKSB7XG4gICAgICAgIGxldCByZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS10b2dnbGUtcmVmPVwiJHtjaGlsZHJlblJhZGlvc1swXS5uYW1lfVwiXWApO1xuICAgICAgICBsZXQgbmV3QWNjZXB0YWJsZVJhZGlvc1ZhbHVlc0FyciA9IHRoaXMuZ2V0QWNjZXB0YWJsZVJhZGlvc1ZhbHVlcyhyZWYpO1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRUb2dnbGVkQnlSYWRpb1Zpc2liaWxpdHkocmVmLCBjaGlsZHJlblJhZGlvc1swXSwgbmV3QWNjZXB0YWJsZVJhZGlvc1ZhbHVlc0Fycik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlZik7XG4gICAgICB9Ki9cbiAgICB9XG4gIH1cblxuICBpbml0RWxlbWVudFRvZ2dsZWRCeUNoZWNrYm94KGVsZW1lbnQsIGNoZWNrYm94ZXNBcnIpIHtcbiAgICBsZXQgbWluID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlLW1pbicpO1xuXG4gICAgaWYgKG1pbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRFbGVtZW50VG9nZ2xlZEJ5Q2hlY2tib3hNaW5WaXNpYmlsaXR5KGVsZW1lbnQsIGNoZWNrYm94ZXNBcnIsIG1pbik7XG5cbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgY2hlY2tib3hlc0Fyci5sZW5ndGg7IHgrKykge1xuICAgICAgICBsZXQgY2hlY2tib3ggPSBjaGVja2JveGVzQXJyW3hdO1xuXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+XG4gICAgICAgICAgdGhpcy5zZXRFbGVtZW50VG9nZ2xlZEJ5Q2hlY2tib3hNaW5WaXNpYmlsaXR5KGVsZW1lbnQsIGNoZWNrYm94ZXNBcnIsIG1pbilcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjaGVja2JveGVzQXJyLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGxldCBjaGVja2JveCA9IGNoZWNrYm94ZXNBcnJbeF07XG5cbiAgICAgICAgdGhpcy5zZXRFbGVtZW50VG9nZ2xlZEJ5Q2hlY2tib3hWaXNpYmlsaXR5KGVsZW1lbnQsIGNoZWNrYm94KTtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT5cbiAgICAgICAgICB0aGlzLnNldEVsZW1lbnRUb2dnbGVkQnlDaGVja2JveFZpc2liaWxpdHkoZWxlbWVudCwgY2hlY2tib3gpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0RWxlbWVudFRvZ2dsZWRCeUNoZWNrYm94VmlzaWJpbGl0eShlbGVtZW50LCBjaGVja2JveCkge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGNoZWNrYm94LmNoZWNrZWQgPyAnJyA6ICdub25lJztcbiAgfVxuXG4gIHNldEVsZW1lbnRUb2dnbGVkQnlDaGVja2JveE1pblZpc2liaWxpdHkoZWxlbWVudCwgY2hlY2tib3hlc0FyciwgbWluKSB7XG4gICAgbGV0IG5ickNoZWNrZWQgPSAwO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBjaGVja2JveGVzQXJyLmxlbmd0aDsgeCsrKSB7XG4gICAgICBpZiAoY2hlY2tib3hlc0Fyclt4XS5jaGVja2VkKSBuYnJDaGVja2VkKys7XG4gICAgfVxuXG4gICAgbGV0IHNob3VsZEJlVmlzaWJsZSA9IG5ickNoZWNrZWQgPj0gcGFyc2VJbnQobWluKTtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBzaG91bGRCZVZpc2libGUgPyAnJyA6ICdub25lJztcbiAgfVxuXG4gIGdldEFydGljbGVzKGZvcm0pIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRTZWN0aW9ucyhmb3JtKTtcblxuICAgIGlmIChjb250ZW50ICE9PSAnJykge1xuICAgICAgbGV0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdoMicpLmlubmVyVGV4dDtcbiAgICAgIGh0bWwgKz0gYGgyLiAke3RpdGxlfVxcbmA7XG4gICAgICBodG1sICs9IGNvbnRlbnQ7XG4gICAgICBodG1sICs9ICdcXG4tLS0tJztcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFNlY3Rpb25zKGFydGljbGUpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGxldCBzZWN0aW9ucyA9IGFydGljbGUucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24nKTtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2VjdGlvbnMubGVuZ3RoOyB4KyspIHtcbiAgICAgIGxldCBzZWN0aW9uID0gc2VjdGlvbnNbeF07XG4gICAgICBsZXQgdHlwZSA9IHRoaXMuZ2V0U2VjdGlvblR5cGUoc2VjdGlvbik7XG4gICAgICBsZXQgY29udGVudCA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ3VsJyB8fCB0eXBlID09PSAnb2wnKSB7XG4gICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldExpc3RDb250ZW50KHNlY3Rpb24sIHR5cGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29udGVudCAhPT0gJycpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gJyc7XG4gICAgICAgIGxldCBoMyA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcignaDMnKTtcbiAgICAgICAgaWYgKGgzICE9PSBudWxsKSB7XG4gICAgICAgICAgdGl0bGUgPSBoMy5pbm5lclRleHQ7XG4gICAgICAgICAgaWYgKHRpdGxlICE9PSAnJykge1xuICAgICAgICAgICAgaHRtbCArPSBgaDMuICR7dGl0bGV9XFxuYDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBodG1sICs9IGAke2NvbnRlbnR9XFxuXFxuYDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFNlY3Rpb25UeXBlKHNlY3Rpb24pIHtcbiAgICBsZXQgdHlwZSA9ICd0ZXh0JztcblxuICAgIGlmIChzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJ29sJykpIHtcbiAgICAgIHR5cGUgPSAnb2wnO1xuICAgIH0gZWxzZSBpZiAoc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCd1bCcpKSB7XG4gICAgICB0eXBlID0gJ3VsJztcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldExpc3RDb250ZW50KHNlY3Rpb24sIHR5cGUpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGxldCBpdGVtcyA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICBsZXQgYXJyID0gW107XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZW1zLmxlbmd0aDsgeCsrKSB7XG4gICAgICBsZXQgaXRlbSA9IGl0ZW1zW3hdO1xuXG4gICAgICBpZiAoaXRlbS5vZmZzZXRQYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgLy8gTCfDqWzDqW1lbnQgZXN0IHZpc2libGVcbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLmdldElucHV0KGl0ZW0pO1xuICAgICAgICBpZiAodGV4dCAhPT0gJycpIHtcbiAgICAgICAgICBhcnIucHVzaCh0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhcnIubGVuZ3RoID4gMSkge1xuICAgICAgbGV0IHByZWZpeCA9IHR5cGUgPT09ICd1bCcgPyAnKicgOiAnIyc7XG4gICAgICBodG1sID0gcHJlZml4ICsgJyAnICsgYXJyLmpvaW4oYFxcbiR7cHJlZml4fSBgKTtcbiAgICB9IGVsc2UgaWYgKGFyci5sZW5ndGggPT09IDEpIHtcbiAgICAgIGh0bWwgPSBhcnJbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRJbnB1dChub2RlKSB7XG4gICAgbGV0IGlucHV0ID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIGxldCBzZWxlY3QgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICAgIGxldCB0ZXh0YXJlYSA9IG5vZGUucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcbiAgICBsZXQgaHRtbCA9ICcnO1xuXG4gICAgaWYgKGlucHV0ICE9PSBudWxsKSB7XG4gICAgICBzd2l0Y2ggKGlucHV0LnR5cGUpIHtcbiAgICAgICAgY2FzZSAndXJsJzpcbiAgICAgICAgICBodG1sID0gdGhpcy5nZXRVcmwobm9kZSwgaW5wdXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICBodG1sID0gdGhpcy5nZXREYXRlKG5vZGUsIGlucHV0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgIGh0bWwgPSB0aGlzLmdldFJhZGlvKG5vZGUsIGlucHV0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgIGh0bWwgPSB0aGlzLmdldENoZWNrYm94KG5vZGUsIGlucHV0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdCAhPT0gbnVsbCkge1xuICAgICAgaHRtbCA9IHRoaXMuZ2V0U2VsZWN0KG5vZGUsIHNlbGVjdCk7XG4gICAgfSBlbHNlIGlmICh0ZXh0YXJlYSAhPT0gbnVsbCkge1xuICAgICAgaHRtbCA9IHRoaXMuZ2V0VGV4dGFyZWEobm9kZSwgdGV4dGFyZWEpO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0VGV4dGFyZWEobm9kZSwgdGV4dGFyZWEpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGlmICh0ZXh0YXJlYS52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGxldCBwcmVmaXggPSB0aGlzLmdldFRleHQobm9kZSk7XG4gICAgICBpZiAocHJlZml4ICE9PSAnJykgcHJlZml4ICs9ICc6ICc7XG4gICAgICBodG1sID0gYCR7cHJlZml4fSR7dGV4dGFyZWEudmFsdWV9YDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRTZWxlY3Qobm9kZSwgc2VsZWN0KSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBpZiAoc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlICE9PSAnJykge1xuICAgICAgaHRtbCA9IGAke3RoaXMuZ2V0VGV4dChub2RlKX0gJHtcbiAgICAgICAgc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnRleHRcbiAgICAgIH1gO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldERhdGUobm9kZSwgaW5wdXQpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGxldCBzdWZmaXggPSB0aGlzLmdldFRleHQobm9kZSk7XG4gICAgICBpZiAoc3VmZml4ICE9PSAnJykgc3VmZml4ID0gYDogJHtzdWZmaXh9YDtcbiAgICAgIGh0bWwgPSBgKiR7aW5wdXQudmFsdWV9KiR7c3VmZml4fWA7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0VXJsKG5vZGUsIGlucHV0KSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBpZiAoaW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICBsZXQgdXJsID0gaW5wdXQudmFsdWU7XG4gICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgICB1cmwgPSBgWyR7dXJsfV1gO1xuICAgICAgfVxuXG4gICAgICBodG1sID0gYCoke3RoaXMuZ2V0VGV4dChub2RlKX0qOiAke3VybH1gO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFJhZGlvKG5vZGUsIGlucHV0KSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBsZXQgbmFtZSA9IGlucHV0LmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgIGxldCBmb3JtID0gaW5wdXQuY2xvc2VzdCgnZm9ybScpO1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0Tm9kZShuYW1lLCBmb3JtKS52YWx1ZTtcbiAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICBsZXQgcHJlZml4ID0gdGhpcy5nZXRUZXh0KG5vZGUpO1xuICAgICAgaWYgKHByZWZpeCAhPT0gJycpIHByZWZpeCArPSAnOiAnO1xuICAgICAgaHRtbCA9IGAke3ByZWZpeH0qJHt2YWx1ZX0qYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRDaGVja2JveChub2RlLCBpbnB1dCkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgaWYgKGlucHV0LmNoZWNrZWQpIHtcbiAgICAgIGh0bWwgPSB0aGlzLmdldFRleHQobm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0VGV4dChub2RlKSB7XG4gICAgbGV0IHN0ciA9IG5vZGUuaW5uZXJIVE1MO1xuICAgIHN0ciA9IHRoaXMucmVwbGFjZUltZyhzdHIpO1xuICAgIHN0ciA9IHRoaXMuc3RyaXBUYWdzKHN0cik7XG4gICAgc3RyID0gc3RyLnRyaW0oKTsgLy8gcmVtb3ZlIHN0YXJ0IGFuZCBlbmQgd2hpdGVzcGFjZXM7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1xccj9cXG58XFxyL2csICcnKTsgLy8gc3RyaXAgbGluZWJyZWFrcztcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvICsoPz0gKS9nLCAnJyk7IC8vIHN0cmlwIG11bHRpcGxlIHdoaXRlIHNwYWNlcztcblxuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICByZXBsYWNlSW1nKHN0cikge1xuICAgIGxldCBuZXdTdHIgPSBzdHIucmVwbGFjZShcbiAgICAgIC88aW1nIHNyY1xccyo9XFxzKlsnXFxcIl0oW14nXFxcIl0qPylbJ1xcXCJdW14+XSo/Pi9nLFxuICAgICAgZnVuY3Rpb24obWF0Y2gsIHAxKSB7XG4gICAgICAgIHJldHVybiBgISR7cDF9IWA7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiBuZXdTdHI7XG4gIH1cblxuICBzdHJpcFRhZ3Moc3RyKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuaW5uZXJIVE1MID0gc3RyO1xuICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1kb250LW91dHB1dCcpLmZvckVhY2goZSA9PlxuICAgICAgZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpXG4gICAgKTtcbiAgICBzdHIgPSBlbC5pbm5lclRleHQ7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIGNvcHlTdHJpbmdUb0NsaXBib2FyZChzdHIpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGVsLnZhbHVlID0gc3RyO1xuICAgIGVsLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG4gICAgZWwuc3R5bGUgPSB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnLTk5OTlweCcgfTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgICBlbC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIGNvbnNvbGUubG9nKHN0cik7XG4gIH1cbn1cblxubGV0IGNoZWNrbGlzdCA9IG5ldyBDaGVja2xpc3QoKTtcbmNoZWNrbGlzdC5pbml0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9