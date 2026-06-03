const API_URL = "http://localhost:5000/leads";

async function loadLeads() {

    const response = await fetch(API_URL);

    const leads = await response.json();

    const table = document.getElementById("leadTable");

    table.innerHTML = "";

    let newCount = 0;
    let convertedCount = 0;

    leads.forEach(lead => {

        if(lead.status === "New"){
            newCount++;
        }

        if(lead.status === "Converted"){
            convertedCount++;
        }

        table.innerHTML += `
        <tr>
            <td>${lead.id}</td>
            <td>${lead.name}</td>
            <td>${lead.email}</td>
            <td>${lead.source || "Website"}</td>
            <td>${lead.status}</td>
            <td>
                <button onclick="deleteLead(${lead.id})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });

    document.getElementById("totalLeads").innerText =
        leads.length;

    document.getElementById("newLeads").innerText =
        newCount;

    document.getElementById("convertedLeads").innerText =
        convertedCount;
}

document
.getElementById("leadForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const source =
        document.getElementById("source").value;

    const status =
        document.getElementById("status").value;

    await fetch(API_URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            email,
            source,
            status
        })
    });

    this.reset();

    loadLeads();
});

async function deleteLead(id){

    await fetch(`${API_URL}/${id}`,{
        method:"DELETE"
    });

    loadLeads();
}

loadLeads();