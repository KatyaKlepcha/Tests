import {CityType} from "../02/02_02";
import {addMoneyToBudget, repaireHouse, toFireStaff, toHireStaff} from "./03";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
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

test('budget should be changed for Hospital', () => {

    addMoneyToBudget(city.governmentBuildings[0], 100000)
    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test('budget should be changed for FIRE-STATION', () => {

    addMoneyToBudget(city.governmentBuildings[1], 100000)
    expect(city.governmentBuildings[1].budget).toBe(200000)
})

test('houses should be repaired', () => {
    repaireHouse(city.houses[1])
    expect(city.houses[1].repaired).toBeTruthy()
    expect(city.houses[2].repaired).toBeTruthy()
})

test('staff should be increased', () => {
    toFireStaff(city.governmentBuildings[0], 20)
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('staff should be recruit', () => {
    toHireStaff(city.governmentBuildings[0], 20)
    expect(city.governmentBuildings[0].staffCount).toBe(220)
})