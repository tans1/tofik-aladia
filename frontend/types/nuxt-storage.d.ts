declare module "nuxt-storage" {
  interface NuxtStorage {
    localStorage: {
      setData(key: string, value: any): void;
      getData(key: string): any;
    };
  }

  const storage: NuxtStorage;
  export default storage;
}
