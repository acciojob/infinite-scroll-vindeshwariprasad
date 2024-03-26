document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("infi-list");

  // Function to add more list items
  function addMoreItems() {
    const currentItemCount = list.children.length;
    for (let i = currentItemCount + 1; i <= currentItemCount + 2; i++) {
      const li = document.createElement("li");
      li.textContent = "List Item " + i;
      list.appendChild(li);
    }
  }

  // Function to check if user has scrolled to the bottom
  function isAtBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }

  // Add initial list items
  for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = "List Item " + i;
    list.appendChild(li);
  }

  // Add event listener for scrolling
  window.addEventListener("scroll", function () {
    if (isAtBottom()) {
      addMoreItems();
    }
  });

  // Add event listener for resizing (for cases when window height changes dynamically)
  window.addEventListener("resize", function () {
    if (isAtBottom()) {
      addMoreItems();
    }
  });
});



