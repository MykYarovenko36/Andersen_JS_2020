function Grid(rows, column, height, width) {
  this.rows = rows;
  this.width = width;
  this.column = column;
  this.height = height;
};
Grid.prototype.ShowRows = function() {
  return `rows:${this.rows}`;
};
Grid.prototype.ShowWidth = function() {
  return `width:${this.width}`;
};
Grid.prototype.ShowColumn = function() {
  return `column:${this.column}`;
};
Grid.prototype.ShowHeight = function() {
  return `height:${this.height}`;
};
Grid.prototype.ShowTable = function() {
  return `column = ${this.column}, rows = ${this.rows}, 
    height = ${this.height}, width=${this.width}`;
};

function NewTable (rows, column, height, width, name){
  this.rows = rows;
  this.width = width;
  this.column = column;
  this.height = height;
  this.name = name;
};

NewTable.prototype = Object.create(Grid.prototype);
NewTable.prototype.ShowTable = function() {
  return Grid.prototype.ShowTable.apply(this)
    + `, name=${this.name}`;
};
NewTable.prototype.CreateRow = function() {
  this.column = Object.values(this)
    return this.column; 
};
NewTable.prototype.SumRowsColumn = function(rows, sum) {
  return this.rows + this.column;
};
NewTable.prototype.Square = function(width, rows) {
  return this.width*this.rows;
};


function OrderTable(user, things) {
  this.user = user; 
  this.things = things;
  this.isChanged = true;
  this.column = 3;
};
OrderTable.prototype = Object.create(Grid.prototype);
OrderTable.prototype.ChangeEnable = function() {
  this.isChanged = true;
    return this.isChanged;
};
OrderTable.prototype.ChangeDisable = function() {
  this.isChanged = false;
    return this.isChanged;
};
OrderTable.prototype.ShowRow = function() {
  return `user:${this.user},things:${this.things},
    isChanged:${this.isChanged}`;
};
OrderTable.prototype.ShowTable = function() {
  return `column:${this.column},things:${this.things},
    isChanged: ${this.isChanged},user:${this.user} `;
};
