export type CityType={
    title: string
    houses: Array<HousesType>;
    governmentBuildings: Array<GovernmentBuildingType>;
    citizensNumber: number
}

export type GovernmentBuildingType ={
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}

export type HousesType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

type AddressType = {
    number?: number
    street: StreetType
}

type StreetType = {
    title: string
}