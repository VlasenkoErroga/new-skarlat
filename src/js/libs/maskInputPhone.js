
  
  export function InputMask(options) {
      this.el = options.selector;
      if (!this.el) return console.log('Что-то не так с селектором');
      this.layout = options.layout || '+__ (___) ___-__-__';
      this.maskreg = this.getRegexp();
  
      this.setListeners();
  }
  
  InputMask.prototype.getRegexp = function() {
      let str = this.layout.replace(/_/g, '\\d')
          str = str.replace(/\(/g, '\\(')
          str = str.replace(/\)/g, '\\)')
          str = str.replace(/\+/g, '\\+')
          str = str.replace(/\s/g, '\\s')
      return str;
  }
  
  InputMask.prototype.mask = function(e) {
      let _this = e.target,
          matrix = this.layout,
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = _this.value.replace(/\D/g, "");

          console.log(def, val)
  
      if (def.length >= val.length) val = def;
  
      _this.value = matrix.replace(/./g, function(a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });
  
      if (e.type == "blur") {
          let regexp = new RegExp(this.maskreg);
          if (!regexp.test(_this.value)) _this.value = "";
      } else {
          this.setCursorPosition(_this.value.length, _this);
      }
  }
  
  InputMask.prototype.setCursorPosition = function(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
      else if (elem.createTextRange) {
          let range = elem.createTextRange();
          range.collapse(true);
          range.moveEnd("character", pos);
          range.moveStart("character", pos);
          range.select()
      }
  }
  
  InputMask.prototype.setListeners = function() {
      this.el.addEventListener("input", this.mask.bind(this), false);
      this.el.addEventListener("focus", this.mask.bind(this), false);
      this.el.addEventListener("blur", this.mask.bind(this), false);
  }
  