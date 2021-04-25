
const getUserCurrentLocation = () => {
    let initialCurrentLocation = {
        streetName: "Tegucigalpa",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }

    return initialCurrentLocation
}


export default { getUserCurrentLocation }