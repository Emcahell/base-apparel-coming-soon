document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    
    form.addEventListener("submit", (e) =>{
        const input = document.getElementById("email-input");
    const messageError = document.getElementById("message-error");
    const iconError = document.getElementById("icon-error");
    const btn = document.getElementById("btn");
    
    if (!input.value || !input.checkValidity()) {
        // Si NO es valido =>
        messageError.textContent = "Please povide a valid email";
        input.classList.add("input-error");
        btn.classList.add("btn-error");
        iconError.classList.remove("icon-error-none");
        e.preventDefault();
    } else {
        // Si es valido =>
        messageError.textContent = "";
        input.classList.remove("input-error");
        btn.classList.remove("btn-error");
        iconError.classList.add("icon-error-none");
    } 
 })
});