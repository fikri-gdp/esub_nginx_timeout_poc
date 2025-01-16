const express = require('express');
const app = express();

app.get('/esubmission', async (req, res) => {
    console.log('Received request, delaying response...');
    await new Promise(resolve => setTimeout(resolve, 90000)); // 90 seconds delay
    console.log("Success")
    res.status(200).send('Success after 90 seconds');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
