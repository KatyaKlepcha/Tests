import {CityType} from "../02/02_02";
import {demolishHousesOnTheStreet, getBuildingWithCorrectStuffCount} from "./04_02";

export let city: CityType;


beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street',
                    }
                }
            },
            {
                id: 2,
                buildedAt: 2013,
                repaired: false,
                address: {
                    number: 120,
                    street: {
                        title: 'Red street'
                    }
                }
            },
            {
                id: 3,
                buildedAt: 2014,
                repaired: false,
                address: {
                    number: 150,
                    street: {
                        title: 'Green street'
                    }
                }
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                },
            },
            {
                type: "FIRE-STATION",
                budget: 100000,
                staffCount: 300,
                address: {
                    street: {
                        title: 'Park Str'
                    }
                }
            }
        ],
        citizensNumber: 100000
    }
})

test('Houses should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'Red street')

    expect(city.houses.length).toBe(2)
    expect(city.houses[0].id).toBe(1)
})

test('building with correct stuff count', () => {

    let buildings = getBuildingWithCorrectStuffCount(city.governmentBuildings, 200)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe('FIRE-STATION')
})