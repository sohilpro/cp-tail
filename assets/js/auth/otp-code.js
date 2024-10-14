"use strict";
var VanillaOTP = function (t, e = null) {
  if (((this.emptyChar = " "), "string" == typeof t))
    this.container = document.querySelector(t);
  else {
    if (!(t instanceof Element)) return;
    this.container = t;
  }
  e &&
    ("string" == typeof e
      ? (this.updateTo = document.querySelector(e) || null)
      : e instanceof Element
      ? (this.updateTo = e)
      : (this.updateTo = null)),
    (this.inputs = Array.from(
      this.container.querySelectorAll(
        "input[type=text], input[type=number], input[type=password]"
      )
    ));
  let n = this,
    u = n.inputs.length;
  for (let i = 0; i < u; i++) {
    let l = n.inputs[i];
    l.addEventListener("input", function () {
      if (isNaN(l.value))
        return (l.value = l.dataset.otpInputRestore || ""), n._updateValue();
      if (0 == l.value.length) return n._saveInputValue(i);
      if (1 == l.value.length) {
        n._saveInputValue(i),
          n._updateValue(),
          i + 1 < u && n.inputs[i + 1].focus();
        return;
      }
      if (i == u - 1) return n._setInputValue(i, l.value);
      let t = l.value.split("");
      for (let e = 0; e < t.length && !(e + i >= u); e++)
        n._setInputValue(e + i, t[e]);
      let a = Math.min(u - 1, i + t.length);
      n.inputs[a].focus();
    }),
      l.addEventListener("keydown", function (t) {
        if (8 == t.keyCode && "" == l.value && 0 != i) {
          n._setInputValue(i - 1, ""), n.inputs[i - 1].focus();
          return;
        }
        if (46 == t.keyCode && i != u - 1) {
          let e = l.selectionStart || 0;
          for (let a = i + e; a < u - 1; a++)
            n._setInputValue(a, n.inputs[a + 1].value);
          n._setInputValue(u - 1, ""),
            l.selectionStart && (l.selectionStart = e),
            t.preventDefault();
          return;
        }
        if (
          37 == t.keyCode &&
          (null == l.selectionStart || 0 == l.selectionStart)
        ) {
          i > 0 &&
            (t.preventDefault(),
            n.inputs[i - 1].focus(),
            n.inputs[i - 1].select());
          return;
        }
        if (
          39 == t.keyCode &&
          (null == l.selectionStart || l.selectionEnd == l.value.length)
        ) {
          i + 1 < u &&
            (t.preventDefault(),
            n.inputs[i + 1].focus(),
            n.inputs[i + 1].select());
          return;
        }
      });
  }
};
(VanillaOTP.prototype.setEmptyChar = function (t) {
  this.emptyChar = t;
}),
  (VanillaOTP.prototype.getValue = function () {
    let t = "",
      e = this;
    return (
      this.inputs.forEach(function (n) {
        t += "" == n.value ? e.emptyChar : n.value;
      }),
      t
    );
  }),
  (VanillaOTP.prototype.setValue = function (t) {
    if (isNaN(t)) {
      console.error("Please enter an integer value.");
      return;
    }
    let e = (t = "" + t).split("");
    for (let n = 0; n < this.inputs.length; n++)
      this._setInputValue(n, e[n] || "");
  }),
  (VanillaOTP.prototype._setInputValue = function (t, e) {
    return isNaN(e)
      ? console.error("Please enter an integer value.")
      : this.inputs[t]
      ? void ((this.inputs[t].value = String(e).substring(0, 1)),
        this._saveInputValue(t),
        this._updateValue())
      : console.error("Index not found.");
  }),
  (VanillaOTP.prototype._saveInputValue = function (t, e) {
    if (!this.inputs[t]) return console.error("Index not found.");
    this.inputs[t].dataset.otpInputRestore = e || this.inputs[t].value;
  }),
  (VanillaOTP.prototype._updateValue = function () {
    this.updateTo && (this.updateTo.value = this.getValue());
  });

export default VanillaOTP;
