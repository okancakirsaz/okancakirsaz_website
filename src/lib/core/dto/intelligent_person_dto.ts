export default class IntelligentPersonDto {
  ipAddress!: string;
  location!: string;
  lat!: number;
  long!: number;
  org!: string;
  date!: string;
  toJson(): any {
    return {
      ipAddress: this.ipAddress,
      location: this.location,
      lat: this.lat,
      long: this.long,
      org: this.org,
      date: this.date,
    };
  }

  static fromJson(data: any): IntelligentPersonDto {
    const object: IntelligentPersonDto = new IntelligentPersonDto();
    object.ipAddress = data["ipAddress"];
    object.location = data["location"];
    object.lat = data["lat"];
    object.long = data["long"];
    object.org = data["org"];
    object.date = data["date"];
    return object;
  }
}
