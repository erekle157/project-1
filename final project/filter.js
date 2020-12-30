function sort() {
    const buttons = document.querySelectorAll(".s-P");
    const items = document.querySelectorAll(".MW-cards");
  
    function filter(category, items) {
      items.forEach((item) => {
        const isItemFiltered = !item.classList.contains(category);
        if (isItemFiltered) {
          item.classList.add("hide");
        } else {
          item.classList.remove("hide");
        }
      });
    }
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const currentCategory = button.dataset.filter;
        filter(currentCategory, items);
      });
    });
  }
  
  sort();