var salt_names = {2: "Andy", 4: "Audrey", 8: "Brandon", 16: "Christine", 32: "Daniel", 64: "Ellen", 128: "Inyoung", 256: "Jacob", 512: "Jarred", 1024: "Koichi", 2048: "Michael"};

function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;
  this.display          = salt_names[this.value];

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};
