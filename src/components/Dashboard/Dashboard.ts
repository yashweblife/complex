export class Dashboard {
  header_tabs: HTMLElement[] = [];
  preview_tabs: HTMLElement[] = [];
  control_tabs: HTMLElement[] = [];
  current_tab: number = 0;
  constructor(data:{ header_tabs: HTMLElement[], preview_tabs: HTMLElement[], control_tabs: HTMLElement[] }) {
    data.header_tabs.forEach((header_tab: HTMLElement, index) => {
      header_tab.addEventListener("click", () => {
        data.header_tabs.forEach((tab: HTMLElement) =>
          tab.classList.remove("selected")
        );
        data.preview_tabs.forEach((tab: HTMLElement) =>
            tab.classList.add("dis-off")
        );
        data.control_tabs.forEach((tab: HTMLElement) => tab.classList.add("dis-off"));
        this.current_tab = index;
        header_tab.classList.add("selected");
        data.preview_tabs[index].classList.remove("dis-off");
        data.control_tabs[index].classList.remove("dis-off");
      });
    });
  }
}
