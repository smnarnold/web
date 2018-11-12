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
      submit: document.forms.jira.submit
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
    key: "setJira",
    value: function setJira(e) {
      e.preventDefault();
      var html = this.getArticles();
      this.copyStringToClipboard(html);
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
        var text = this.getInput(item);

        if (text !== '') {
          arr.push(text);
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
      var html = '';

      if (input !== null) {
        switch (input.type) {
          case 'date':
            html = this.getDate(node, input);
            break;

          case 'checkbox':
            html = this.getCheckbox(node, input);
            break;
        }
      } else if (select !== null) {
        html = this.getSelect(node, select);
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
        html = "*".concat(input.value, "*: ").concat(this.getText(node));
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
      el.querySelectorAll('.js-dont-render-in-jira').forEach(function (e) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJDaGVja2xpc3QiLCJkb20iLCJjYlJvbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhcnRpY2xlcyIsInNlY3Rpb25zIiwic3VibWl0IiwiZm9ybXMiLCJqaXJhIiwiYmluZEV2ZW50cyIsImZvckVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNldFJvbGUiLCJzZXRKaXJhIiwicm9sZSIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImJvZHkiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjaGVja2VkIiwicHJldmVudERlZmF1bHQiLCJodG1sIiwiZ2V0QXJ0aWNsZXMiLCJjb3B5U3RyaW5nVG9DbGlwYm9hcmQiLCJ4IiwibGVuZ3RoIiwiYXJ0aWNsZSIsImNvbnRlbnQiLCJnZXRTZWN0aW9ucyIsInRpdGxlIiwicXVlcnlTZWxlY3RvciIsImlubmVyVGV4dCIsInNlY3Rpb24iLCJ0eXBlIiwiZ2V0U2VjdGlvblR5cGUiLCJnZXRMaXN0Q29udGVudCIsIml0ZW1zIiwiYXJyIiwiaXRlbSIsInRleHQiLCJnZXRJbnB1dCIsInB1c2giLCJwcmVmaXgiLCJqb2luIiwibm9kZSIsImlucHV0Iiwic2VsZWN0IiwiZ2V0RGF0ZSIsImdldENoZWNrYm94IiwiZ2V0U2VsZWN0Iiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJ2YWx1ZSIsImdldFRleHQiLCJzdHIiLCJpbm5lckhUTUwiLCJyZXBsYWNlSW1nIiwic3RyaXBUYWdzIiwicmVwbGFjZSIsIm5ld1N0ciIsIm1hdGNoIiwicDEiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsImFwcGVuZENoaWxkIiwiZXhlY0NvbW1hbmQiLCJjb25zb2xlIiwibG9n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Ozs7MENBRXFCQSxHLEVBQUs7QUFDekIsVUFBSVEsRUFBRSxHQUFHOUQsUUFBUSxDQUFDK0QsYUFBVCxDQUF1QixVQUF2QixDQUFUO0FBQ0FELFFBQUUsQ0FBQ1YsS0FBSCxHQUFXRSxHQUFYO0FBQ0FRLFFBQUUsQ0FBQ0ksWUFBSCxDQUFnQixVQUFoQixFQUE0QixFQUE1QjtBQUNBSixRQUFFLENBQUNLLEtBQUgsR0FBVztBQUFFQyxnQkFBUSxFQUFFLFVBQVo7QUFBd0JDLFlBQUksRUFBRTtBQUE5QixPQUFYO0FBQ0FyRSxjQUFRLENBQUNnQixJQUFULENBQWNzRCxXQUFkLENBQTBCUixFQUExQjtBQUNBQSxRQUFFLENBQUNoQixNQUFIO0FBQ0E5QyxjQUFRLENBQUN1RSxXQUFULENBQXFCLE1BQXJCO0FBQ0F2RSxjQUFRLENBQUNnQixJQUFULENBQWNpRCxXQUFkLENBQTBCSCxFQUExQjtBQUNBVSxhQUFPLENBQUNDLEdBQVIsQ0FBWW5CLEdBQVo7QUFDRDs7Ozs7O0FBR0gsSUFBSW9CLFNBQVMsR0FBRyxJQUFJN0UsU0FBSixFQUFoQjtBQUNBNkUsU0FBUyxDQUFDQyxJQUFWLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYXBwLmpzXCIpO1xuIiwiY2xhc3MgQ2hlY2tsaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb20gPSB7XG4gICAgICBjYlJvbGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zZXQtcm9sZScpLFxuICAgICAgYXJ0aWNsZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1qaXJhJyksXG4gICAgICBzZWN0aW9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24nKSxcbiAgICAgIHN1Ym1pdDogZG9jdW1lbnQuZm9ybXMuamlyYS5zdWJtaXRcbiAgICB9O1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgfVxuXG4gIGJpbmRFdmVudHMoKSB7XG4gICAgdGhpcy5kb20uY2JSb2xlLmZvckVhY2goY2JSb2xlID0+IHtcbiAgICAgIGNiUm9sZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHRoaXMuc2V0Um9sZShlKSk7XG4gICAgfSk7XG4gICAgdGhpcy5kb20uc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLnNldEppcmEoZSkpO1xuICB9XG5cbiAgc2V0Um9sZShlKSB7XG4gICAgbGV0IHJvbGUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm9sZScpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKGBzaG93LSR7cm9sZX1gLCBlLnRhcmdldC5jaGVja2VkKTtcbiAgfVxuXG4gIHNldEppcmEoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgaHRtbCA9IHRoaXMuZ2V0QXJ0aWNsZXMoKTtcbiAgICB0aGlzLmNvcHlTdHJpbmdUb0NsaXBib2FyZChodG1sKTtcbiAgfVxuXG4gIGdldEFydGljbGVzKCkge1xuICAgIGxldCBodG1sID0gJyc7XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuZG9tLmFydGljbGVzLmxlbmd0aDsgeCsrKSB7XG4gICAgICBsZXQgYXJ0aWNsZSA9IHRoaXMuZG9tLmFydGljbGVzW3hdO1xuICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldFNlY3Rpb25zKGFydGljbGUpO1xuXG4gICAgICBpZiAoY29udGVudCAhPT0gJycpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKCdoMicpLmlubmVyVGV4dDtcbiAgICAgICAgaHRtbCArPSBgaDIuICR7dGl0bGV9XFxuYDtcbiAgICAgICAgaHRtbCArPSBjb250ZW50O1xuICAgICAgICBodG1sICs9ICdcXG4tLS0tJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFNlY3Rpb25zKGFydGljbGUpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGxldCBzZWN0aW9ucyA9IGFydGljbGUucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24nKTtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2VjdGlvbnMubGVuZ3RoOyB4KyspIHtcbiAgICAgIGxldCBzZWN0aW9uID0gc2VjdGlvbnNbeF07XG4gICAgICBsZXQgdHlwZSA9IHRoaXMuZ2V0U2VjdGlvblR5cGUoc2VjdGlvbik7XG4gICAgICBsZXQgY29udGVudCA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ3VsJyB8fCB0eXBlID09PSAnb2wnKSB7XG4gICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldExpc3RDb250ZW50KHNlY3Rpb24sIHR5cGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29udGVudCAhPT0gJycpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCdoMycpLmlubmVyVGV4dDtcbiAgICAgICAgaWYodGl0bGUgIT09ICcnKSB7XG4gICAgICAgICAgaHRtbCArPSBgaDMuICR7dGl0bGV9XFxuYDtcbiAgICAgICAgfVxuICAgICAgICBodG1sICs9IGAke2NvbnRlbnR9XFxuXFxuYDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFNlY3Rpb25UeXBlKHNlY3Rpb24pIHtcbiAgICBsZXQgdHlwZSA9ICd0ZXh0JztcblxuICAgIGlmKHNlY3Rpb24ucXVlcnlTZWxlY3Rvcignb2wnKSkge1xuICAgICAgdHlwZSA9ICdvbCc7XG4gICAgfSBlbHNlIGlmIChzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJ3VsJykpIHtcbiAgICAgIHR5cGUgPSAndWwnO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0TGlzdENvbnRlbnQoc2VjdGlvbiwgdHlwZSkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgbGV0IGl0ZW1zID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICAgIGxldCBhcnIgPSBbXTtcblxuICAgIGZvcihsZXQgeD0wOyB4PGl0ZW1zLmxlbmd0aDsgeCsrKSB7XG4gICAgICBsZXQgaXRlbSA9IGl0ZW1zW3hdO1xuICAgICAgbGV0IHRleHQgPSB0aGlzLmdldElucHV0KGl0ZW0pO1xuICAgICAgaWYgKHRleHQgIT09ICcnKSB7XG4gICAgICAgIGFyci5wdXNoKHRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFyci5sZW5ndGggPiAxKSB7XG4gICAgICBsZXQgcHJlZml4ID0gdHlwZSA9PT0gJ3VsJyA/ICcqJyA6ICcjJztcbiAgICAgIGh0bWwgPSBwcmVmaXggKyAnICcgKyBhcnIuam9pbihgXFxuJHtwcmVmaXh9IGApO1xuICAgIH0gZWxzZSBpZihhcnIubGVuZ3RoID09PSAxKSB7XG4gICAgICBodG1sID0gYXJyWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0SW5wdXQobm9kZSkge1xuICAgIGxldCBpbnB1dCA9IG5vZGUucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICBsZXQgc2VsZWN0ID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICBsZXQgaHRtbCA9ICcnO1xuXG4gICAgaWYgKGlucHV0ICE9PSBudWxsKSB7XG4gICAgICBzd2l0Y2ggKGlucHV0LnR5cGUpIHtcbiAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgaHRtbCA9IHRoaXMuZ2V0RGF0ZShub2RlLCBpbnB1dCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICBodG1sID0gdGhpcy5nZXRDaGVja2JveChub2RlLCBpbnB1dCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmKHNlbGVjdCAhPT0gbnVsbCkge1xuICAgICAgaHRtbCA9IHRoaXMuZ2V0U2VsZWN0KG5vZGUsIHNlbGVjdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRTZWxlY3Qobm9kZSwgc2VsZWN0KSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBpZiAoc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlICE9PSAnJykge1xuICAgICAgaHRtbCA9IGAke3RoaXMuZ2V0VGV4dChub2RlKX0gJHtzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dH1gO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldERhdGUobm9kZSwgaW5wdXQpIHtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGh0bWwgPSBgKiR7aW5wdXQudmFsdWV9KjogJHt0aGlzLmdldFRleHQobm9kZSl9YDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRDaGVja2JveChub2RlLCBpbnB1dCkge1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgaWYgKGlucHV0LmNoZWNrZWQpIHtcbiAgICAgIGh0bWwgPSB0aGlzLmdldFRleHQobm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0VGV4dChub2RlKSB7XG4gICAgbGV0IHN0ciA9IG5vZGUuaW5uZXJIVE1MO1xuICAgIHN0ciA9IHRoaXMucmVwbGFjZUltZyhzdHIpO1xuICAgIHN0ciA9IHRoaXMuc3RyaXBUYWdzKHN0cik7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1xccj9cXG58XFxyL2csICcnKTsgLy8gc3RyaXAgbGluZWJyZWFrcztcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvICsoPz0gKS9nLCAnJyk7IC8vIHN0cmlwIG11bHRpcGxlIHdoaXRlIHNwYWNlcztcblxuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICByZXBsYWNlSW1nKHN0cikge1xuICAgIGxldCBuZXdTdHIgPSBzdHIucmVwbGFjZSgvPGltZyBzcmNcXHMqPVxccypbJ1xcXCJdKFteJ1xcXCJdKj8pWydcXFwiXVtePl0qPz4vZywgZnVuY3Rpb24gKG1hdGNoLCBwMSkge1xuICAgICAgcmV0dXJuIGAhJHtwMX0hYDtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdTdHI7XG4gIH1cblxuICBzdHJpcFRhZ3Moc3RyKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuaW5uZXJIVE1MID0gc3RyO1xuICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1kb250LXJlbmRlci1pbi1qaXJhJykuZm9yRWFjaChlID0+IGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKSk7XG4gICAgc3RyID0gZWwuaW5uZXJUZXh0O1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBjb3B5U3RyaW5nVG9DbGlwYm9hcmQoc3RyKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBlbC52YWx1ZSA9IHN0cjtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xuICAgIGVsLnN0eWxlID0geyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogJy05OTk5cHgnIH07XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gICAgZWwuc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcbiAgICBjb25zb2xlLmxvZyhzdHIpO1xuICB9XG59XG5cbmxldCBjaGVja2xpc3QgPSBuZXcgQ2hlY2tsaXN0KCk7XG5jaGVja2xpc3QuaW5pdCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==