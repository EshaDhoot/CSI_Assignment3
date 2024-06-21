## CSI_3rd_Assignment(NodeJs)
### "Convert callback-based code to Promises and Async/Await"

### Callback based code Explanation

### *fetchData(callback)*
- Purpose: This function simulates fetching data asynchronously (e.g., from a database or an API).
- Parameters: It takes a single parameter `callback`, which is a function to be called when the data fetching operation completes.
- Implementation:
    - `setTimeout` is used to simulate a delay of 1 second (1000 milliseconds), mimicing an asynchronous operation.
    - After the delay, a data object `{ userId: 1, name: "Anjali Sharma" }` is created.
    - The `callback` function is then called with `null` as the first argument (indicating no error) and the `data` object as the second argument.

### *logData(data, callback)*
- Purpose: This function simulates logging data asynchronously.
- Parameters:
    - `data`: The data to be logged.
    - `callback`: A function to be called when the logging operation completes.
- Implementation:
    - `setTimeout` is used to simulate a delay of 0.5 seconds (500 milliseconds).
    - After the delay, it logs the `data` to the console.
    - The `callback` function is then called with `null` as the first argument (indicating no error) and a success message as the second argument.

### *handleError(error)*
- Purpose: This function handles errors by logging them to the console.
- Parameters:
    - `error`: The error to be handled.
- Implementation:
    - It logs the error message to the console using `console.error`.

### Using the Functions with Callbacks

- Purpose: This part of the code executes the functions and handles their asynchronous nature using callbacks.
- Implementation:
    - `fetchData` is called with a callback function that takes `err` and `data` as parameters.
    - Inside this callback:
        - If there is an error (`err` is `not null`), `handleError(err)` is called.
        - Otherwise (`err` is `null`), `logData` is called with the `data` and another callback function.
    - The callback for `logData` also takes `err` and `message` as parameters.
        - If there is an error (`err` is `not null`), `handleError(err)` is called.
        - Otherwise (`err` is `null`), the success message is logged to the console.


### Explanation of Flow
1. *Data Fetching:*
    - `fetchData` is initiated, which simulates a data fetch operation with a 1-second delay.
    - After 1 second, the `data` object is returned via the callback.

2. *Data Handling:*
    - If `fetchData` encounters an error, `handleError` logs the error.
    - If `fetchData` is successful, `logData` is called with the fetched data and a logging callback.

3. *Data Logging:*
    - `logData` is initiated, which simulates logging with a 0.5-second delay.
    - After 0.5 seconds, the data is logged to the console.
    - The logging callback then logs a success message or handles any errors that occurred during logging.



### Promises and Async/Await code Explanation

### *log(message)*
- Purpose: This function logs messages to the console with a `[LOG]` prefix for better readability.
- Parameters:
    - `message`: The message to be logged.
- Implementation:
    - The function simply uses `console.log` to print the message to the console.

### *handleError(error)*
- Purpose: This function handles errors by logging them to the console with an `[ERROR]` prefix.
- Parameters:
    - `error`: The error to be logged.
- Implementation:
    - The function uses `console.error` to print the error message to the console.

### *fetchData()*
- Purpose: This function simulates fetching data asynchronously and returns a Promise.
- Implementation:
    - A new Promise is created.
    - `setTimeout` simulates an asynchronous operation with a delay of 1 second (1000 milliseconds).
    - After the delay, the data object `{ userId: 1, name: "Anjali Sharma" }` is created.
    - The `resolve` function is called with the `data` object, indicating the successful completion of the operation.

### *logData(data)*
- Purpose: This function simulates logging data asynchronously and returns a Promise.
- Parameters:
    - `data`: The data to be logged.
- Implementation:
    - A new Promise is created.
    - `setTimeout` simulates an asynchronous operation with a delay of 0.5 seconds (500 milliseconds).
    - After the delay, the data is logged to the console using the `log` function.
    - The `resolve` function is called with a success message, indicating the successful completion of the operation.

### Main Function Using Async/Await
- ### *execute()*
- Purpose: This async function executes the fetch and log operations sequentially and handles any errors that occur.
- Implementation:
    - The function is marked as `async`, allowing the use of `await` within it.
    - `try` block is used to wrap the asynchronous operations to handle potential errors.
        - `await fetchData()` waits for the `fetchData` Promise to resolve and assigns the resolved value (data) to the `data` variable.
        - `await logData(data)` waits for the `logData` Promise to resolve and assigns the resolved value (message) to the `message` variable.
        - The `log` function is called to log the success message.
- `catch` block catches any errors that occur in the `try` block and passes them to the `handleError` function.


### Explanation of Flow
1. *Data Fetching:*
    - `execute` is called, and because it is an async function, it starts executing asynchronously.
    - `fetchData` is called and returns a Promise that resolves after 1 second.
    - `await fetchData()` pauses the execution of `execute` until the Promise resolves, then assigns the resulting data to `data`.

2. *Data Logging:*
    - With the fetched data, `logData(data)` is called and returns a Promise that resolves after 0.5 seconds.
    - `await logData(data) `pauses the execution of `execute` until the Promise resolves, then assigns the resulting message to `message`.

3. *Logging the Message:*
    - The success message is logged using the `log` function.

4. *Error Handling:*
    - If any error occurs during the fetching or logging operations, the `catch` block catches the error and passes it to `handleError`, which logs the error message.