import { FoodHelper } from '../../helpers/food-model-helper'
import { Food } from './food-model'

describe('Classes', () => {
  it('Class FoodModel', () => {
    const food = new Food({
      name: 'name',
      description: 'description',
      price: 50,
      inventory: 24
    })

    expect(food.getFood()).toEqual(food)
    expect(food.getName()).toEqual('name')
    expect(food.getDescription()).toEqual('description')
    expect(food.getPrice()).toBe(50)
    expect(food.getInventory()).toBe(24)
  })

  it('Food Helper', () => {
    const foodHelper = new FoodHelper()
    expect(foodHelper).toEqual(foodHelper)
  })
})
