class StorageService {
  public getData(key: string = "") {
    const result = localStorage.getItem(key);
    if (!result) return "";
    return JSON.parse(result);
  }

  public setData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

const storageService = new StorageService();

export default storageService;
