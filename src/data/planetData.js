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
];

export { planets };
