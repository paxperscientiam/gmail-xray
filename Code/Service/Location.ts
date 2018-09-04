function Location() {
    const API_IPINFO = props.getProperty("API_IPINFO");

    const urlIPINFO = "https://ipinfo.io/geo?";

    const dataIP = (new JsonResponseHandler(urlIPINFO, {token: API_IPINFO})).data;

    this.ip = dataIP.ip;
    this.city = dataIP.city;
    this.region = dataIP.region;
    this.coordData = dataIP.loc;

    const lat = Number(coordData.split(",")[0]);
    const lon = Number(coordData.split(",")[1]);

    // weather service api limit precision to 4 decimal places
    this.lat = lat.toFixed(4);
    this.lon = lon.toFixed(4);
}
