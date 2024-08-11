obj= {"person":{"name": "John","age": 30,"address": {"city": "New York","country":"USA"}}};

propertyPath = person.name;

function findNestedValue(obj, propertyPath) {
   const pathArray = propertyPath.split(".");
   let result = obj;
 
   for (let property of pathArray) {
     if (result && typeof result === "object" && property in result) {
       result = result[property];
     } else {
       return null;
     }
   }
 
   return result;
 }

//  console.log(findNestedValue(obj,propertyPath));