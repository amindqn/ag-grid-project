export class DataService {
    private dataUrl: string;

    constructor(dataUrl: string) {
        this.dataUrl = dataUrl;
    }

    async fetchData(): Promise<any> {
        const response = await fetch(this.dataUrl);
        const data = await response.text();
        return JSON.parse(data);
    }
}
