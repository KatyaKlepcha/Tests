import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HousesType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) { //неважно, как мы назовем здесь student
    s.isActive = true
}

export function doesStudentLeave(s: StudentType, cityName: string) {
    return s.address.city.title === cityName
}

export function addMoneyToBudget(building: GovernmentBuildingType, budget: number) {
    return building.budget += budget
}

export function repaireHouse(houses: HousesType) {
    houses.repaired = true
}

export function toFireStaff(building: GovernmentBuildingType, staffCount: number) {
    building.staffCount -= staffCount
}

export function toHireStaff(building: GovernmentBuildingType, staffCount: number) {
    building.staffCount += staffCount
}