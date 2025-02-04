if (!elements) var elements = {}; // Ensures 'elements' exists

elements.pure_caffeine = {
    color: "#c69c6d",
    behavior: behaviors.POWDER, // Corrected behavior
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

elements.pure_caffeine_liquid = {
    color: "#8b5a2b",
    behavior: behaviors.LIQUID, // Corrected liquid behavior
    viscosity: 50, // Ensures thickness
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
                if (pixel && pixel.energy !== undefined) {
                    pixel.energy = Math.min(pixel.energy + 10, 100);
                }
            }
        }
    }
};

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
                if (pixel && pixel.energy !== undefined) {
                    pixel.energy = Math.min(pixel.energy + 2, 100);
                }
            }
        }
    }
};

elements.pure_caffeine_solution = {
    color: "#b08968",
    behavior: behaviors.LIQUID, // Flows like a liquid
    viscosity: 15,
    category: "liquids",
    state: "liquid",
    density: 1005,
    reactions: {
        "human": {
            func: function(pixel) {
                if (pixel && pixel.energy !== undefined) {
                    pixel.energy = Math.min(pixel.energy + 15, 100);
                }
            }
        }
    }
};