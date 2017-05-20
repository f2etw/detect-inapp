class InApp {

  useragent = '';

  constructor(useragent) {
    this.useragent = useragent;
  }

  get os(): string {
    return '';
  }

  get device(): string {
    return '';
  }

  get browser(): string {
    return '';
  }

  isMobile(): boolean {
    return false;
  }

  isTablet(): boolean {
    return false;
  }

  isDesktop(): boolean {
    return false;
  }

  inBot(): boolean {
    return false;
  }

  isInApp(): boolean {
    return false;
  }

  isApplePay(): boolean {
    return false;
  }

  isInstalled(app: string): boolean {
    return false;
  }

  addMatch(name, regex): InApp {
    return this;
  }
}

module.expect = InApp;
