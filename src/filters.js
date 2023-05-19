const handleSearch = (input, recipes, toggle) => {
  let searchedRecipes;
  if (toggle === 'tag') {
    const searchedTags = input.toLowerCase().split(' ');

    searchedRecipes = recipes.filter((recipe) => {
      return searchedTags.every((tag) => {
        return splitTags(recipe.tags).includes(tag);
      });
    });
  } else if (toggle = 'name') {
    const searchedName = input.toLowerCase();

    searchedRecipes = recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(searchedName);
    });
  }
  if (!searchedRecipes.length) {
    return 'Sorry, no recipes were found in your search!';
  }
  return searchedRecipes;
};


const splitTags = (tags) => {
  return tags.flatMap((tag) => {
    return tag.split(' ');
  });
};

export { handleSearch };
