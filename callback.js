// Original code using callbacks
function fetchData(callback) {
    setTimeout(() => {
        const data = { userId: 1, name: "Anjali Sharma" };
        callback(null, data);
    }, 1000);
}

function logData(data, callback) {
    setTimeout(() => {
        console.log("Logging data:", data);
        callback(null, "Data logged successfully");
    }, 500);
}

function handleError(error) {
    console.error("An error occurred:", error);
}

// Using the functions with callbacks
fetchData((err, data) => {
    if (err) {
        handleError(err);
    } else {
        logData(data, (err, message) => {
            if (err) {
                handleError(err);
            } else {
                console.log(message);
            }
        });
    }
});
