import {StudentType} from "../02/02";
import {addSkill, doesStudentLeave, makeStudentActive} from "./03";

let student: StudentType

beforeEach(() => {
    student = {
        id: 1,
        name: 'Katya',
        age: 35,
        isActive: false,
        address: {
            streetTitle: 'Vasnetsova',
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus',
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'

            },
            {
                id: 2,
                title: 'CSS'

            },
            {
                id: 3,
                title: 'React'

            },
        ]
    }
})

test('new tech skill be added to student', () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, 'JS')
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})


test('student must become active', () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})

test('does student leave in city', () => {
   let res1 = doesStudentLeave(student, 'Moscow')
   let res2 = doesStudentLeave(student, 'Minsk')

    expect(res1).toBe(false)
    expect(res2).toBe(true)
})