class AllShapes {
    constructor(color, text) {
        this.color = color;
        this.text = text;
    }

    render() { 
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="" height="" fill="${this.color}" />
            <text x="150" y="200" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
        </svg>
        `;
    }
}

class Rectangle extends AllShapes {
    constructor(width, height, color, text) {
        super(color, text);
        this.width = width;
        this.height = height;
    }

    render() { 
        return `
        <svg version="1.1" width="400" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="${this.width}" height="${this.height}" fill="${this.color}" />
            <text x="150" y="200" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
        </svg>
        `;
    }
}

class Square extends AllShapes { 
    constructor(side, color, text) {
        super(color, text);
        this.side = side;
    }

    render() { 
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="${this.side}" height="${this.side}" fill="${this.color}" />
            <text x="150" y="200" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
        </svg>
        `;
    }
}

class Circle extends AllShapes {
    constructor(radius, color, text) {
        super(color, text);
        this.radius = radius;
    }

    render() { 
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
            </svg>
            `;
    }

}

module.exports = { Rectangle, Circle, Square, AllShapes };