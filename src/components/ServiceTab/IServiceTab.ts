export interface IServiceTab {
  caption: string;
  logo: string;
  isActive: boolean;
  changeTab(tabName: string): void;
}