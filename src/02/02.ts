export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type LocalCityType = {
    title: string
    countryTitle: string
}

type TechnologiesType = {
    id: number
    title: string
}

export const student: StudentType = {
    id: 1,
    name: 'Katya',
    age: 35,
    isActive: true,
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

console.log(student.name)
console.log(student.age)
console.log(student.address.city.title)
console.log(student.technologies[2].title)