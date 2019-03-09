const dummyHabits = [
    {water: false, color: "royalblue"},
    {bed: false, color: "lightpink"},
    {lunch: false, color: "yellowgreen"}

]

const CREATE_HABIT = 'CREATE_HABIT'

export const createHabit = (habit) => ({
    type: TEST_ACTION,
    habit
})

const initialState = dummyHabits

const habits = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_HABIT: return [...state, action.habit]
        default: return state
    }
}

export default habits
