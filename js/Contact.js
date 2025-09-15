(function () {
  // ✅ Initialize EmailJS (replace with your PUBLIC KEY from EmailJS dashboard)
  emailjs.init("ss7czlPN5UHxHIlNh");
})();

const form = document.getElementById("messageform");
const statusDiv = document.getElementById("status");

// ✅ Helper to show status messages
function showStatus(message, type = "success") {
  const alertClass = type === "success" ? "alert-success" : "alert-danger";
  statusDiv.innerHTML = `
    <div class="alert ${alertClass} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
}

// ✅ Form submit handler
form.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();

  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }

  // ✅ Send Email using EmailJS
  emailjs.sendForm("service_dc9ev0t", "template_k0zkig9", this)
    .then(() => {
      showStatus("✅ Message sent successfully!", "success");
      form.reset();
      form.classList.remove("was-validated");
    })
    .catch((error) => {
      showStatus(`❌ Failed to send message. ${error.text}`, "error");
    });
});
