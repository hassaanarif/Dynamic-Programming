function HtmlElement() {
  this.click = function () {
    console.log("Click");
  };

  HtmlElement.prototype.focus = function () {
    console.log("Focus");
  };
}

function HtmlSelectElement(items = []) {
  HtmlElement.call(this);

  this.items = items;

  this.select = function () {
    console.log("Select");
  };

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    let indexOfItem = this.items.indexOf(item);
    this.items.splice(indexOfItem, 1);
  };

  this.render = function (items = []) {
    items.map((item) => {
      console.log(`<options> ${item} </options>`);
    });
  };
}

HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

let htmlElement = new HtmlElement();
let htmlSelectElement = new HtmlSelectElement();

htmlElement.click();
htmlElement.focus();

htmlSelectElement.select();
htmlSelectElement.focus();
htmlSelectElement.click();
htmlSelectElement.render([1, 2, 3, 4]);
