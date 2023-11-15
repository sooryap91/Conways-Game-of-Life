function cellNeighbors(x, y) {
    const neighbors = [];
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        if (dx !== 0 || dy !== 0) {
          neighbors.push([x + dx, y + dy]);
        }
      }
    }
    return neighbors;

  }
   module.exports={cellNeighbors};

    
     
    
    
    
  