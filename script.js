const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
};

// Create and insert a toggle button
const themeBtn = document.createElement("button");
themeBtn.innerText = "Toggle Dark Mode";
themeBtn.style.position = "fixed";
themeBtn.style.top = "20px";
themeBtn.style.right = "20px";
themeBtn.style.padding = "10px";
themeBtn.style.background = "#4e54c8";
themeBtn.style.color = "white";
themeBtn.style.border = "none";
themeBtn.style.borderRadius = "5px";
themeBtn.style.cursor = "pointer";
themeBtn.onclick = toggleTheme;
document.body.appendChild(themeBtn);

// Toast Notification
function showToast(message) {
    const toast = document.createElement("div");
    toast.innerText = message;
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.background = "#333";
    toast.style.color = "#fff";
    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "5px";
    toast.style.opacity = "0.9";
    toast.style.zIndex = "1000";
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Attach click event to experience items
document.addEventListener("DOMContentLoaded", () => {
    const experienceItems = document.querySelectorAll("#experience li");
    experienceItems.forEach(item => {
        item.addEventListener("click", () => {
            const company = item.innerText.split("–")[1]?.split(":")[0]?.trim() || "this company";
            showToast(`Learn more about my role at ${company}`);
        });
    });
});