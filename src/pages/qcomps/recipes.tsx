export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

export default function RecipeList() {
  const listItems = recipes.map(item=>
      <RecipeDiv key = {item.id} name = {item.name} ingredients={Array.from(item.ingredients)}/>
    );
  return (
    <div>
      <h1>Recipes</h1>
      {listItems}
    </div>
  );
}

function RecipeDiv({name, ingredients} : {name: String, ingredients: Array<String>}){
  return (
    <div>
      <h2> {name} </h2>
      <ul>
        <IngredientsItemList ingredients={ingredients}/>
      </ul>
    </div>
  );
}

function IngredientsItemList({ ingredients }:{ingredients: Array<String>}) {
  return ingredients.map((ingredient) =>
    <li key = {ingredient}>
      {ingredient}
    </li>
  );
}