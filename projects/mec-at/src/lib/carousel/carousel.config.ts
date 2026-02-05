export class CarouselConfig {
	pagination: Breakpoints;
  constructor (screens?: Breakpoints) {
    this.pagination = {
      small: screens?.small ? Math.floor(screens.small) : DEFAULT_PAGINATION.small,
      medium: screens?.medium ? Math.floor(screens.medium) : DEFAULT_PAGINATION.medium,
      large: screens?.large ? Math.floor(screens.large) : DEFAULT_PAGINATION.large,
      xlarge: screens?.xlarge ? Math.floor(screens.xlarge) : DEFAULT_PAGINATION.xlarge,
      xxlarge: screens?.xxlarge ? Math.floor(screens.xxlarge) : DEFAULT_PAGINATION.xxlarge
    }
  }
}

export interface Breakpoints {
  small: number;
  medium: number;
	large: number;
	xlarge: number;
	xxlarge: number;
}

export const DEFAULT_PAGINATION: Breakpoints = {
	small: 2,
	medium: 4,
	large: 5,
	xlarge: 5,
	xxlarge: 5
}
