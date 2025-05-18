document.querySelectorAll('.btn-danger').forEach((btn) => {
    btn.addEventListener('click', () => {
        const reason = prompt(
            'Reason for banning this account (e.g., violation of terms, suspicious activity)?'
        );
        if (reason) {
            alert(`User banned for the following reason: ${reason}`);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const realtorTableBody = document.querySelector("tbody");
    const storedRealtors = JSON.parse(localStorage.getItem("realtors")) || [];

    storedRealtors.forEach((realtor, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                <td>${index + 1}</td>
                <td>${realtor.fullName}</td>
                <td>${realtor.email}</td>
                <td><span class="badge bg-success">Approved</span></td>
                <td>
                    <button class="btn btn-warning btn-sm">Disapprove</button>
                    <button class="btn btn-danger btn-sm">Ban</button>
                </td>
            `;
        realtorTableBody.appendChild(row);
    });
});