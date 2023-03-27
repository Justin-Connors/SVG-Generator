class AllShapes {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    render() { 
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="" height="" fill="${this.color}" />
            <text x="100" y="60" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
    }
}

class Triangle extends AllShapes {
    constructor(triSize, color, text, textColor) {
        super(color, text, textColor);
        this.triSize = triSize;
    }
  
    render() {
        const centerX = 150;
        const centerY = 100; 
        const sideLength = this.triSize; 
        // Make equilateral triangle by taking in one side from the user
        const x1 = centerX - sideLength/2;
        const y1 = centerY + (Math.sqrt(3)/2) * sideLength/2;
        const x2 = centerX + sideLength/2;
        const y2 = centerY + (Math.sqrt(3)/2) * sideLength/2;
        const x3 = centerX;
        const y3 = centerY - (Math.sqrt(3)/2) * sideLength/2;
  
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${this.color}" />
                <text x="150" y="100" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>
        `;
    }
  }

class Square extends AllShapes { 
    constructor(side, color, text, textColor) {
        super(color, text, textColor);
        this.side = side;
    }

    render() { 
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="${this.side}" height="${this.side}" fill="${this.color}" />
            <text x="${this.side / 2}" y="${this.side / 2}" font-size="${this.side / 3}" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
    }
}

class Circle extends AllShapes {
    constructor(radius, color, text, textColor) {
        super(color, text, textColor);
        this.radius = radius;
    }

    render() { 
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="${this.radius}" fill="${this.color}" />
                <text x="50" y="50" font-size="${this.radius / 2}" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>
            `;
    }

}

module.exports = { Triangle, Circle, Square, AllShapes };