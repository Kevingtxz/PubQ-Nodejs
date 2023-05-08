export interface ProviderInterface {
  cod: number;
  description: string;
}

export enum ProviderEnum {
  GOOGLE = 1,
  GITHUB = 2,
  FACEBOOK = 3,
}

const providerMap = new Map<Number, ProviderInterface>();
providerMap.set(ProviderEnum.GOOGLE, {
  cod: ProviderEnum.GOOGLE,
  description: "GOOGLE",
});
providerMap.set(ProviderEnum.GITHUB, {
  cod: ProviderEnum.GITHUB,
  description: "GITHUB",
});
providerMap.set(ProviderEnum.FACEBOOK, {
  cod: ProviderEnum.FACEBOOK,
  description: "FACEBOOK",
});

export { providerMap };
