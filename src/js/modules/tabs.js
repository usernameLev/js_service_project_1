export const tabs = ({
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
}) => {
  const header = document.querySelector(headerSelector),
    tabs = document.querySelectorAll(tabSelector),
    contents = document.querySelectorAll(contentSelector);

  const hideTabContents = () => {
    contents.forEach((content) => {
      content.style.display = 'none';
    });

    tabs.forEach((tab) => {
      tab.classList.remove(activeClass);
    });
  };

  const showTabContent = (i = 0) => {
    contents[i].style.display = 'block';
    tabs[i].classList.add(activeClass);
  };

  hideTabContents();
  showTabContent();

  header.addEventListener('click', (e) => {
    const target = e.target;
    if (
      target &&
      (target.classList.contains(tabSelector.replace(/\./, '')) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, '')))
    ) {
      tabs.forEach((tab, i) => {
        if (target == tab || target.parentNode == tab) {
          hideTabContents();
          showTabContent(i);
        }
      });
    }
  });
};
