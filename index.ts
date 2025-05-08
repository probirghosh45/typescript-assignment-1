function formatString(input: string, toUpper?: boolean): string {
    if (toUpper== null || toUpper==true) {
        return input.toUpperCase()
    }
    else{
        return input.toLocaleLowerCase()
    }
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter(item => item.rating >=4)
}


class Vehicle {
    constructor(private make: string, private year: number) {}
      getInfo():string {
          return `Make: ${this.make}, Year: ${this.year}`
      }
  }
  
  class Car extends Vehicle {
      constructor(make: string, year: number, private model: string) {
          super(make, year);
      }
      getModel():string{
          return `Model: ${this.model}`
      }
  }

  function processValue(value: string | number): number{
    if (typeof value === "string") {
        return value.length
        
    } else if (typeof value === "number") {
        return value*2
        
    }
    return 0;
}


interface Product {
    name: string;
    price: number;
  }

function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length === 0){
       return null;
    }

    let mostExpensiveProduct = products[0]
    for (const product of products) {
        if (product.price > mostExpensiveProduct.price) {
            mostExpensiveProduct = product
        }
        
    }
    return mostExpensiveProduct ;
}


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday){
        return "Weekend"
    }
    else return "Weekday"
  }


  