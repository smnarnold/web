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
      var isAcceptable = acceptableRadiosValuesArr.indexOf(radio.value) !== -1;
      var shouldBeVisible = radio.checked && isAcceptable;

      if (shouldBeVisible) {
        element.style.display = '';
        this.checkChildrenInputs(element);
      } else {
        element.style.display = 'none';
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
      if (checkbox.checked) {
        element.style.display = '';
        this.checkChildrenInputs(element);
      } else {
        element.style.display = 'none';
      }
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
    key: "checkChildrenInputs",
    value: function checkChildrenInputs(parent) {
      var input = parent.querySelector('input:checked');

      if (input !== null) {
        var type = input.type; // radio, checkbox, etc.

        var elements = document.querySelectorAll("[data-toggle-ref=\"".concat(input.name, "\"]"));

        for (var x = 0; x < elements.length; x++) {
          var element = elements[x];

          switch (type) {
            case 'radio':
              this.setElementToggledByRadioVisibility(element, input, this.getAcceptableRadiosValues(element));
              break;

            case 'checkbox':
              this.setElementToggledByCheckboxVisibility(element, input);
              break;
          }
        }
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJDaGVja2xpc3QiLCJkb20iLCJjYlJvbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhcnRpY2xlcyIsInNlY3Rpb25zIiwidG9nZ2xlcyIsInN1YnMiLCJnZW5lcmFsQ29weSIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JFYWNoIiwidG9nZ2xlIiwiaW5pdEVsZW1lbnRUb2dnbGVkIiwiYmluZEV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2V0Um9sZSIsInN1YiIsImluaXRGb3JtIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXQiLCJ0YXJnZXQiLCJmb3JtIiwiY2xvc2VzdCIsImNvcGllZE1zZyIsIm91dHB1dCIsImh0bWwiLCJnZXRBcnRpY2xlcyIsImNvcHlTdHJpbmdUb0NsaXBib2FyZCIsInZhbHVlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwicm9sZSIsImdldEF0dHJpYnV0ZSIsImJvZHkiLCJjaGVja2VkIiwic2VsZWN0b3IiLCJzdGFydHNXaXRoIiwiZWxlbWVudCIsImNvbnRleHQiLCJpbnB1dHNBcnIiLCJnZXROb2RlIiwibGVuZ3RoIiwidHlwZSIsImluaXRFbGVtZW50VG9nZ2xlZEJ5UmFkaW8iLCJpbml0RWxlbWVudFRvZ2dsZWRCeUNoZWNrYm94Iiwic3RyIiwiYXJyIiwic3BsaXQiLCJyYWRpb3NBcnIiLCJhY2NlcHRhYmxlUmFkaW9zVmFsdWVzQXJyIiwiZ2V0QWNjZXB0YWJsZVJhZGlvc1ZhbHVlcyIsIngiLCJyYWRpbyIsInNldEVsZW1lbnRUb2dnbGVkQnlSYWRpb1Zpc2liaWxpdHkiLCJpc0FjY2VwdGFibGUiLCJpbmRleE9mIiwic2hvdWxkQmVWaXNpYmxlIiwic3R5bGUiLCJkaXNwbGF5IiwiY2hlY2tDaGlsZHJlbklucHV0cyIsImNoZWNrYm94ZXNBcnIiLCJtaW4iLCJzZXRFbGVtZW50VG9nZ2xlZEJ5Q2hlY2tib3hNaW5WaXNpYmlsaXR5IiwiY2hlY2tib3giLCJzZXRFbGVtZW50VG9nZ2xlZEJ5Q2hlY2tib3hWaXNpYmlsaXR5IiwibmJyQ2hlY2tlZCIsInBhcnNlSW50IiwicGFyZW50IiwiaW5wdXQiLCJlbGVtZW50cyIsIm5hbWUiLCJjb250ZW50IiwiZ2V0U2VjdGlvbnMiLCJ0aXRsZSIsImlubmVyVGV4dCIsImFydGljbGUiLCJzZWN0aW9uIiwiZ2V0U2VjdGlvblR5cGUiLCJnZXRMaXN0Q29udGVudCIsImgzIiwiaXRlbXMiLCJpdGVtIiwib2Zmc2V0UGFyZW50IiwidGV4dCIsImdldElucHV0IiwicHVzaCIsInByZWZpeCIsImpvaW4iLCJub2RlIiwic2VsZWN0IiwidGV4dGFyZWEiLCJnZXRVcmwiLCJnZXREYXRlIiwiZ2V0UmFkaW8iLCJnZXRDaGVja2JveCIsImdldFNlbGVjdCIsImdldFRleHRhcmVhIiwiZ2V0VGV4dCIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4Iiwic3VmZml4IiwidXJsIiwiaW5uZXJIVE1MIiwicmVwbGFjZUltZyIsInN0cmlwVGFncyIsInRyaW0iLCJyZXBsYWNlIiwibmV3U3RyIiwibWF0Y2giLCJwMSIsImVsIiwiY3JlYXRlRWxlbWVudCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInNldEF0dHJpYnV0ZSIsInBvc2l0aW9uIiwibGVmdCIsImFwcGVuZENoaWxkIiwiZXhlY0NvbW1hbmQiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tsaXN0IiwiaW5pdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUFJaUUsRUFBRSxHQUFHOUcsUUFBUSxDQUFDK0csYUFBVCxDQUF1QixLQUF2QixDQUFUO0FBQ0FELFFBQUUsQ0FBQ1IsU0FBSCxHQUFlekQsR0FBZjtBQUNBaUUsUUFBRSxDQUFDN0csZ0JBQUgsQ0FBb0IsaUJBQXBCLEVBQXVDTyxPQUF2QyxDQUErQyxVQUFBSyxDQUFDO0FBQUEsZUFDOUNBLENBQUMsQ0FBQ21HLFVBQUYsQ0FBYUMsV0FBYixDQUF5QnBHLENBQXpCLENBRDhDO0FBQUEsT0FBaEQ7QUFHQWdDLFNBQUcsR0FBR2lFLEVBQUUsQ0FBQ3BDLFNBQVQ7QUFDQSxhQUFPN0IsR0FBUDtBQUNEOzs7MENBRXFCQSxHLEVBQUs7QUFDekIsVUFBSWlFLEVBQUUsR0FBRzlHLFFBQVEsQ0FBQytHLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBVDtBQUNBRCxRQUFFLENBQUNuRixLQUFILEdBQVdrQixHQUFYO0FBQ0FpRSxRQUFFLENBQUNJLFlBQUgsQ0FBZ0IsVUFBaEIsRUFBNEIsRUFBNUI7QUFDQUosUUFBRSxDQUFDckQsS0FBSCxHQUFXO0FBQUUwRCxnQkFBUSxFQUFFLFVBQVo7QUFBd0JDLFlBQUksRUFBRTtBQUE5QixPQUFYO0FBQ0FwSCxjQUFRLENBQUNpQyxJQUFULENBQWNvRixXQUFkLENBQTBCUCxFQUExQjtBQUNBQSxRQUFFLENBQUNyQixNQUFIO0FBQ0F6RixjQUFRLENBQUNzSCxXQUFULENBQXFCLE1BQXJCO0FBQ0F0SCxjQUFRLENBQUNpQyxJQUFULENBQWNnRixXQUFkLENBQTBCSCxFQUExQjtBQUNBUyxhQUFPLENBQUNDLEdBQVIsQ0FBWTNFLEdBQVo7QUFDRDs7Ozs7O0FBR0gsSUFBSTRFLFNBQVMsR0FBRyxJQUFJNUgsU0FBSixFQUFoQjtBQUNBNEgsU0FBUyxDQUFDQyxJQUFWLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYXBwLmpzXCIpO1xuIiwiY2xhc3MgQ2hlY2tsaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb20gPSB7XG4gICAgICBjYlJvbGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zZXQtcm9sZScpLFxuICAgICAgYXJ0aWNsZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hcnRpY2xlJyksXG4gICAgICBzZWN0aW9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24nKSxcbiAgICAgIHRvZ2dsZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZS1yZWZdJyksXG4gICAgICBzdWJzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyksXG4gICAgICBnZW5lcmFsQ29weTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlbmVyYWwtY29weScpXG4gICAgfTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kb20udG9nZ2xlcy5mb3JFYWNoKHRvZ2dsZSA9PiB0aGlzLmluaXRFbGVtZW50VG9nZ2xlZCh0b2dnbGUpKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgfVxuXG4gIGJpbmRFdmVudHMoKSB7XG4gICAgdGhpcy5kb20uY2JSb2xlLmZvckVhY2goY2JSb2xlID0+XG4gICAgICBjYlJvbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB0aGlzLnNldFJvbGUoZSkpXG4gICAgKTtcbiAgICB0aGlzLmRvbS5zdWJzLmZvckVhY2goc3ViID0+XG4gICAgICBzdWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuaW5pdEZvcm0oZSkpXG4gICAgKTtcbiAgfVxuXG4gIGluaXRGb3JtKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHN1Ym1pdCA9IGUudGFyZ2V0O1xuICAgIGxldCBmb3JtID0gc3VibWl0LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICBsZXQgY29waWVkTXNnID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuY29waWVkLW1zZycpO1xuICAgIGxldCBvdXRwdXQgPSBmb3JtLm91dHB1dDtcblxuICAgIGxldCBodG1sID0gdGhpcy5nZXRBcnRpY2xlcyhmb3JtKTtcbiAgICB0aGlzLmNvcHlTdHJpbmdUb0NsaXBib2FyZChodG1sKTtcbiAgICBvdXRwdXQudmFsdWUgPSBodG1sO1xuICAgIGNvcGllZE1zZy5jbGFzc0xpc3QuYWRkKCdmbGlwaW4nKTtcbiAgICBjb3BpZWRNc2cuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT5cbiAgICAgIGNvcGllZE1zZy5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwaW4nKVxuICAgICk7XG4gIH1cblxuICBzZXRSb2xlKGUpIHtcbiAgICBsZXQgcm9sZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1yb2xlJyk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoYHNob3ctJHtyb2xlfWAsIGUudGFyZ2V0LmNoZWNrZWQpO1xuICB9XG5cbiAgZ2V0Tm9kZShzZWxlY3RvciwgZm9ybSkge1xuICAgIGlmIChzZWxlY3Rvci5zdGFydHNXaXRoKCcuJykgfHwgc2VsZWN0b3Iuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICByZXR1cm4gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZvcm1bc2VsZWN0b3JdO1xuICAgIH1cbiAgfVxuXG4gIGluaXRFbGVtZW50VG9nZ2xlZChlbGVtZW50KSB7XG4gICAgbGV0IGNvbnRleHQgPSBlbGVtZW50LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUtcmVmJyk7XG4gICAgbGV0IGlucHV0c0FyciA9IHRoaXMuZ2V0Tm9kZShzZWxlY3RvciwgY29udGV4dCk7XG4gICAgaWYgKCFpbnB1dHNBcnIubGVuZ3RoKSBpbnB1dHNBcnIgPSBbaW5wdXRzQXJyXTsgLy8gRm9yY2UgaW5wdXRzIHRvIGJlIGFuIGFycmF5IGV2ZW4gaWYgdGhlcmUgaXMgb25seSAxIHZhbHVlXG4gICAgbGV0IHR5cGUgPSBpbnB1dHNBcnJbMF0udHlwZTsgLy8gcmFkaW8sIGNoZWNrYm94LCBldGMuXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgdGhpcy5pbml0RWxlbWVudFRvZ2dsZWRCeVJhZGlvKGVsZW1lbnQsIGlucHV0c0Fycik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICB0aGlzLmluaXRFbGVtZW50VG9nZ2xlZEJ5Q2hlY2tib3goZWxlbWVudCwgaW5wdXRzQXJyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZ2V0QWNjZXB0YWJsZVJhZGlvc1ZhbHVlcyhlbGVtZW50KSB7XG4gICAgbGV0IHN0ciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZS12aXNpYmxlJyk7XG4gICAgbGV0IGFyciA9IHN0ciA9PT0gbnVsbCA/IFtdIDogc3RyLnNwbGl0KCd8fCcpO1xuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGluaXRFbGVtZW50VG9nZ2xlZEJ5UmFkaW8oZWxlbWVudCwgcmFkaW9zQXJyKSB7XG4gICAgbGV0IGFjY2VwdGFibGVSYWRpb3NWYWx1ZXNBcnIgPSB0aGlzLmdldEFjY2VwdGFibGVSYWRpb3NWYWx1ZXMoZWxlbWVudCk7XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHJhZGlvc0Fyci5sZW5ndGg7IHgrKykge1xuICAgICAgbGV0IHJhZGlvID0gcmFkaW9zQXJyW3hdO1xuXG4gICAgICB0aGlzLnNldEVsZW1lbnRUb2dnbGVkQnlSYWRpb1Zpc2liaWxpdHkoXG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIHJhZGlvLFxuICAgICAgICBhY2NlcHRhYmxlUmFkaW9zVmFsdWVzQXJyXG4gICAgICApO1xuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT5cbiAgICAgICAgdGhpcy5zZXRFbGVtZW50VG9nZ2xlZEJ5UmFkaW9WaXNpYmlsaXR5KFxuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgcmFkaW8sXG4gICAgICAgICAgYWNjZXB0YWJsZVJhZGlvc1ZhbHVlc0FyclxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHNldEVsZW1lbnRUb2dnbGVkQnlSYWRpb1Zpc2liaWxpdHkoXG4gICAgZWxlbWVudCxcbiAgICByYWRpbyxcbiAgICBhY2NlcHRhYmxlUmFkaW9zVmFsdWVzQXJyXG4gICkge1xuICAgIGxldCBpc0FjY2VwdGFibGUgPSBhY2NlcHRhYmxlUmFkaW9zVmFsdWVzQXJyLmluZGV4T2YocmFkaW8udmFsdWUpICE9PSAtMTtcbiAgICBsZXQgc2hvdWxkQmVWaXNpYmxlID0gcmFkaW8uY2hlY2tlZCAmJiBpc0FjY2VwdGFibGU7XG5cbiAgICBpZiAoc2hvdWxkQmVWaXNpYmxlKSB7XG4gICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgIHRoaXMuY2hlY2tDaGlsZHJlbklucHV0cyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxuXG4gIGluaXRFbGVtZW50VG9nZ2xlZEJ5Q2hlY2tib3goZWxlbWVudCwgY2hlY2tib3hlc0Fycikge1xuICAgIGxldCBtaW4gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUtbWluJyk7XG5cbiAgICBpZiAobWluICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldEVsZW1lbnRUb2dnbGVkQnlDaGVja2JveE1pblZpc2liaWxpdHkoXG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGNoZWNrYm94ZXNBcnIsXG4gICAgICAgIG1pblxuICAgICAgKTtcblxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjaGVja2JveGVzQXJyLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGxldCBjaGVja2JveCA9IGNoZWNrYm94ZXNBcnJbeF07XG5cbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT5cbiAgICAgICAgICB0aGlzLnNldEVsZW1lbnRUb2dnbGVkQnlDaGVja2JveE1pblZpc2liaWxpdHkoXG4gICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgY2hlY2tib3hlc0FycixcbiAgICAgICAgICAgIG1pblxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjaGVja2JveGVzQXJyLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGxldCBjaGVja2JveCA9IGNoZWNrYm94ZXNBcnJbeF07XG5cbiAgICAgICAgdGhpcy5zZXRFbGVtZW50VG9nZ2xlZEJ5Q2hlY2tib3hWaXNpYmlsaXR5KGVsZW1lbnQsIGNoZWNrYm94KTtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT5cbiAgICAgICAgICB0aGlzLnNldEVsZW1lbnRUb2dnbGVkQnlDaGVja2JveFZpc2liaWxpdHkoZWxlbWVudCwgY2hlY2tib3gpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0RWxlbWVudFRvZ2dsZWRCeUNoZWNrYm94VmlzaWJpbGl0eShlbGVtZW50LCBjaGVja2JveCkge1xuICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgIHRoaXMuY2hlY2tDaGlsZHJlbklucHV0cyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxuXG4gIHNldEVsZW1lbnRUb2dnbGVkQnlDaGVja2JveE1pblZpc2liaWxpdHkoZWxlbWVudCwgY2hlY2tib3hlc0FyciwgbWluKSB7XG4gICAgbGV0IG5ickNoZWNrZWQgPSAwO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBjaGVja2JveGVzQXJyLmxlbmd0aDsgeCsrKSB7XG4gICAgICBpZiAoY2hlY2tib3hlc0Fyclt4XS5jaGVja2VkKSBuYnJDaGVja2VkKys7XG4gICAgfVxuXG4gICAgbGV0IHNob3VsZEJlVmlzaWJsZSA9IG5ickNoZWNrZWQgPj0gcGFyc2VJbnQobWluKTtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBzaG91bGRCZVZpc2libGUgPyAnJyA6ICdub25lJztcbiAgfVxuXG4gIGNoZWNrQ2hpbGRyZW5JbnB1dHMocGFyZW50KSB7XG4gICAgbGV0IGlucHV0ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0OmNoZWNrZWQnKTtcblxuICAgIGlmIChpbnB1dCAhPT0gbnVsbCkge1xuICAgICAgbGV0IHR5cGUgPSBpbnB1dC50eXBlOyAvLyByYWRpbywgY2hlY2tib3gsIGV0Yy5cbiAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgIGBbZGF0YS10b2dnbGUtcmVmPVwiJHtpbnB1dC5uYW1lfVwiXWBcbiAgICAgICk7XG5cbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgZWxlbWVudHMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50c1t4XTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRUb2dnbGVkQnlSYWRpb1Zpc2liaWxpdHkoXG4gICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgICB0aGlzLmdldEFjY2VwdGFibGVSYWRpb3NWYWx1ZXMoZWxlbWVudClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRUb2dnbGVkQnlDaGVja2JveFZpc2liaWxpdHkoZWxlbWVudCwgaW5wdXQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRBcnRpY2xlcyhmb3JtKSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0U2VjdGlvbnMoZm9ybSk7XG5cbiAgICBpZiAoY29udGVudCAhPT0gJycpIHtcbiAgICAgIGxldCB0aXRsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignaDInKS5pbm5lclRleHQ7XG4gICAgICBodG1sICs9IGBoMi4gJHt0aXRsZX1cXG5gO1xuICAgICAgaHRtbCArPSBjb250ZW50O1xuICAgICAgaHRtbCArPSAnXFxuLS0tLSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRTZWN0aW9ucyhhcnRpY2xlKSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBsZXQgc2VjdGlvbnMgPSBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWN0aW9uJyk7XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNlY3Rpb25zLmxlbmd0aDsgeCsrKSB7XG4gICAgICBsZXQgc2VjdGlvbiA9IHNlY3Rpb25zW3hdO1xuICAgICAgbGV0IHR5cGUgPSB0aGlzLmdldFNlY3Rpb25UeXBlKHNlY3Rpb24pO1xuICAgICAgbGV0IGNvbnRlbnQgPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09ICd1bCcgfHwgdHlwZSA9PT0gJ29sJykge1xuICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRMaXN0Q29udGVudChzZWN0aW9uLCB0eXBlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgIGxldCB0aXRsZSA9ICcnO1xuICAgICAgICBsZXQgaDMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJ2gzJyk7XG4gICAgICAgIGlmIChoMyAhPT0gbnVsbCkge1xuICAgICAgICAgIHRpdGxlID0gaDMuaW5uZXJUZXh0O1xuICAgICAgICAgIGlmICh0aXRsZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGh0bWwgKz0gYGgzLiAke3RpdGxlfVxcbmA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaHRtbCArPSBgJHtjb250ZW50fVxcblxcbmA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRTZWN0aW9uVHlwZShzZWN0aW9uKSB7XG4gICAgbGV0IHR5cGUgPSAndGV4dCc7XG5cbiAgICBpZiAoc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCdvbCcpKSB7XG4gICAgICB0eXBlID0gJ29sJztcbiAgICB9IGVsc2UgaWYgKHNlY3Rpb24ucXVlcnlTZWxlY3RvcigndWwnKSkge1xuICAgICAgdHlwZSA9ICd1bCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBnZXRMaXN0Q29udGVudChzZWN0aW9uLCB0eXBlKSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBsZXQgaXRlbXMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgbGV0IGFyciA9IFtdO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVtcy5sZW5ndGg7IHgrKykge1xuICAgICAgbGV0IGl0ZW0gPSBpdGVtc1t4XTtcblxuICAgICAgaWYgKGl0ZW0ub2Zmc2V0UGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIC8vIEwnw6lsw6ltZW50IGVzdCB2aXNpYmxlXG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5nZXRJbnB1dChpdGVtKTtcbiAgICAgICAgaWYgKHRleHQgIT09ICcnKSB7XG4gICAgICAgICAgYXJyLnB1c2godGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxldCBwcmVmaXggPSB0eXBlID09PSAndWwnID8gJyonIDogJyMnO1xuICAgICAgaHRtbCA9IHByZWZpeCArICcgJyArIGFyci5qb2luKGBcXG4ke3ByZWZpeH0gYCk7XG4gICAgfSBlbHNlIGlmIChhcnIubGVuZ3RoID09PSAxKSB7XG4gICAgICBodG1sID0gYXJyWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0SW5wdXQobm9kZSkge1xuICAgIGxldCBpbnB1dCA9IG5vZGUucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICBsZXQgc2VsZWN0ID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICBsZXQgdGV4dGFyZWEgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XG4gICAgbGV0IGh0bWwgPSAnJztcblxuICAgIGlmIChpbnB1dCAhPT0gbnVsbCkge1xuICAgICAgc3dpdGNoIChpbnB1dC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3VybCc6XG4gICAgICAgICAgaHRtbCA9IHRoaXMuZ2V0VXJsKG5vZGUsIGlucHV0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgaHRtbCA9IHRoaXMuZ2V0RGF0ZShub2RlLCBpbnB1dCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICBodG1sID0gdGhpcy5nZXRSYWRpbyhub2RlLCBpbnB1dCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICBodG1sID0gdGhpcy5nZXRDaGVja2JveChub2RlLCBpbnB1dCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzZWxlY3QgIT09IG51bGwpIHtcbiAgICAgIGh0bWwgPSB0aGlzLmdldFNlbGVjdChub2RlLCBzZWxlY3QpO1xuICAgIH0gZWxzZSBpZiAodGV4dGFyZWEgIT09IG51bGwpIHtcbiAgICAgIGh0bWwgPSB0aGlzLmdldFRleHRhcmVhKG5vZGUsIHRleHRhcmVhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFRleHRhcmVhKG5vZGUsIHRleHRhcmVhKSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBpZiAodGV4dGFyZWEudmFsdWUgIT09ICcnKSB7XG4gICAgICBsZXQgcHJlZml4ID0gdGhpcy5nZXRUZXh0KG5vZGUpO1xuICAgICAgaWYgKHByZWZpeCAhPT0gJycpIHByZWZpeCArPSAnOiAnO1xuICAgICAgaHRtbCA9IGAke3ByZWZpeH0ke3RleHRhcmVhLnZhbHVlfWA7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0U2VsZWN0KG5vZGUsIHNlbGVjdCkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgaWYgKHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGh0bWwgPSBgJHt0aGlzLmdldFRleHQobm9kZSl9ICR7XG4gICAgICAgIHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0XG4gICAgICB9YDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXREYXRlKG5vZGUsIGlucHV0KSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBpZiAoaW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICBsZXQgc3VmZml4ID0gdGhpcy5nZXRUZXh0KG5vZGUpO1xuICAgICAgaWYgKHN1ZmZpeCAhPT0gJycpIHN1ZmZpeCA9IGA6ICR7c3VmZml4fWA7XG4gICAgICBodG1sID0gYCoke2lucHV0LnZhbHVlfSoke3N1ZmZpeH1gO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFVybChub2RlLCBpbnB1dCkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgaWYgKGlucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgbGV0IHVybCA9IGlucHV0LnZhbHVlO1xuICAgICAgaWYgKHVybC5zdGFydHNXaXRoKCdodHRwJykpIHtcbiAgICAgICAgdXJsID0gYFske3VybH1dYDtcbiAgICAgIH1cblxuICAgICAgaHRtbCA9IGAqJHt0aGlzLmdldFRleHQobm9kZSl9KjogJHt1cmx9YDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRSYWRpbyhub2RlLCBpbnB1dCkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgbGV0IG5hbWUgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICBsZXQgZm9ybSA9IGlucHV0LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLmdldE5vZGUobmFtZSwgZm9ybSkudmFsdWU7XG4gICAgaWYgKHZhbHVlICE9PSAnJykge1xuICAgICAgbGV0IHByZWZpeCA9IHRoaXMuZ2V0VGV4dChub2RlKTtcbiAgICAgIGlmIChwcmVmaXggIT09ICcnKSBwcmVmaXggKz0gJzogJztcbiAgICAgIGh0bWwgPSBgJHtwcmVmaXh9KiR7dmFsdWV9KmA7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0Q2hlY2tib3gobm9kZSwgaW5wdXQpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGlmIChpbnB1dC5jaGVja2VkKSB7XG4gICAgICBodG1sID0gdGhpcy5nZXRUZXh0KG5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFRleHQobm9kZSkge1xuICAgIGxldCBzdHIgPSBub2RlLmlubmVySFRNTDtcbiAgICBzdHIgPSB0aGlzLnJlcGxhY2VJbWcoc3RyKTtcbiAgICBzdHIgPSB0aGlzLnN0cmlwVGFncyhzdHIpO1xuICAgIHN0ciA9IHN0ci50cmltKCk7IC8vIHJlbW92ZSBzdGFydCBhbmQgZW5kIHdoaXRlc3BhY2VzO1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cXHI/XFxufFxcci9nLCAnJyk7IC8vIHN0cmlwIGxpbmVicmVha3M7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoLyArKD89ICkvZywgJycpOyAvLyBzdHJpcCBtdWx0aXBsZSB3aGl0ZSBzcGFjZXM7XG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgcmVwbGFjZUltZyhzdHIpIHtcbiAgICBsZXQgbmV3U3RyID0gc3RyLnJlcGxhY2UoXG4gICAgICAvPGltZyBzcmNcXHMqPVxccypbJ1xcXCJdKFteJ1xcXCJdKj8pWydcXFwiXVtePl0qPz4vZyxcbiAgICAgIGZ1bmN0aW9uKG1hdGNoLCBwMSkge1xuICAgICAgICByZXR1cm4gYCEke3AxfSFgO1xuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gbmV3U3RyO1xuICB9XG5cbiAgc3RyaXBUYWdzKHN0cikge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsLmlubmVySFRNTCA9IHN0cjtcbiAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtZG9udC1vdXRwdXQnKS5mb3JFYWNoKGUgPT5cbiAgICAgIGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKVxuICAgICk7XG4gICAgc3RyID0gZWwuaW5uZXJUZXh0O1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBjb3B5U3RyaW5nVG9DbGlwYm9hcmQoc3RyKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBlbC52YWx1ZSA9IHN0cjtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xuICAgIGVsLnN0eWxlID0geyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogJy05OTk5cHgnIH07XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gICAgZWwuc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcbiAgICBjb25zb2xlLmxvZyhzdHIpO1xuICB9XG59XG5cbmxldCBjaGVja2xpc3QgPSBuZXcgQ2hlY2tsaXN0KCk7XG5jaGVja2xpc3QuaW5pdCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==