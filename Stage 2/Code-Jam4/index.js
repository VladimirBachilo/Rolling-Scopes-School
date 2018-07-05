let list = [{
    name: "Nashville, TN",
    latitude: 36.17,
    longitude: -86.78,
},
{
    name: "New York, NY",
    latitude: 40.71,
    longitude: -74.00,
},
{
    name: "Atlanta, GA",
    latitude: 36.75,
    longitude: -84.39,
},
{
    name: "Denver, CO",
    latitude: 39.74,
    longitude: -104.98,
},
{
    name: "Seattle, WA",
    latitude: 47.61,
    longitude: -122.24,
},
{
    name: "Los Angeles, CA",
    latitude: 34.05,
    longitude: -118.24,
},
{
    name: "Memphis, TN",
    latitude: 35.15,
    longitude: -90.05,
}
]

class Map {
constructor(list) {
    this.list = list;
}

getNothernMost() {
    return this.list.reduce((a, b) => {
        return a.longitude > b.longitude ? a : b
    }).name;
}
getEeasternMost() {
    return this.list.reduce((a, b) => {
        return a.latitude < b.latitude ? a : b
    }).name;
}
getSouthernMost() {
    return this.list.reduce((a, b) => {
        return a.longitude < b.longitude ? a : b
    }).name;
}
getWesternMost() {
    return this.list.reduce((a, b) => {
        return a.latitude > b.latitude ? a : b
    }).name;
}
getDistanceBetweenTwoPoints(place1, place2) {
    return Math.sqrt((place1.latitude - place2.latitude) ** 2 - (place1.longitude - place2.longitude) ** 2);
}
getClosestCity(latitude, longitude) {
    const place = {
        latitude,
        longitude
    };
    return this.list.reduce((memo, city) => {
        if (getDistance(city, place) < getDistance(memo, place)) {
            return city;
        }
        return memo;
    })
}
getStringOfCities() {
    let res = "";
    this.list.forEach(el => {
        if (el.name.includes('TN') || el.name.includes('NY') || el.name.includes('GA') || el.name.includes('CO') || el.name.includes('WA') || el.name.includes('CA')) {
            res += el.name.slice(0, -4) + ", ";
        } else res += el.name + ", ";
    });

    return res;
}
}