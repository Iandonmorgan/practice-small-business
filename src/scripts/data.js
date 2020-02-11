const dataApiUrl = "http://localhost:8088/staff";

const outputTarget = document.getElementById("outputTarget");

const API = {
    getData() {
        return fetch(dataApiUrl + "?_expand=employee&_expand=department&_expand=computer").then(data => data.json());
    },
    createEmployee(employee) {
        return `
        <article class="employee">
            <header class="employee__name">
                <h1>${employee.employee.name}</h1>
            </header>
            <section class="employee__department">
                Works in the ${employee.department.department} department
            </section>
            <section class="employee__computer">
                Currently using a ${employee.computer.computer.split(" - ")[0]}
            </section>
        </article>
        `
    },
    renderData(data) {
        let dataHTML = "";
        outputTarget.innerHTML = "";
        data.forEach(data => {
            dataHTML += API.createEmployee(data);
        })
        outputTarget.innerHTML += dataHTML;
    }
}

export default API;