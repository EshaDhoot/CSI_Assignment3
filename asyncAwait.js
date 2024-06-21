// Utility function for logging
function log(message) {
    console.log(`${message}`);
}

function handleError(error) {
    console.error(`${error}`);
}

// Refactored code using Promises and async/await
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { userId: 1, name: "Anjali Sharma" };
            resolve(data);
        }, 1000);
    });
}

function logData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            log(`Logging data: ${JSON.stringify(data)}`);
            resolve("Data logged successfully");
        }, 500);
    });
}

async function execute() {
    try {
        const data = await fetchData();
        const message = await logData(data);
        log(message);
    } catch (error) {
        handleError(error);
    }
}

// Execute the async function
execute();
