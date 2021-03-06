function LocationService() {
    Logger.log("Creating new LocationService instance ... ");

    const API_IPINFO = props.getProperty("API_IPINFO");

    const url = "https://ipinfo.io/geo?";

    const data = (new JsonResponseHandler(url, {token: API_IPINFO})).data;

    this.ip = data.ip;
    this.city = data.city;
    this.region = data.region;
    this.coordData = data.loc;

    const lat = Number(this.coordData.split(",")[0]);
    const lon = Number(this.coordData.split(",")[1]);

    // weather service api limit precision to 4 decimal places
    this.lat = lat.toFixed(4);
    this.lon = lon.toFixed(4);

    this.coord = String(this.lat) + "," + String(this.lon);
}
