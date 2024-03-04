const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/exercises', (req, res) => {
    const muscleGroup = req.query.muscleGroup;
    // Fetch exercises based on the muscle group selected
    // You can use a database or hard-coded exercises here
    const exercises = getExercisesForMuscleGroup(muscleGroup);
    res.send(exercises);
});

function getExercisesForMuscleGroup(muscleGroup) {
    // Dummy data for demonstration
    const exercises = {
        chest: ['Push-ups', 'Bench Press', 'Chest Fly'],
        back: ['Pull-ups', 'Deadlifts', 'Bent Over Rows'],
        legs: ['Squats', 'Lunges', 'Leg Press'],
        shoulders: ['Overhead Press', 'Lateral Raises', 'Front Raises'],
        arms: ['Bicep Curls', 'Tricep Dips', 'Hammer Curls']
    };
    return exercises[muscleGroup];
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
