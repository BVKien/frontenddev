// Toast
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");

  if (main) {
    const toast = document.createElement("div");
    const autoRemoveId = setTimeout(
      () => main.removeChild(toast),
      duration + 1000
    );

    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: "ti-check-box",
      info: "ti-info",
      warning: "ti-flag-alt",
      error: "ti-alert",
    };
    const icon = icons[type];

    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease .8s, fadeOut linear 4s ${delay} forwards`;

    toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="ti-close"></i>
            </div>
        `;

    main.appendChild(toast);
  }
}

function showSuccessToast() {
  toast({
    title: "Success",
    message: "This is a success message",
    type: "success",
    duration: 3000,
  });
}

function showInfoToast() {
  toast({
    title: "Information",
    message: "This is an info message",
    type: "info",
    duration: 3000,
  });
}

function showWarningToast() {
  toast({
    title: "Warning",
    message: "This is a warning message",
    type: "warning",
    duration: 3000,
  });
}

function showErrorToast() {
  toast({
    title: "Error",
    message: "This is an error message",
    type: "error",
    duration: 3000,
  });
}
