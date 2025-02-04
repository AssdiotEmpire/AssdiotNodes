elements.pure_caffeine = {
    color: "#c69c6d", // Light brown powder
    behavior: behaviors.POWDER, // Falls like a powder
    category: "powders",
    state: "solid",
    density: 1230, // Pure caffeine powder density
    tempHigh: 178, // Melts at 178°C
    stateHigh: "pure_caffeine_liquid", // Becomes liquid caffeine
    reactions: {
        "water": { elem1: "pure_caffeine_solution" }, // Dissolves in water
        "fire": { elem1: "pure_caffeine_gas" } // Turns into gas when burned
    }
};

elements.pure_caffeine_liquid = {
    color: "#8b5a2b", // Dark brown liquid
    behavior: behaviors.LIQUID, // Behaves as a liquid
    viscosity: 50, // Moderately viscous
    category: "liquids",
    state: "liquid",
    density: 1100, // Slightly denser than water
    tempHigh: 238, // Boils at 238°C
    stateHigh: "pure_caffeine_gas",
    tempLow: 160, // Freezes back to solid
    stateLow: "pure_caffeine",
    reactions: {
        "water": { elem1: "pure_caffeine_solution" },
        "human": { func: function(pixel) { if (pixel) pixel.energy = Math.min(pixel.energy + 10, 100); } }
    }
};

elements.pure_caffeine_gas = {
    color: "#f5e1c4", // Light caffeine gas color
    behavior: behaviors.GAS, // Floats like a gas
    category: "gases",
    state: "gas",
    density: 0.8, // Low density
    tempLow: 230, // Condenses to liquid
    stateLow: "pure_caffeine_liquid",
    reactions: {
        "human": { func: function(pixel) { if (pixel) pixel.energy = Math.min(pixel.energy + 2, 100); } }
    }
};

elements.pure_caffeine_solution = {
    color: "#b08968", // Light brown coffee color
    behavior: behaviors.LIQUID,
    viscosity: 15,
    category: "liquids",
    state: "liquid",
    density: 1005, // Slightly denser than water
    reactions: {
        "human": { func: function(pixel) { if (pixel) pixel.energy = Math.min(pixel.energy + 15, 100); } }
    }
};