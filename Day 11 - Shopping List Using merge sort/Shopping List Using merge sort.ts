function merge(left, right): object [] {
    const mergedArray: object[] = [];
    let leftIndex: number = 0;
    let rightIndex: number = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex].total < right[rightIndex].total) {
        mergedArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        mergedArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
    while (leftIndex < left.length) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    }
    while (rightIndex < right.length) {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
    return mergedArray;
  }
  
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle: number = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
  }
  
  function getSortedShoppingListByMergeSort(shoppingList): string {
      let totalValuesArray: number[] = [];
    for (let i: number = 0; i < shoppingList.length; i++) {
      let actualItem = shoppingList[i];
      shoppingList[i].total = actualItem.price * actualItem.units;
      totalValuesArray.push(shoppingList[i].total);
    }
 
    let mergedList = mergeSort(shoppingList);
    let minToMaxText: string = '';
    let maxToMinText: string = '';
    mergedList.forEach((value, index: number) => { minToMaxText += value.name + ' (' +value.units + ')' + (index < shoppingList.length-1 ? ', ' : '') });
    mergedList.reverse().forEach((value, index: number) => { maxToMinText += value.name + ' (' +value.units + ')' + (index < shoppingList.length-1 ? ', ' : '')  });

    return "Max to min: " + maxToMinText + " \n" + "Min to max: " + minToMaxText + "";
  }
  
  let shoppingList = [
    {
      name: "Doritos",
      price: 25,
      units: 2,
    },
    {
      name: "Peanuts",
      price: 20,
      units: 3,
    },
    {
      name: "Pizza",
      price: 120,
      units: 2,
    },
    {
      name: "Beer",
      price: 15,
      units: 12,
    },
  ];

  console.log(getSortedShoppingListByMergeSort(shoppingList));
  