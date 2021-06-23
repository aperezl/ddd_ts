import { Food } from './food-model'

describe('Classes', () => {
  it('Class FoodModel', () => {
    const food = new Food('name', 'description', 50)

    expect(food.getName()).toEqual('name')
    expect(food.getDescription()).toEqual('description')
    expect(food.getPrice()).toBe(50)
  })
})
