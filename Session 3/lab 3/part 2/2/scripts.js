let contacts = [];

function performOperation() {
    let operation = prompt('Enter an operation (add, search):').toLowerCase();

    if (operation === 'add') {
        addContact();
    } else if (operation === 'search') {
        searchContact();
    } else {
        alert('Invalid operation. Please enter either "add" or "search".');
        performOperation();
    }
}

function addContact() {
    let name = prompt('Enter the contact name:').trim();
    let phone = prompt('Enter the contact phone number:').trim();

    if (/^[a-zA-Z\s]+$/.test(name) && /^[0-9]+$/.test(phone)) {
        let contact = {
            name: name,
            phone: phone
        };
        contacts.push(contact);
        alert('Contact added successfully!');
    } else {
        if (!/^[a-zA-Z\s]+$/.test(name)) {
            alert('Name should only contain letters and spaces.');
        }
        if (!/^[0-9]+$/.test(phone)) {
            alert('Phone number should only contain numbers.');
        }
    }
    performOperation();
}

function searchContact() {
    let searchQuery = prompt('Enter a name or phone number to search for:').trim().toLowerCase();
    let foundContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery) ||
        contact.phone.includes(searchQuery)
    );

    let output = document.getElementById('output');
    output.innerHTML = '';

    if (foundContacts.length > 0) {
        foundContacts.forEach(contact => {
            output.innerHTML += `
                <div class="contact">
                    <p><strong>Name:</strong> ${contact.name}</p>
                    <p><strong>Phone:</strong> ${contact.phone}</p>
                </div>
            `;
        });
    } else {
        output.innerHTML = '<p>No contacts found.</p>';
    }

    setTimeout(() => {
        performOperation();
    }, 500);
}

performOperation();