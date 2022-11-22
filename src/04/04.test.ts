test('should choose men over 90', () => {
    const ages = [15, 40, 60, 80, 100, 90]

    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('choose courses cheaper 160', () => {
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 150},
        {title: 'REACT', price: 200}
    ]

    const cheapCourses = courses.filter(c => c.price < 160)

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('CSS')
    expect(cheapCourses[1].title).toBe('JS')

})