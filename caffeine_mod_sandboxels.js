if (typeof elements === "undefined") var elements = {}; // Ensure elements object exists

// Define pure caffeine powder
elements.pure_caffeine = {
    color: "#c69c6d",
    behavior: behaviors.POWDER, // Falls like a powder
    category: "powders",
    state: "solid",
    density: 1230,
    tempHigh: 178,
    stateHigh: "pure_caffeine_liquid",
    reactions: {
        "water": { elem1: "pure_caffeine_solution" },
        "fire": { elem1: "pure_caffeine_gas" }
    }
};

// Define pure caffeine liquid
elements.pure_caffeine_liquid = {
    color: "#8b5a2b",
    behavior: behaviors.LIQUID, // Behaves like a liquid
    viscosity: 50,
    category: "liquids",
    state: "liquid",
    density: 1100,
    tempHigh: 238,
    stateHigh: "pure_caffeine_gas",
    tempLow: 160,
    stateLow: "pure_caffeine",
    reactions: {
        "water": { elem1: "pure_caffeine_solution" },
        "human": {
            func: function(pixel) {
                if (pixel && typeof pixel.energy !== "undefined") {
                    pixel.energy = Math.min(pixel.energy + 10, 100);
                }
            }
        }
    }
};

// Define pure caffeine gas
elements.pure_caffeine_gas = {
    color: "#f5e1c4",
    behavior: [
        "M1", "M1", "M1",
        "M1", "XX", "M1",
        "M1", "M1", "M1"
    ], // Expands like a gas
    category: "gases",
    state: "gas",
    density: 0.8,
    tempLow: 230,
    stateLow: "pure_caffeine_liquid",
    reactions: {
        "human": {
            func: function(pixel) {
                if (pixel && typeof pixel.energy !== "undefined") {
                    pixel.energy = Math.min(pixel.energy + 2, 100);
                }
            }
        }
    }
};

// Define pure caffeine solution
elements.pure_caffeine_solution = {
    color: "#b08968",
    behavior: behaviors.LIQUID, // Behaves like a liquid
    viscosity: 15,
    category: "liquids",
    state: "liquid",
    density: 1005,
    reactions: {
        "human": {
            func: function(pixel) {
                if (pixel && typeof pixel.energy !== "undefined") {
                    pixel.energy = Math.min(pixel.energy + 15, 100);
                }
            }
        }
    }
};