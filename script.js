const deadline = new Date("Oct 31, 2025 23:59:59").getTime();
const timerElement = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const distance = deadline - now;

  if (distance < 0) {
    timerElement.innerHTML = "Deadline Passed!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
// Seats Left Widget (simulate backend update)
function updateSeatsLeft(seats) {
  document.getElementById("seats-count").innerText = seats;
}

// Example: fetch from backend API later
// fetch("/api/seats").then(res => res.json()).then(data => updateSeatsLeft(data.seats));

// Temporary static demo
updateSeatsLeft(72);

function copyAccount() {
  const accountDetails = `
Bank: Chase Bank UK
Account Name: Couple’s Dinner 2025
Account Number: 12345678
Sort Code: 04-29-09
  `;
  navigator.clipboard.writeText(accountDetails).then(() => {
    alert("✅ Bank account details copied to clipboard!");
  });
}
<script>
  // FAQ dropdown logic
  document.querySelectorAll(".faq-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector("i");

      if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {
        // Close
        answer.style.maxHeight = "0";
        icon.classList.remove("rotate-180");
      } else {
        // Close all others
        document.querySelectorAll(".faq-answer").forEach((ans) => ans.style.maxHeight = "0");
        document.querySelectorAll(".faq-toggle i").forEach((ic) => ic.classList.remove("rotate-180"));

        // Open current
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.classList.add("rotate-180");
      }
    });
  });
</script>

