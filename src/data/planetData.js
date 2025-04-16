const planets = [
    {
        name: "Mercury",
        scale: 0.006,
        light: 300,
    },
    {
        name: "Venus",
        scale: 0.006,
        light: 150,
        additionalStyle: {
            filter: "saturate(110%)",
        },
    },
    {
        name: "Earth",
        scale: 0.006,
        light: 800,
        additionalStyle: {
            filter: "grayscale(40%)",
        },
    },
    {
        name: "Mars",
        scale: 0.006,
        light: 300,
    },
    {
        name: "Jupiter",
        scale: 0.006,
        light: 300,
    },
    {
        name: "Saturn",
        scale: 0.006,
        light: 200,
        ambientLight: 0.3,
    },
    {
        name: "Uranus",
        scale: 0.006,
        light: 300,
    },
    {
        name: "Neptune",
        scale: 0.006,
        light: 300,
    },
    {
        name: "Pluto",
        scale: 0.006,
        light: 300,
    },
];

export { planets };
