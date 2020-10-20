class Grid {
  constructor(rows, column, height, width) {
    this.rows = rows;
    this.width = width;
    this.column = column;
    this.height = height;
  };
  showRows() {
   return `rows:${this.rows}`; 
  };
  showWidth() {
   return `width:${this.width}`;
  };
  showColumn() {
   return `column:${this.column}`;
  };
  showHeight() {
   return `height:${this.height}`;
  };
  showTable() {
   return `column:${this.column}, rows:${this.rows}, 
    height:${this.height}, width:${this.width}`;
  };
};

class NewTable extends Grid {
  constructor(rows, column, height, width, name) {
    super(rows, column, height, width);
    this.name = name;
  };

  showTable() {
    return `column:${this.column}, rows:${this.rows}, 
      height:${this.height}, width:${this.width}, name:${this.name}`
  }; 
  createRow() {
    this.column = Object.values(this)
      return this.column; 
  }; 
  sumRowsColumn() {
    return this.rows+this.column;
  }; 
  square() {
    return this.width*this.rows;
  };
};

class OrderTable extends Grid {
  constructor(rows, column, height, width, user, things, isChanged) {
    super(rows, column, height, width);
    this.user = user;
    this.things = things;
    this.isChanged = isChanged;
  }
  showTable() {
    if (this.column=3) {
      return `column:${this.column},rows: ${this.rows},
        things:${this.things},isChanged: ${this.isChanged},
          user:${this.user}`;
            } else return;
  };
  changeEnable() {
    this.isChanged = true;
     return this.isChanged;
  };
  changeDisable() {
    this.isChanged = false;
    return this.isChanged;
  };
  showRow() {
    return `user:${this.user},things:${this.things},
      isChanged:${this.isChanged}`;
  };
  
};