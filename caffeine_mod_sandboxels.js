elements.caffeine = {
    color: "#c69c6d", // Light brown powder
    behavior: behaviors.POWDER, // Falls like a powder
    category: "powders",
    state: "solid",
    density: 1230, // Density of caffeine powder
    tempHigh: 178, // Melts at 178°C
    stateHigh: "caffeine_liquid", // Turns into liquid when heated
    reactions: {
        "water": { elem1: "caffeine_solution", elem2: "caffeine_solution" }, // Dissolves in water
        "fire": { elem1: "caffeine_gas", elem2: "caffeine_gas" }, // Turns into gas when heated
        "pressure": { elem1: "caffeine_liquid", elem2: "caffeine_liquid" } // High pressure increases caffeine solubility
    }
};

elements.caffeine_liquid = {
    color: "#8b5a2b", // Dark brown liquid
    behavior: behaviors.LIQUID, // Behaves as liquid
    viscosity: 50, // Moderately viscous liquid
    category: "liquids",
    state: "liquid",
    density: 1100, // Denser than water
    tempHigh: 238, // Boils at 238°C
    stateHigh: "caffeine_gas", // Turns into gas when heated
    tempLow: 160, // Freezes back to solid caffeine
    stateLow: "caffeine", // Solidifies into caffeine powder
    reactions: {
        "water": { elem1: "caffeine_solution", elem2: "caffeine_solution" }, // Dissolves further in water
        "human": { 
            func: function(pixel) { 
                if (pixel && pixel.energy !== undefined) { 
                    pixel.energy += 15; // Boosts energy when human touches it
                    pixel.mood = "energetic"; // Boosts human mood
                }
            }
        },
        "fire": { elem1: "caffeine_gas", elem2: "caffeine_gas" }, // Turns to gas if heated
        "pressure": { elem1: "caffeine_solution", elem2: "caffeine_solution" } // Pressure dissolves caffeine
    }
};

elements.caffeine_gas = {
    color: "#f5e1c4", // Caffeine gas vapor
    behavior: behaviors.GAS, // Floats like a gas
    category: "gases",
    state: "gas",
    density: 0.8, // Caffeine gas density
    tempLow: 230, // Condenses back into liquid caffeine
    stateLow: "caffeine_liquid",
    tempHigh: 250, // Evaporates further to gas at higher temperatures
    stateHigh: "caffeine_vapor", // Turns to caffeine vapor
    reactions: {
        "air": { elem1: "caffeine_vapor", elem2: "caffeine_vapor" }, // Spreads out in air as vapor
        "water": { elem1: "caffeine_solution", elem2: "caffeine_solution" }, // Dissolves in water
        "human": { 
            func: function(pixel) { 
                if (pixel && pixel.energy !== undefined) { 
                    pixel.energy += 2; // Small energy boost from caffeine gas
                    pixel.mood = "nervous"; // Human gets jittery
                }
            }
        }
    }
};

elements.caffeine_solution = {
    color: "#b08968", // Light brown, like coffee
    behavior: behaviors.LIQUID, // Flows like a liquid
    viscosity: 20, // Less viscous than liquid caffeine
    category: "liquids",
    state: "liquid",
    density: 1005, // Denser than water
    reactions: {
        "human": { 
            func: function (pixel) { 
                if (pixel && pixel.energy !== undefined) { 
                    pixel.energy += 10; // Boosts energy when human touches it
                    pixel.mood = "energetic"; // Improves human mood
                }
            } 
        },
        "fire": { elem1: "caffeine_gas", elem2: "caffeine_gas" }, // Turns to gas if heated
        "pressure": { elem1: "caffeine_liquid", elem2: "caffeine_liquid" }, // Caffeine in high pressure
        "water": { elem1: "caffeine_solution", elem2: "caffeine_solution" } // Dissolves more in water
    }
};

elements.caffeine_vapor = {
    color: "#e7cba7", // Light vapor color
    behavior: behaviors.GAS, // Floats like a gas
    category: "gases",
    state: "gas",
    density: 0.6, // Less dense than caffeine gas
    tempLow: 210, // Condenses back to liquid caffeine
    stateLow: "caffeine_liquid",
    tempHigh: 270, // Turns into more vapor at higher temperatures
    stateHigh: "caffeine_gas",
    reactions: {
        "air": { elem1: "caffeine_vapor", elem2: "caffeine_vapor" }, // Spreads out in air
        "water": { elem1: "caffeine_solution", elem2: "caffeine_solution" } // Dissolves in water
    }
};