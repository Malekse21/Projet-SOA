// 1. Make sure the port is 8082 and the project name is projetSOA
const BASE_URL = "http://localhost:8082/projetSOA/api/persons";

/* Load all persons */
function loadPersons() {
    fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
            const table = document.getElementById("personTable");
            table.innerHTML = "";

            data.forEach(p => {
                // FIXED: Added backticks (`) for the template string
                table.innerHTML += `
                    <tr>
                        <td>${p.id}</td>
                        <td>${p.name}</td>
                        <td>${p.email}</td>
                        <td>
                            <button class="btn btn-warning btn-sm" onclick="editPerson(${p.id}, '${p.name}', '${p.email}')">Edit</button>
                            <button class="btn btn-danger btn-sm" onclick="deletePerson(${p.id})">Delete</button>
                        </td>
                    </tr>`;
            });
        })
        .catch(err => console.error("Error loading persons:", err));
}

/* Add or Update */
function savePerson() {
    const id = document.getElementById("personId").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
        alert("All fields required");
        return;
    }

    const person = { name, email };

    if (id === "") {
        // ADD
        fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(person)
        }).then(() => {
            loadPersons();
            clearForm();
        });
    } else {
        // UPDATE
        // FIXED: Added backticks (`) for the URL
        fetch(`${BASE_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(person)
        }).then(() => {
            loadPersons();
            clearForm();
        });
    }
}

/* Edit */
function editPerson(id, name, email) {
    document.getElementById("personId").value = id;
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
}

/* Delete */
function deletePerson(id) {
    if (confirm("Are you sure?")) {
        // FIXED: Added backticks (`) for the URL
        fetch(`${BASE_URL}/${id}`, { method: "DELETE" })
            .then(() => loadPersons());
    }
}

/* Search */
function searchPerson() {
    const name = document.getElementById("searchInput").value;
    // FIXED: Added backticks (`) for the URL
    fetch(`${BASE_URL}/search?name=${name}`)
        .then(res => res.json())
        .then(data => {
            const table = document.getElementById("personTable");
            table.innerHTML = "";
            data.forEach(p => {
                table.innerHTML += `
                    <tr>
                        <td>${p.id}</td>
                        <td>${p.name}</td>
                        <td>${p.email}</td>
                        <td>
                            <button class="btn btn-warning btn-sm" onclick="editPerson(${p.id}, '${p.name}', '${p.email}')">Edit</button>
                            <button class="btn btn-danger btn-sm" onclick="deletePerson(${p.id})">Delete</button>
                        </td>
                    </tr>`;
            });
        });
}

function clearForm() {
    document.getElementById("personId").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}

// Initial load
loadPersons();