// Exercise from https://learn.skillcrush.com/module-11/practice-exercises-intro-to-apis/

// 1. Create a variable called notRegistered and use document.querySelector() to point it to the list element with the class of .not-registered.
const notRegistered = document.querySelector(".not-registered");

// 2. Create an async function expression called getRegistrationData.
const getRegistrationData = async function () {
    // 3. Create a variable called request. In the value, fetch this JSON file:
    const request = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json");
    // 4. Parse the JSON data from the request and save it to a variable named data.
    const data = await request.json();
    console.log(data);
    // 9. Inside getRegistrationData, call displayContactList and provide it data as an argument.
    displayContactList(data);
};

// 5. Create a function expression called displayContactList with data as a parameter. 
const displayContactList = function (data) {
    // 6. Inside the function, loop over the data. 
    for (const student of data) {
        // 7. For every student who hasn’t registered, create a new list element that will contain their name. 
        if (student.registered === "no") {
            const li = document.createElement("li");
            li.innerText = student.name;
            // 8. Append the list item to the notRegistered element.
            notRegistered.append(li);
        } 
    }
};

// 10. At the bottom of your code, call getRegistrationData. Refresh the browser pane, and you should see a list of students you need to call about that field trip.
getRegistrationData();