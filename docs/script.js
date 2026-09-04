document.addEventListener("DOMContentLoaded", () => {
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            
            // 1. Remove active states
            tabBtns.forEach(b => b.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // 2. Set newly clicked button to active
            btn.classList.add("active");

            // 3. Find and reveal target content
            const targetId = btn.getAttribute("data-target");
            const targetContent = document.getElementById(targetId);
            
            // 4. Timeout allows the display property to switch before the opacity fades in
            setTimeout(() => {
                targetContent.classList.add("active");
            }, 10);
        });
    });
});
