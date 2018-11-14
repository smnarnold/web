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
      articles: document.querySelectorAll('.js-jira'),
      sections: document.querySelectorAll('.section'),
      toggles: document.querySelectorAll('[data-toggle-ref]'),
      togglesT: document.querySelectorAll('[data-toggle-refs]'),
      submit: document.forms.jira.submit,
      output: document.forms.jira.output
    };
  }

  _createClass(Checklist, [{
    key: "init",
    value: function init() {
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.dom.cbRole.forEach(function (cbRole) {
        cbRole.addEventListener('change', function (e) {
          return _this.setRole(e);
        });
      });
      this.dom.toggles.forEach(function (toggle) {
        return _this.initToggle(toggle);
      });
      this.dom.submit.addEventListener('click', function (e) {
        return _this.setJira(e);
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
    value: function getNode(selector) {
      if (selector.startsWith('.') || selector.startsWith('#')) {
        return document.forms.jira.querySelectorAll(selector);
      } else {
        return document.forms.jira[selector];
      }
    }
  }, {
    key: "initToggle",
    value: function initToggle(toggle) {
      var _this2 = this;

      var inputName = toggle.getAttribute('data-toggle-ref');
      var inputs = this.getNode(inputName);
      var isArr = inputs.length;
      if (!isArr) inputs = [inputs];
      var type = inputs[0].type;

      if (type === 'radio') {
        (function () {
          var value = toggle.getAttribute('data-toggle-visible');

          if (value !== null) {
            value = value.split('||');
          }

          var _loop = function _loop(x) {
            var input = inputs[x];

            _this2.setToggleRadio(toggle, input, value);

            input.addEventListener('change', function () {
              return _this2.setToggleRadio(toggle, input, value);
            });
          };

          for (var x = 0; x < inputs.length; x++) {
            _loop(x);
          }
        })();
      } else if (type === 'checkbox') {
        (function () {
          var min = toggle.getAttribute('data-toggle-min');

          if (min !== null) {
            _this2.setToggleMinCheckbox(toggle, inputs, min);

            for (var x = 0; x < inputs.length; x++) {
              var input = inputs[x];
              input.addEventListener('change', function () {
                return _this2.setToggleMinCheckbox(toggle, inputs, min);
              });
            }
          } else {
            var _loop2 = function _loop2(_x) {
              var input = inputs[_x];

              _this2.setToggleCheckbox(toggle, input);

              input.addEventListener('change', function () {
                return _this2.setToggleCheckbox(toggle, input);
              });
            };

            for (var _x = 0; _x < inputs.length; _x++) {
              _loop2(_x);
            }
          }
        })();
      }
    }
  }, {
    key: "setToggleRadio",
    value: function setToggleRadio(toggle, input, value) {
      if (input.checked && value.indexOf(input.value) !== -1) {
        toggle.style.display = '';
        toggle.classList.remove('js-dont-output');
      } else {
        toggle.style.display = 'none';
        toggle.classList.add('js-dont-output');
      }
    }
  }, {
    key: "setToggleMinCheckbox",
    value: function setToggleMinCheckbox(toggle, inputs, min) {
      var nbrChecked = 0;

      for (var x = 0; x < inputs.length; x++) {
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
  }, {
    key: "setToggleCheckbox",
    value: function setToggleCheckbox(toggle, input) {
      if (input.checked) {
        toggle.style.display = '';
        toggle.classList.remove('js-dont-output');
      } else {
        toggle.style.display = 'none';
        toggle.classList.add('js-dont-output');
      }
    }
  }, {
    key: "setJira",
    value: function setJira(e) {
      e.preventDefault();
      var html = this.getArticles();
      this.copyStringToClipboard(html);
      this.dom.output.value = html;
    }
  }, {
    key: "getArticles",
    value: function getArticles() {
      var html = '';

      for (var x = 0; x < this.dom.articles.length; x++) {
        var article = this.dom.articles[x];
        var content = this.getSections(article);

        if (content !== '') {
          var title = article.querySelector('h2').innerText;
          html += "h2. ".concat(title, "\n");
          html += content;
          html += '\n----';
        }
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
          var title = section.querySelector('h3').innerText;

          if (title !== '') {
            html += "h3. ".concat(title, "\n");
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
      var value = document.forms.jira[name].value;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJDaGVja2xpc3QiLCJkb20iLCJjYlJvbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhcnRpY2xlcyIsInNlY3Rpb25zIiwidG9nZ2xlcyIsInRvZ2dsZXNUIiwic3VibWl0IiwiZm9ybXMiLCJqaXJhIiwib3V0cHV0IiwiYmluZEV2ZW50cyIsImZvckVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNldFJvbGUiLCJ0b2dnbGUiLCJpbml0VG9nZ2xlIiwic2V0SmlyYSIsInJvbGUiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJib2R5IiwiY2xhc3NMaXN0IiwiY2hlY2tlZCIsInNlbGVjdG9yIiwic3RhcnRzV2l0aCIsImlucHV0TmFtZSIsImlucHV0cyIsImdldE5vZGUiLCJpc0FyciIsImxlbmd0aCIsInR5cGUiLCJ2YWx1ZSIsInNwbGl0IiwieCIsImlucHV0Iiwic2V0VG9nZ2xlUmFkaW8iLCJtaW4iLCJzZXRUb2dnbGVNaW5DaGVja2JveCIsInNldFRvZ2dsZUNoZWNrYm94IiwiaW5kZXhPZiIsInN0eWxlIiwiZGlzcGxheSIsInJlbW92ZSIsImFkZCIsIm5ickNoZWNrZWQiLCJwYXJzZUludCIsInByZXZlbnREZWZhdWx0IiwiaHRtbCIsImdldEFydGljbGVzIiwiY29weVN0cmluZ1RvQ2xpcGJvYXJkIiwiYXJ0aWNsZSIsImNvbnRlbnQiLCJnZXRTZWN0aW9ucyIsInRpdGxlIiwicXVlcnlTZWxlY3RvciIsImlubmVyVGV4dCIsInNlY3Rpb24iLCJnZXRTZWN0aW9uVHlwZSIsImdldExpc3RDb250ZW50IiwiaXRlbXMiLCJhcnIiLCJpdGVtIiwib2Zmc2V0UGFyZW50IiwidGV4dCIsImdldElucHV0IiwicHVzaCIsInByZWZpeCIsImpvaW4iLCJub2RlIiwic2VsZWN0IiwidGV4dGFyZWEiLCJnZXRVcmwiLCJnZXREYXRlIiwiZ2V0UmFkaW8iLCJnZXRDaGVja2JveCIsImdldFNlbGVjdCIsImdldFRleHRhcmVhIiwiZ2V0VGV4dCIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4Iiwic3VmZml4IiwidXJsIiwibmFtZSIsInN0ciIsImlubmVySFRNTCIsInJlcGxhY2VJbWciLCJzdHJpcFRhZ3MiLCJ0cmltIiwicmVwbGFjZSIsIm5ld1N0ciIsIm1hdGNoIiwicDEiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJzZXRBdHRyaWJ1dGUiLCJwb3NpdGlvbiIsImxlZnQiLCJhcHBlbmRDaGlsZCIsImV4ZWNDb21tYW5kIiwiY29uc29sZSIsImxvZyIsImNoZWNrbGlzdCIsImluaXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGTUEsUzs7O0FBQ0osdUJBQWM7QUFBQTs7QUFDWixTQUFLQyxHQUFM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Q0FTLFFBQUUsQ0FBQ0ksWUFBSCxDQUFnQixVQUFoQixFQUE0QixFQUE1QjtBQUNBSixRQUFFLENBQUNwRCxLQUFILEdBQVc7QUFBRXlELGdCQUFRLEVBQUUsVUFBWjtBQUF3QkMsWUFBSSxFQUFFO0FBQTlCLE9BQVg7QUFDQW5HLGNBQVEsQ0FBQ3FCLElBQVQsQ0FBYytFLFdBQWQsQ0FBMEJQLEVBQTFCO0FBQ0FBLFFBQUUsQ0FBQ3ZCLE1BQUg7QUFDQXRFLGNBQVEsQ0FBQ3FHLFdBQVQsQ0FBcUIsTUFBckI7QUFDQXJHLGNBQVEsQ0FBQ3FCLElBQVQsQ0FBYzJFLFdBQWQsQ0FBMEJILEVBQTFCO0FBQ0FTLGFBQU8sQ0FBQ0MsR0FBUixDQUFZbkIsR0FBWjtBQUNEOzs7Ozs7QUFHSCxJQUFJb0IsU0FBUyxHQUFHLElBQUkzRyxTQUFKLEVBQWhCO0FBQ0EyRyxTQUFTLENBQUNDLElBQVYsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9hcHAuanNcIik7XG4iLCJjbGFzcyBDaGVja2xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbSA9IHtcbiAgICAgIGNiUm9sZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNldC1yb2xlJyksXG4gICAgICBhcnRpY2xlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWppcmEnKSxcbiAgICAgIHNlY3Rpb25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbicpLFxuICAgICAgdG9nZ2xlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9nZ2xlLXJlZl0nKSxcbiAgICAgIHRvZ2dsZXNUOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2dnbGUtcmVmc10nKSxcbiAgICAgIHN1Ym1pdDogZG9jdW1lbnQuZm9ybXMuamlyYS5zdWJtaXQsXG4gICAgICBvdXRwdXQ6IGRvY3VtZW50LmZvcm1zLmppcmEub3V0cHV0XG4gICAgfTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH1cblxuICBiaW5kRXZlbnRzKCkge1xuICAgIHRoaXMuZG9tLmNiUm9sZS5mb3JFYWNoKGNiUm9sZSA9PiB7XG4gICAgICBjYlJvbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB0aGlzLnNldFJvbGUoZSkpO1xuICAgIH0pO1xuICAgIHRoaXMuZG9tLnRvZ2dsZXMuZm9yRWFjaCh0b2dnbGUgPT4gdGhpcy5pbml0VG9nZ2xlKHRvZ2dsZSkpO1xuICAgIHRoaXMuZG9tLnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5zZXRKaXJhKGUpKTtcbiAgfVxuXG4gIHNldFJvbGUoZSkge1xuICAgIGxldCByb2xlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXJvbGUnKTtcblxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShgc2hvdy0ke3JvbGV9YCwgZS50YXJnZXQuY2hlY2tlZCk7XG4gIH1cblxuICBnZXROb2RlKHNlbGVjdG9yKSB7XG4gICAgaWYgKHNlbGVjdG9yLnN0YXJ0c1dpdGgoJy4nKSB8fCBzZWxlY3Rvci5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5mb3Jtcy5qaXJhLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZm9ybXMuamlyYVtzZWxlY3Rvcl07XG4gICAgfVxuICB9XG5cbiAgaW5pdFRvZ2dsZSh0b2dnbGUpIHtcbiAgICBsZXQgaW5wdXROYW1lID0gdG9nZ2xlLmdldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUtcmVmJyk7XG4gICAgbGV0IGlucHV0cyA9IHRoaXMuZ2V0Tm9kZShpbnB1dE5hbWUpO1xuICAgIGxldCBpc0FyciA9IGlucHV0cy5sZW5ndGg7XG4gICAgaWYgKCFpc0FycikgaW5wdXRzID0gW2lucHV0c107XG4gICAgbGV0IHR5cGUgPSBpbnB1dHNbMF0udHlwZTtcblxuICAgIGlmICh0eXBlID09PSAncmFkaW8nKSB7XG4gICAgICBsZXQgdmFsdWUgPSB0b2dnbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZS12aXNpYmxlJyk7XG5cbiAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCd8fCcpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGlucHV0cy5sZW5ndGg7IHgrKykge1xuICAgICAgICBsZXQgaW5wdXQgPSBpbnB1dHNbeF07XG5cbiAgICAgICAgdGhpcy5zZXRUb2dnbGVSYWRpbyh0b2dnbGUsIGlucHV0LCB2YWx1ZSk7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+XG4gICAgICAgICAgdGhpcy5zZXRUb2dnbGVSYWRpbyh0b2dnbGUsIGlucHV0LCB2YWx1ZSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIGxldCBtaW4gPSB0b2dnbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZS1taW4nKTtcblxuICAgICAgaWYgKG1pbiAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFRvZ2dsZU1pbkNoZWNrYm94KHRvZ2dsZSwgaW5wdXRzLCBtaW4pO1xuXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaW5wdXRzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgbGV0IGlucHV0ID0gaW5wdXRzW3hdO1xuICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+XG4gICAgICAgICAgICB0aGlzLnNldFRvZ2dsZU1pbkNoZWNrYm94KHRvZ2dsZSwgaW5wdXRzLCBtaW4pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpbnB1dHMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICBsZXQgaW5wdXQgPSBpbnB1dHNbeF07XG5cbiAgICAgICAgICB0aGlzLnNldFRvZ2dsZUNoZWNrYm94KHRvZ2dsZSwgaW5wdXQpO1xuICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+XG4gICAgICAgICAgICB0aGlzLnNldFRvZ2dsZUNoZWNrYm94KHRvZ2dsZSwgaW5wdXQpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFRvZ2dsZVJhZGlvKHRvZ2dsZSwgaW5wdXQsIHZhbHVlKSB7XG4gICAgaWYgKGlucHV0LmNoZWNrZWQgJiYgdmFsdWUuaW5kZXhPZihpbnB1dC52YWx1ZSkgIT09IC0xKSB7XG4gICAgICB0b2dnbGUuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2pzLWRvbnQtb3V0cHV0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZ2dsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ2pzLWRvbnQtb3V0cHV0Jyk7XG4gICAgfVxuICB9XG5cbiAgc2V0VG9nZ2xlTWluQ2hlY2tib3godG9nZ2xlLCBpbnB1dHMsIG1pbikge1xuICAgIGxldCBuYnJDaGVja2VkID0gMDtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgaW5wdXRzLmxlbmd0aDsgeCsrKSB7XG4gICAgICBpZiAoaW5wdXRzW3hdLmNoZWNrZWQpIG5ickNoZWNrZWQrKztcbiAgICB9XG5cbiAgICBpZiAobmJyQ2hlY2tlZCA+PSBwYXJzZUludChtaW4pKSB7XG4gICAgICB0b2dnbGUuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2pzLWRvbnQtb3V0cHV0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZ2dsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ2pzLWRvbnQtb3V0cHV0Jyk7XG4gICAgfVxuICB9XG5cbiAgc2V0VG9nZ2xlQ2hlY2tib3godG9nZ2xlLCBpbnB1dCkge1xuICAgIGlmIChpbnB1dC5jaGVja2VkKSB7XG4gICAgICB0b2dnbGUuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2pzLWRvbnQtb3V0cHV0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZ2dsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ2pzLWRvbnQtb3V0cHV0Jyk7XG4gICAgfVxuICB9XG5cbiAgc2V0SmlyYShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBodG1sID0gdGhpcy5nZXRBcnRpY2xlcygpO1xuICAgIHRoaXMuY29weVN0cmluZ1RvQ2xpcGJvYXJkKGh0bWwpO1xuICAgIHRoaXMuZG9tLm91dHB1dC52YWx1ZSA9IGh0bWw7XG4gIH1cblxuICBnZXRBcnRpY2xlcygpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmRvbS5hcnRpY2xlcy5sZW5ndGg7IHgrKykge1xuICAgICAgbGV0IGFydGljbGUgPSB0aGlzLmRvbS5hcnRpY2xlc1t4XTtcbiAgICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRTZWN0aW9ucyhhcnRpY2xlKTtcblxuICAgICAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IGFydGljbGUucXVlcnlTZWxlY3RvcignaDInKS5pbm5lclRleHQ7XG4gICAgICAgIGh0bWwgKz0gYGgyLiAke3RpdGxlfVxcbmA7XG4gICAgICAgIGh0bWwgKz0gY29udGVudDtcbiAgICAgICAgaHRtbCArPSAnXFxuLS0tLSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRTZWN0aW9ucyhhcnRpY2xlKSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBsZXQgc2VjdGlvbnMgPSBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWN0aW9uJyk7XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNlY3Rpb25zLmxlbmd0aDsgeCsrKSB7XG4gICAgICBsZXQgc2VjdGlvbiA9IHNlY3Rpb25zW3hdO1xuICAgICAgbGV0IHR5cGUgPSB0aGlzLmdldFNlY3Rpb25UeXBlKHNlY3Rpb24pO1xuICAgICAgbGV0IGNvbnRlbnQgPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09ICd1bCcgfHwgdHlwZSA9PT0gJ29sJykge1xuICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRMaXN0Q29udGVudChzZWN0aW9uLCB0eXBlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcignaDMnKS5pbm5lclRleHQ7XG4gICAgICAgIGlmICh0aXRsZSAhPT0gJycpIHtcbiAgICAgICAgICBodG1sICs9IGBoMy4gJHt0aXRsZX1cXG5gO1xuICAgICAgICB9XG4gICAgICAgIGh0bWwgKz0gYCR7Y29udGVudH1cXG5cXG5gO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0U2VjdGlvblR5cGUoc2VjdGlvbikge1xuICAgIGxldCB0eXBlID0gJ3RleHQnO1xuXG4gICAgaWYgKHNlY3Rpb24ucXVlcnlTZWxlY3Rvcignb2wnKSkge1xuICAgICAgdHlwZSA9ICdvbCc7XG4gICAgfSBlbHNlIGlmIChzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJ3VsJykpIHtcbiAgICAgIHR5cGUgPSAndWwnO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0TGlzdENvbnRlbnQoc2VjdGlvbiwgdHlwZSkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgbGV0IGl0ZW1zID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICAgIGxldCBhcnIgPSBbXTtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlbXMubGVuZ3RoOyB4KyspIHtcbiAgICAgIGxldCBpdGVtID0gaXRlbXNbeF07XG5cbiAgICAgIGlmIChpdGVtLm9mZnNldFBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICAvLyBMJ8OpbMOpbWVudCBlc3QgdmlzaWJsZVxuICAgICAgICBsZXQgdGV4dCA9IHRoaXMuZ2V0SW5wdXQoaXRlbSk7XG4gICAgICAgIGlmICh0ZXh0ICE9PSAnJykge1xuICAgICAgICAgIGFyci5wdXNoKHRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFyci5sZW5ndGggPiAxKSB7XG4gICAgICBsZXQgcHJlZml4ID0gdHlwZSA9PT0gJ3VsJyA/ICcqJyA6ICcjJztcbiAgICAgIGh0bWwgPSBwcmVmaXggKyAnICcgKyBhcnIuam9pbihgXFxuJHtwcmVmaXh9IGApO1xuICAgIH0gZWxzZSBpZiAoYXJyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgaHRtbCA9IGFyclswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldElucHV0KG5vZGUpIHtcbiAgICBsZXQgaW5wdXQgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgbGV0IHNlbGVjdCA9IG5vZGUucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgbGV0IHRleHRhcmVhID0gbm9kZS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xuICAgIGxldCBodG1sID0gJyc7XG5cbiAgICBpZiAoaW5wdXQgIT09IG51bGwpIHtcbiAgICAgIHN3aXRjaCAoaW5wdXQudHlwZSkge1xuICAgICAgICBjYXNlICd1cmwnOlxuICAgICAgICAgIGh0bWwgPSB0aGlzLmdldFVybChub2RlLCBpbnB1dCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgIGh0bWwgPSB0aGlzLmdldERhdGUobm9kZSwgaW5wdXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgaHRtbCA9IHRoaXMuZ2V0UmFkaW8obm9kZSwgaW5wdXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgaHRtbCA9IHRoaXMuZ2V0Q2hlY2tib3gobm9kZSwgaW5wdXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ICE9PSBudWxsKSB7XG4gICAgICBodG1sID0gdGhpcy5nZXRTZWxlY3Qobm9kZSwgc2VsZWN0KTtcbiAgICB9IGVsc2UgaWYgKHRleHRhcmVhICE9PSBudWxsKSB7XG4gICAgICBodG1sID0gdGhpcy5nZXRUZXh0YXJlYShub2RlLCB0ZXh0YXJlYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRUZXh0YXJlYShub2RlLCB0ZXh0YXJlYSkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgaWYgKHRleHRhcmVhLnZhbHVlICE9PSAnJykge1xuICAgICAgbGV0IHByZWZpeCA9IHRoaXMuZ2V0VGV4dChub2RlKTtcbiAgICAgIGlmIChwcmVmaXggIT09ICcnKSBwcmVmaXggKz0gJzogJztcbiAgICAgIGh0bWwgPSBgJHtwcmVmaXh9JHt0ZXh0YXJlYS52YWx1ZX1gO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFNlbGVjdChub2RlLCBzZWxlY3QpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGlmIChzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWUgIT09ICcnKSB7XG4gICAgICBodG1sID0gYCR7dGhpcy5nZXRUZXh0KG5vZGUpfSAke1xuICAgICAgICBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dFxuICAgICAgfWA7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0RGF0ZShub2RlLCBpbnB1dCkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgaWYgKGlucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgbGV0IHN1ZmZpeCA9IHRoaXMuZ2V0VGV4dChub2RlKTtcbiAgICAgIGlmIChzdWZmaXggIT09ICcnKSBzdWZmaXggPSBgOiAke3N1ZmZpeH1gO1xuICAgICAgaHRtbCA9IGAqJHtpbnB1dC52YWx1ZX0qJHtzdWZmaXh9YDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRVcmwobm9kZSwgaW5wdXQpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGxldCB1cmwgPSBpbnB1dC52YWx1ZTtcbiAgICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgIHVybCA9IGBbJHt1cmx9XWA7XG4gICAgICB9XG5cbiAgICAgIGh0bWwgPSBgKiR7dGhpcy5nZXRUZXh0KG5vZGUpfSo6ICR7dXJsfWA7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0UmFkaW8obm9kZSwgaW5wdXQpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGxldCBuYW1lID0gaW5wdXQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgbGV0IHZhbHVlID0gZG9jdW1lbnQuZm9ybXMuamlyYVtuYW1lXS52YWx1ZTtcbiAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICBsZXQgcHJlZml4ID0gdGhpcy5nZXRUZXh0KG5vZGUpO1xuICAgICAgaWYgKHByZWZpeCAhPT0gJycpIHByZWZpeCArPSAnOiAnO1xuICAgICAgaHRtbCA9IGAke3ByZWZpeH0qJHt2YWx1ZX0qYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRDaGVja2JveChub2RlLCBpbnB1dCkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgaWYgKGlucHV0LmNoZWNrZWQpIHtcbiAgICAgIGh0bWwgPSB0aGlzLmdldFRleHQobm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0VGV4dChub2RlKSB7XG4gICAgbGV0IHN0ciA9IG5vZGUuaW5uZXJIVE1MO1xuICAgIHN0ciA9IHRoaXMucmVwbGFjZUltZyhzdHIpO1xuICAgIHN0ciA9IHRoaXMuc3RyaXBUYWdzKHN0cik7XG4gICAgc3RyID0gc3RyLnRyaW0oKTsgLy8gcmVtb3ZlIHN0YXJ0IGFuZCBlbmQgd2hpdGVzcGFjZXM7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1xccj9cXG58XFxyL2csICcnKTsgLy8gc3RyaXAgbGluZWJyZWFrcztcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvICsoPz0gKS9nLCAnJyk7IC8vIHN0cmlwIG11bHRpcGxlIHdoaXRlIHNwYWNlcztcblxuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICByZXBsYWNlSW1nKHN0cikge1xuICAgIGxldCBuZXdTdHIgPSBzdHIucmVwbGFjZShcbiAgICAgIC88aW1nIHNyY1xccyo9XFxzKlsnXFxcIl0oW14nXFxcIl0qPylbJ1xcXCJdW14+XSo/Pi9nLFxuICAgICAgZnVuY3Rpb24obWF0Y2gsIHAxKSB7XG4gICAgICAgIHJldHVybiBgISR7cDF9IWA7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiBuZXdTdHI7XG4gIH1cblxuICBzdHJpcFRhZ3Moc3RyKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuaW5uZXJIVE1MID0gc3RyO1xuICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1kb250LW91dHB1dCcpLmZvckVhY2goZSA9PlxuICAgICAgZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpXG4gICAgKTtcbiAgICBzdHIgPSBlbC5pbm5lclRleHQ7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIGNvcHlTdHJpbmdUb0NsaXBib2FyZChzdHIpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGVsLnZhbHVlID0gc3RyO1xuICAgIGVsLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG4gICAgZWwuc3R5bGUgPSB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnLTk5OTlweCcgfTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgICBlbC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIGNvbnNvbGUubG9nKHN0cik7XG4gIH1cbn1cblxubGV0IGNoZWNrbGlzdCA9IG5ldyBDaGVja2xpc3QoKTtcbmNoZWNrbGlzdC5pbml0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9