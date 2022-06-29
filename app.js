function attachEvents() {
    // Taking DOM references and setting the URL address
    let loadBtn = document.querySelector(`button#btnLoad`);
    let createBtn = document.querySelector(`button#btnCreate`);
    let personField = document.querySelector(`input#person`);
    let phoneField = document.querySelector(`input#phone`);
    let phoneBookUl = document.querySelector(`ul#phonebook`);
    let temUrl = `http://localhost:3030/jsonstore/phonebook`;

    // Load button event 
    loadBtn.addEventListener('click', loadData);

    // Load button functionality
    function loadData() {
        phoneBookUl.innerHTML = ``;

        // Data GET Request
        fetch(temUrl)
            .then(responsive => responsive.json())
            .then(data => {
                // Creating li elements via DOM manipulation
                Object.entries(data).forEach(el => {
                    let li = document.createElement(`li`);
                    let delBtn = document.createElement(`button`);
                    delBtn.textContent = `Delete`;

                    li.id = el[0];
                    let delUrl = `http://localhost:3030/jsonstore/phonebook/${li.id}`;
                    li.textContent = `${el[1].person}:${el[1].phone}`;
                    li.appendChild(delBtn);

                    // Delete button event
                    delBtn.addEventListener(`click`, function () {
                        fetch(delUrl, {
                            method: 'DELETE'
                        });
                        phoneBookUl.innerHTML = ``;
                    });
                    phoneBookUl.appendChild(li);
                });
            });
    }

    // Create button event
    createBtn.addEventListener('click', function (ev) {
        ev.preventDefault();

        let personInfo = personField.value;
        let phoneInfo = phoneField.value;

        // Input data validation
        if (personInfo !== '' || phoneInfo !== '') {

            let data = {
                person: personInfo,
                phone: phoneInfo
            };

            loadData();

            // POST request on the server
            fetch(temUrl, {
                method: `POST`,
                body: JSON.stringify(data)
            });
        }

        // Clearing input fields
        personField.value = ``;
        phoneField.value = ``;
    });
}
attachEvents();