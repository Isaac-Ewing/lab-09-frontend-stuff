export function getCategoryIdByName(categories, name) {
    const matchedCategory = categories.find(category => {
      return category.name === name;
    });
    
    return matchedCategory.id;
  }